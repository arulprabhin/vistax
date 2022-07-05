import TokenModel from '../Models/Token';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
const { JSONPath } = require('jsonpath-plus');
import axios from 'axios';
import { API_CONFIG, DEFAULT_HEADERS } from './apiUtil';

/*API General Format:
{
 	status: 'err/{code/message}', body: {
 		 JSON Data (or)
 		msg: 'error description',
 		details: { JSON Object / Array } // Optional
 	}, count: 100, limit: 10, offset: 50 // optional
}*/

//Supporting functions for object cloner
const isSpecificValue = (val) => {
    return val instanceof Buffer || val instanceof Date || val instanceof RegExp;
  },
  cloneSpecificValue = (val) => {
    if (val instanceof Buffer) {
      let buff = Buffer.alloc ? Buffer.alloc(val.length) : new Buffer(val.length);
      val.copy(buff);
      return buff;
    } else if (val instanceof Date) {
      return new Date(val.getTime());
    } else if (val instanceof RegExp) {
      return new RegExp(val);
    } else {
      throw new Error('Unexpected situation');
    }
  },
  deepCloneArray = (arr) => {
    let clone = [];
    arr.forEach(function (item, index) {
      if (typeof item === 'object' && item !== null) {
        if (Array.isArray(item)) {
          clone[index] = deepCloneArray(item);
        } else if (isSpecificValue(item)) {
          clone[index] = cloneSpecificValue(item);
        } else {
          clone[index] = deepExtend({}, item);
        }
      } else {
        clone[index] = item;
      }
    });
    return clone;
  },
  safeGetProperty = (object, property) => {
    return property === '__proto__' ? undefined : object[property];
  };

