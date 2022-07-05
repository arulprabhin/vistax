import axios from './axios';
import KEY_MAPPINGS from '../constants/api'; // this should from a file

const isLocalhost = Boolean(
  location.hostname === 'localhost' ||
    location.hostname === '[::1]' ||
    location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
const baseUrl = location.protocol + '//' + location.host;
const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};
axios.defaults.withCredentials = true;
axios.defaults.credentials = 'include';

const stringifyFormData = (newBody) => {
  Object.keys(newBody).forEach((key) => {
    if (newBody[key] === null || newBody[key] === undefined) {
      delete newBody[key];
    }
  });
  return new URLSearchParams(newBody).toString();
};

const getNestedJsonValue = (jsonObj, nestedKeys) => {
  try {
    nestedKeys = nestedKeys.split('.');
    nestedKeys.forEach(function (property) {
      jsonObj = jsonObj[property];
    });
  } catch (e) {
    console.log(e);
  }
  return jsonObj;
};

export const makeApiRequest = async ({
  key,
  shouldStringifyFormData = false,
  body = {},
  headers = {},
  method = 'GET',
  pathParam,
}) => {
  const apiParams = getNestedJsonValue(KEY_MAPPINGS, key);
  const otherHeaders = apiParams.headers ? apiParams.headers : {};
  const newHeaders = {
    ...DEFAULT_HEADERS,
    ...otherHeaders,
    ...headers,
  };
  shouldStringifyFormData =
    shouldStringifyFormData || newHeaders['Content-Type'].toLowerCase() === 'application/x-www-form-urlencoded';
  const url =
    (apiParams.url.startsWith('http') || apiParams.url.startsWith('//')
      ? ''
      : baseUrl + (apiParams.url.startsWith('/') ? '' : '/')) + apiParams.url;
  let newBody = {
    ...(apiParams.body ? (typeof apiParams.body === 'function' ? apiParams.body() : apiParams.body) : {}),
    ...body,
  };
  if (apiParams.auth && isLocalhost) {
    if (sessionStorage.getItem('persist:root')) {
      try {
        const token = JSON.parse(JSON.parse(sessionStorage.getItem('persist:root')).user).user.token.access;
        if (token) newHeaders.Authorization = 'Bearer ' + token;
      } catch (e) {}
    }
  }
  if (shouldStringifyFormData) {
    newBody = stringifyFormData(newBody);
  }
  const axiosConfig = {
    method: apiParams.method || method,
    url: url + (pathParam ? (url.endsWith('/') ? '' : '/') + pathParam : apiParams.pathParam ?
        (url.endsWith('/') ? '' : '/') + apiParams.pathParam : ''),
    data: newBody, //qs.stringify(newBody) : newBody,
    //var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    params: (apiParams.method || method) === 'GET' ? newBody : {},
    headers: newHeaders,
    credentials: 'include',
    withCredentials: true,
  };
  return await axios(axiosConfig);
};