const sanitizeMongoParam = (parameter) => {
    if (parameter instanceof Object && !Array.isArray(parameter)) {
      for (var key in parameter) {
        if (/^\$/.test(key)) {
          delete parameter[key];
        } else {
          sanitizeMongoParam(parameter[key]);
        }
      }
    }
    return parameter;
  },
  getAuthToken = (req) => {
    if (req.cookies.accessToken) return sanitizeMongoParam(req.cookies.accessToken.toString());
    else if (req.get('Authorization') && req.get('Authorization').match(/Bearer\s(\S+)/))
      return sanitizeMongoParam(req.get('Authorization').match(/Bearer\s(\S+)/)[1]);
    else if (req.query.access_token) return sanitizeMongoParam(req.query.access_token.toString());
    else if (req.body.access_token) return sanitizeMongoParam(req.body.access_token.toString());
    else null;
  },
  escapeRegExp = (str) => {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  },
  replaceAll = (str, find, replace) => {
    if (typeof str == 'string') return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
    else return str;
  },
  sanitizeHtml = (data) => {
    if (!data) return data;
    let replacements = [
      { src: '<', dest: '&lt;' },
      { src: '>', dest: '&gt;' },
      { src: '/"/g', dest: '&quot;' },
      { src: "/'/g", dest: '&#x27' },
      { src: '///g', dest: '&#x2F' },
    ];
    data = JSON.stringify(data);
    for (let replacement of replacements) data = replaceAll(data, replacement.src, replacement.dest);
    return JSON.parse(data);
  },
  setToArray = (theSet) => [...theSet],
  loadGlobalConfig = (callbackFn) => {
    console.log('GLOBAL CONFIG: Loading...');
    try {
      const globalCollection = mongoose.connection.db.collection('global_config');
      const older_time = 0,
        dash_time = 0,
        compliance_time = 0;
      globalCollection.findOne({ modulename: 'system' }, (err, globalConfig) => {
        if (!globalConfig) {
          console.err('Unable to read global config!');
        } else {
          let config = globalConfig.config;
          config.defaultauth = '***************';
          config.older_time = older_time;
          config.dash_time = dash_time;
          config.compliance_time = compliance_time;
          config.verbose = config.UxLogLevel;
          callbackFn(config);
        }
      });
    } catch (e) {
      console.log(e);
      callbackFn('ERROR');
    }
  },
  loadMitreDetails = (callbackFn) => {
    console.log('MITRE DETAILS: Loading...');
    try {
      const globalCollection = mongoose.connection.db.collection('mitre_details');
      globalCollection.find({}).toArray((err_resp, items) => {
        callbackFn(items[0]);
      });
    } catch (e) {
      callbackFn('ERROR');
    }
  },
  loadUiStrings = (callbackFn) => {
    console.log('UI STRINGS: Loading...');
    try {
      const globalCollection = mongoose.connection.db.collection('ui_strings');
      globalCollection.find({}).toArray((err_resp, items) => {
        callbackFn(items[0].ui_strings);
      });
    } catch (e) {
      callbackFn('ERROR');
    }
  },
  minsToMilliSecs = (mins) => mins * 60 * 1000,
  hrsToMilliSecs = (hrs) => hrs * 60 * 60 * 1000,
  daysToMilliSecs = (days) => days * 24 * 60 * 60 * 1000,
  setCookies = (res, cookies) => {
    // {name: 'cookie name', value: 'cookie value', options: {...}} or [{name: 'cookie name1', value: 'cookie value1', options: {...}}, {name: 'cookie name2', value: 'cookie value2'}]
    cookies = cookies ? (!Array.isArray(cookies) ? [cookies] : cookies) : [];
    cookies.forEach((cookie) => {
      res.cookie(cookie.name, cookie.value, cookie.options ? cookie.options : {});
    });
  },
  setHeaders = (res, headers) => {

    if(headers && !Array.isArray(headers)) { // {header: value} or {header: value, header: value, header: value, ...}
      Object.keys(headers).forEach(key => res.header(key, headers[key]) );
    } else if(headers) {  // [{header1: value1}, {header2: value2}]
      for (let header of headers) res.header(Object.keys(header), Object.values(header));
    }
  },
  getErr = (typ, msg, details) => {
    return {
      status: 'err',
      body: { type: typ || 'server_err', msg: msg || 'Server Error Occurred!', details: details },
    };
  },
  sendErr = (res, { statusCode, msg, type, details, headers, cookies }) => {
    if (headers) setHeaders(res, headers);
    if (cookies) setCookies(res, cookies);
    res.status(statusCode || 400).send(getErr(type, msg, details));
  },
  sendErrBody = (res, body, statusCode, headers, cookies) => {
    if (headers) setHeaders(res, headers);
    if (cookies) setCookies(res, cookies);
    const errBody = body.status ? body : { status: 'err', body: body || {} };
    res.status(statusCode || 400).send(errBody);
  },
  getResponse = (status, body, count, limit, offset, total, page, totalPages) => {
    let resp = { status: status || 'success' };
    if (!isNaN(total)) resp.total = Number(total);
    if (isNaN(total) && !isNaN(count)) resp.total = Number(count);
    if (!isNaN(totalPages)) resp.totalPages = totalPages;
    if (!isNaN(page)) resp.page = page;
    if (!isNaN(offset)) resp.from = offset;
    if (!isNaN(limit)) resp.limit = limit;
    if (!isNaN(count)) resp.count = Number(count);
    if (body || body === false || body === 0) resp.body = body;
    return resp;
  },
  sendResponse = (
    res,
    { statusCode, status, body, total, count, limit, offset, page, totalPages, headers, cookies }
  ) => {
    if (headers) setHeaders(res, headers);
    if (cookies) setCookies(res, cookies);
    res.status(statusCode || 200).send(getResponse(status, body, count, limit, offset, total, page, totalPages));
  },
  sendResponseBody = (res, body, statusCode, headers, cookies) => {
    if (headers) setHeaders(res, headers);
    if (cookies) setCookies(res, cookies);
    res.status(statusCode || 200).send(body || {});
  },
  sendJson = (res, json, headers, cookies) => {
    if (headers) setHeaders(res, headers);
    if (cookies) setCookies(res, cookies);
    res.json(json);
  },
  sendFile = (res, fileName, next) => {
    // experimental: not tested
    const path = require('path');
    const options = {
      root: path.join(__dirname, 'public'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true,
      },
    };
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err);
      } else {
        console.log('Sent:', fileName);
      }
    });
  },
  getUniqueResults = (arr, path) => {
    return Array.from(new Set(JSONPath({ path: path, json: arr }).map(JSON.stringify))).map(JSON.parse);
  },
  extend = function () {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
      return false;
    }
    if (arguments.length < 2) {
      return arguments[0];
    }
    let target = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);
    args.forEach(function (obj) {
      if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return;
      }
      Object.keys(obj).forEach(function (key) {
        const src = safeGetProperty(target, key); // source value
        const val = safeGetProperty(obj, key); // new value
        if (val === target) {
        } else if (typeof val !== 'object' || val === null) {
          target[key] = val || (!src ? val : src);
        } else if (Array.isArray(val)) {
          target[key] = deepCloneArray(val);
        } else if (isSpecificValue(val)) {
          target[key] = cloneSpecificValue(val);
        } else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
          target[key] = extend({}, val);
        } else {
          target[key] = extend(src, val);
        }
      });
    });
    return target;
  },
  elasticCount = (req, res, elasticIndex, queryBody, callbackFn) => {
    try {
      const client = req.app.get('elasticClient').child();
      client
        .count({
          index: elasticIndex,
          body: queryBody,
        })
        .then((result) => {
          if (callbackFn) callbackFn(getResponse(null, result.body, result.body.count));
          else sendResponse(res, { count: result.body.count, body: result.body });
        })
        .catch((elasticErr) => {
          let err = getErr('elk_connection', 'Connection to elastic server has failed');
          if (elasticErr.body && elasticErr.body.error && elasticErr.body.error.reason) {
            err = getErr('elk_query', elasticErr.body.error.reason);
          } else if (elasticErr.name) {
            err = getErr('elk_connection', elasticErr.message);
          }
          if (callbackFn) callbackFn(err);
          else sendErrBody(res, err);
        })
        .finally(() => {
          try {
            //client.close();
          } catch (closeEx) {
            console.log(closeEx);
          }
        });
    } catch (connectionErr) {
      let err = { type: 'elk_connection', msg: 'Connection to elastic server has failed' };
      if (callbackFn) callbackFn(err);
      else sendErrBody(res, err);
    }
  },
  elasticQuery = (
    req,
    res,
    elasticIndex,
    queryBody,
    postProcessorFn = null,
    isPlainResponseCallback = false,
    callbackFn = null,
    isPageReq = false
  ) => {
    try {
      const client = req.app.get('elasticClient').child();
      client
        .search({
          index: elasticIndex,
          body: queryBody,
        })
        .then((result) => {
          try {
            const totalRecords = result.body.hits.total;
            let data = postProcessorFn
              ? postProcessorFn(isPlainResponseCallback ? result : result.body.hits.hits)
              : isPlainResponseCallback
              ? result
              : result.body.hits.hits;
            if (callbackFn) {
              callbackFn(
                getResponse(
                  null,
                  data,
                  isPlainResponseCallback && data.body && data.body.hits
                    ? data.body.hits.total
                    : data.length || data.size
                ),
                req,
                res
              );
            } else {
              let responseJson = {
                count:
                  isPlainResponseCallback && data.body && data.body.hits
                    ? data.body.hits.total
                    : data.size || data.length,
                body: data,
              };
              if (isPageReq) {
                responseJson.total = Number(totalRecords);
                responseJson.count = responseJson.count || data.length || Number(totalRecords);
                responseJson.limit = req.body.size || 10;
                responseJson.page = Number(req.body.page);
                responseJson.offset = responseJson.page * responseJson.limit + 1;
                responseJson.totalPages = Math.ceil(responseJson.total / responseJson.limit);
              }
              sendResponse(res, responseJson);
            }
          } catch (processingErr) {
            console.log(processingErr);
            sendErrBody(
              res,
              getErr('elk_query_processing', 'Elastic query result processing has failed', processingErr)
            );
          }
        })
        .catch((elasticErr) => {
          let err = getErr('elk_connection_query', 'Elastic query execution has failed has failed');
          if (elasticErr.body && elasticErr.body.error && elasticErr.body.error.reason) {
            err = getErr('elk_query', elasticErr.body.error.reason);
          } else if (elasticErr.name) {
            err = getErr('elk_connection', elasticErr.message);
          }
          if (callbackFn) callbackFn(err);
          else sendErrBody(res, err);
        })
        .finally(() => {
          try {
            //client.close();
          } catch (closeEx) {
            console.log(closeEx);
          }
        });
    } catch (connectionErr) {
      console.log(connectionErr);
      let err = { type: 'elk_connection', msg: 'Connection to elastic server has failed' };
      if (callbackFn) callbackFn(err);
      else sendErrBody(res, err);
    }
  },
  deSnakeJsonKeys = (obj) => {
    Object.keys(obj).forEach((k) => {
      const newK = k.replace(/([^_]\_\w)/g, (m) => m[0] + m[2].toUpperCase());
      if (k !== newK) {
        obj[newK] = obj[k];
        delete obj[k];
      }
      if (!Array.isArray(obj[newK]) && typeof obj[newK] === 'object') {
        deSnakeJsonKeys(obj[newK]);
      } else if (Array.isArray(obj[newK])) {
        obj[newK].forEach((a) => {
          if (typeof !Array.isArray(a) && typeof a === 'object') {
            deSnakeJsonKeys(a);
          } else if (Array.isArray(a[newK])) {
            a.forEach((b) => {
              if (typeof !Array.isArray(b) && typeof b === 'object') {
                deSnakeJsonKeys(b);
              }
            });
          }
        });
      }
    });
    return obj;
  },
  formatBytes = (bytes, decimals = 2) => {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (bytes === 0) return { actual: bytes, value: 0, unit: units[0] };
    const dm = decimals && decimals >= 0 ? decimals : 3;
    const index = Math.floor(Math.log(bytes) / Math.log(1024));
    return {
      actual: bytes,
      value: index >= units.length ? bytes : parseFloat((bytes / Math.pow(1024, index)).toFixed(dm)),
      unit: index >= units.length ? units[0] : units[index],
    };
  },
  getJsonDepth = (jsonObj) => {
    let depth = 0;
    for (const key in jsonObj) {
      if (jsonObj[key] instanceof Object && !Array.isArray(jsonObj[key])) {
        depth = Math.max(getJsonDepth(jsonObj[key]), depth);
      }
    }
    return depth + 1;
  },
  validateJsonDepth = (req, res, next, maxDepth = 1) => {
    if (getJsonDepth(req.body) > maxDepth) throw new Error('Possible NoSQL Injection');
    next();
  },
  getIntervals = (fromEpoch, toEpoch) => {
    const seconds = Math.floor(Math.abs(toEpoch - fromEpoch) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const quad = Math.floor(months / 3);
    const years = Math.floor(months / 12);
    return { years, quad, months, weeks, days, hours, minutes, seconds };
  },
  getElasticInterval = (fromEpoch, toEpoch) => {
    const { years, months, days, hours, minutes } = getIntervals(fromEpoch, toEpoch);
    let interval = '1d';
    if (years > 7) interval = '1y';
    else if (years > 3 && years <= 7) interval = '180d';
    else if (years >= 2 && years <= 3) interval = '90d';
    else if (years == 1) interval = '1M';
    else if (months > 3 && months < 12) interval = '15d';
    else if (months >= 1 && months <= 3) interval = '1w';
    else if (days > 8 && days <= 30) interval = '1d';
    else if (days >= 4 && days <= 8) interval = '12h';
    else if (days >= 2 && days <= 3) interval = '6h';
    else if (hours >= 12) interval = '2h';
    else if (hours >= 4) interval = '30m';
    else if (hours > 1 && hours <= 3) interval = '15m';
    else if (minutes > 30) interval = '5m';
    else if (minutes > 15) interval = '2m';
    else if (minutes > 0) interval = '30s';
    else interval = '5s';
    return interval;
  },
  getTokenDetails = (req) => {
    return new Promise((resolve, reject) => {
      TokenModel.findOne({ accessToken: getAuthToken(req) })
        .lean()
        .exec((err, userToken) => {
          if (!userToken || err) {
            reject(err && err.message ? err.message : 'Error occurred while fetching user token');
          } else {
            resolve({
              access: { token: userToken.accessToken, expiresOn: userToken.accessTokenExpiresAt },
              refresh: { token: userToken.refreshToken, expiresOn: userToken.refreshTokenExpiresAt },
              clientId: userToken.client.id,
              userId: userToken.user.id,
              username: userToken.user.username,
            });
          }
        });
    });
  },
  getRefreshToken = (req, callback) => {
    getTokenDetails(req)
      .then((details) => callback(details.refresh))
      .catch((err) => callback(null));
  },
  getCurrentUser = (req) => {
    // getCurrentUser(req).then(username => {}).catch(err => apiUtil.sendErr(res, err));
    return new Promise((resolve, reject) => {
      getTokenDetails(req)
        .then((details) => resolve(details.username))
        .catch((err) =>
          reject({ type: 'invalid_auth_token', msg: err && err.message ? err.message : 'Invalid Access Token!' })
        );
    });
  },
  getElasticHealth = (req) => {
    return new Promise((resolve, reject) => {
      try {
        getTokenDetails(req)
          .then((details) => {
            if (details.access && details.access.expiresOn) {
              const expiresInMins = Math.round(
                (((details.access.expiresOn - new Date()) % 86400000) % 3600000) / 60000
              );
              //console.log('EXP', details.access.expiresOn, new Date(), expiresInMins);
              if (expiresInMins > 0 && expiresInMins <= 3) {
                // renew, and send back new access / refresh token eetails, also set the cookies
                // revokeToken --> saveToken
              }
            } else {
            }

            const client = req.app.get('elasticClient').child();
            client.cluster
              .health()
              .then((response) => resolve(response.body))
              .catch((e) => reject(e));
          })
          .catch((err) => reject(err));
      } catch (e) {
        reject(e);
      }
    });
  },
  validateRequestParameters = (validations) => {
    return async (req, res, next) => {
      if (!validations) return next();
      if (!Array.isArray(validations)) validations = [validations];
      await Promise.all(validations.filter((f) => Object.keys(f).length > 0).map((validation) => validation.run(req)));
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      } else {
        res.status(400).json({
          errors: errors.array(),
        });
      }
    };
  },
  getNestedJsonValue = (jsonObj, nestedKeys) => {
    try {
      nestedKeys = nestedKeys.split('.');
      nestedKeys.forEach(function (property) {
        jsonObj = jsonObj[property];
      });
    } catch (e) {
      console.log(e);
    }
    return jsonObj;
  },
  stringifyFormData = (newBody) => {
    Object.keys(newBody).forEach((key) => {
      if (newBody[key] === null || newBody[key] === undefined) {
        delete newBody[key];
      }
    });
    return new URLSearchParams(newBody).toString();
  },
  makeApiRequest = (req, res, key, { method = 'get', pathParams = [], headers = {}, body = {}, stringify = false }) => {
    const apiParams = getNestedJsonValue(API_CONFIG, key);
    method = (apiParams.method || method).toLowerCase();
    headers = {
      ...DEFAULT_HEADERS,
      ...(apiParams.headers ? apiParams.headers : {}),
      ...headers,
    };
    body = {
      ...(apiParams.body ? (typeof apiParams.body === 'function' ? apiParams.body() : apiParams.body) : {}),
      ...body,
    };
    stringify = stringify || headers['Content-Type'].toLowerCase() === 'application/x-www-form-urlencoded';
    if (stringify) body = stringifyFormData(body);

    if (pathParams && Array.isArray(pathParams)) pathParams = pathParams.join('/');
    else if (!pathParams && apiParams.pathParams && Array.isArray(apiParams.pathParams))
      pathParams = apiParams.pathParams.join('/');
    else if (!pathParams && apiParams.pathParams) pathParams = apiParams.pathParams;

    pathParams = pathParams ? '/' + pathParams : pathParams;
    const url = apiParams.dbUrlKey ? getNestedJsonValue(req.app.get('config'), apiParams.dbUrlKey) : apiParams.url;

    const axiosConfig = {
      method: method,
      baseURL: apiParams.baseUrl,
      url: (url || apiParams.url) + pathParams,
      data: body,
      params: method === 'get' ? body : {},
      headers: headers,
      responseType: apiParams.responseType || 'json',
    };

    axios(axiosConfig)
      .then((response) => {
        console.log('API-RESPONSE', response)
        if (response.data.error) throw { response: response };
        sendResponse(res, { statusCode: response.status, body: response.data, headers: response.headers });
      })
      .catch((error) => {
        console.error('API-ERROR', error);
        if (error.response)
          sendErr(res, {
            statusCode: error.response.status,
            msg: 'API request has failed',
            type: 'api_req_failed',
            details: error.response.data.error || error.response.data,
            headers: error.response.headers,
          });
        else if (error.request)
          sendErr(res, { msg: 'API request has failed', type: 'api_req_no_response', details: error.request });
        else sendErr(res, { msg: error.message, type: 'api_req_failed', details: error });
      });
  };
module.exports = {
  loadGlobalConfig: loadGlobalConfig,
  loadMitreDetails: loadMitreDetails,
  loadUiStrings: loadUiStrings,
  elasticQuery: elasticQuery,
  elasticCount: elasticCount,
  setCookies: setCookies,
  setHeaders: setHeaders,
  getErr: getErr,
  sendErr: sendErr,
  sendErrBody: sendErrBody,
  getResponse: getResponse,
  sendResponse: sendResponse,
  sendResponseBody: sendResponseBody,
  sendJson: sendJson,
  sendFile: sendFile,
  extend: extend,
  getUniqueResults: getUniqueResults,
  sanitizeHtml: sanitizeHtml,
  replaceAll: replaceAll,
  minsToMilliSecs: minsToMilliSecs,
  hrsToMilliSecs: hrsToMilliSecs,
  daysToMilliSecs: daysToMilliSecs,
  getAuthToken: getAuthToken,
  getRefreshToken: getRefreshToken,
  setToArray: setToArray,
  deSnakeJsonKeys: deSnakeJsonKeys,
  formatBytes: formatBytes,
  getJsonDepth: getJsonDepth,
  validateJsonDepth: validateJsonDepth,
  sanitizeMongoParam: sanitizeMongoParam,
  getIntervals: getIntervals,
  getElasticInterval: getElasticInterval,
  getCurrentUser: getCurrentUser,
  getElasticHealth: getElasticHealth,
  getTokenDetails: getTokenDetails,
  validateRequestParameters: validateRequestParameters,
  makeApiRequest: makeApiRequest,
};
