import apiUtil from '../Utils';
import userModel from '../Models/User';
import OAuthController from './OauthModelController';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import morgan from 'morgan';
import dotenv from 'dotenv';
import dbConnector from '../mongoConnector';
import OAuth2Server, { Request, Response } from 'oauth2-server';
import cookieParser from 'cookie-parser';
import rfs from 'rotating-file-stream';
import { Client } from '@elastic/elasticsearch';
import multer from 'multer';
dotenv.config({ debug: true, path: './src/_settings.env' }); // default filename is .env in the root

const PORT = process.env.PORT || 6010,
  isLocalServer =
    process.env.MONGODB_URI.includes('localhost') ||
    process.env.MONGODB_URI.includes('127.0') ||
    process.env.MONGODB_URI.includes('192.168.'),
  CORS_CONFIG = {
    methods: ['GET', 'POST', 'DELETE'],
    headers: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Cookie',
      'Authorization',
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Credentials',
    ],
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:6010', 'https://*.mistnet.io'],
  },
  preloadDbSettings = (app, onloadCallback) => {
    apiUtil.loadGlobalConfig((config) => {
      app.set('config', config);
      console.log('GLOBAL CONFIG: Loaded!');
      if (onloadCallback) onloadCallback('GLOBAL_CONFIG');
    });
    apiUtil.loadMitreDetails((mitre) => {
      app.set('mitre', mitre);
      console.log('MITRE DETAILS: Loaded!');
      if (onloadCallback) onloadCallback('MITRE_DETAILS');
    });
    apiUtil.loadUiStrings((uiString) => {
      app.set('uiStrings', uiString);
      console.log('UI STRINGS: Loaded!');
      if (onloadCallback) onloadCallback('UI_STRINGS');
    });
  },
  initElasticClient = (host) => {
    const elasticClient = new Client({
      node: (!host.startsWith('http') ? 'http://' : '') + host,
      compression: 'gzip',
      keepAlive: true,
      maxRetries: Infinity,
      resurrectStrategy: 'ping',
      sniffOnConnectionFault: true,
      /*sniffInterval: 3000,
      sniffOnStart: true,
      */
    });

    /*setInterval(async () => {
      try {
        const info = await elasticClient.info();
        console.log(JSON.stringify(info.body.name));
      } catch (err) {
        console.log(err);
      }
    }, 3000);*/

    /* elasticClient.on('request', (err, req) => {
      console.log('REQUEST', err ? err.message : '', `${JSON.stringify(req.meta.request)}`);
    });
    elasticClient.on('response', (err, req) => {
      console.log('RESPONSE', err ? err.message : '', `${JSON.stringify(req.meta.body)}`);
    });
    elasticClient.on('sniff', (err, req) => {
      console.log('SNIFF', err ? err.message : '', `${JSON.stringify(req.meta.sniff)}`);
    });
    elasticClient.on('resurrect', (err, req) => {
      console.log('RESURRECT', err ? err.message : '', `${JSON.stringify(req.meta.attempts)}`);
    });*/

    return elasticClient;
  },
  handle404 = (req, res, next) => {
    console.log('Page Not Found [' + req.method + ']: ' + req.url + '\t' + req.originalUrl);
    console.log('Params: ', req.params);
    console.log('Query: ', req.query);
    console.log('Body: ', req.body);
    res.status(404).send({ status: 'err', body: { msg: 'Page not found!', type: 404 } });
  },
  handle500 = (err, req, res, next) => {
    console.log('Unhandled Err [' + req.method + ']: ' + req.url + '\t' + req.originalUrl);
    console.log('Params: ', req.params);
    console.log('Query: ', req.query);
    console.log('Body: ', req.body);
    res
      .status(err.status || 500)
      .send({ status: 'err', body: { msg: err.message || 'Unhandled Error', type: err.status || 500 } });
  },
  obtainToken = (req, res) => {
    const request = new Request(req),
      response = new Response(res);
    req.app.oauth
      .token(request, response, { allowExtendedTokenAttributes: true })
      .then(function (token) {
        userModel
          .findOne({
            _id: token.user.id,
          })
          .lean()
          .exec(function (err, user) {
            if (!user) {
              apiUtil.sendResponse(res, {
                body: apiUtil.extend(token, { user: { username: '', name: '', role: '', desc: '', photo: '' } }),
              });
            } else {
              const clientToken = {
                accessToken: token.accessToken,
                accessTokenExpiresAt: token.accessTokenExpiresAt,
                refreshToken: token.refreshToken,
                refreshTokenExpiresAt: token.refreshTokenExpiresAt,
                clientId: token.client.id,
                user: {
                  id: user._id,
                  username: user.username,
                  name: user.name,
                  role: user.role,
                  status: user.status,
                  description: user.description,
                  photo: user.photo,
                  theme: user.darktheme >= 1 ? 'DARK' : 'LIGHT',
                  loginAttempt: user.loginAttempt,
                  expiresOn: user.expiretime || user.expiry_date ? new Date(user.expiretime || user.expiry_date) : null,
                },
              };
              let authCookies = [];
              const cookieOpts = {
                path: '/',
                httpOnly: true,
                sameSite: true,
                secure: req.secure,
              };
              cookieOpts.expires = new Date(token.accessTokenExpiresAt);
              authCookies.push({
                name: 'accessToken',
                value: token.accessToken,
                options: cookieOpts,
              });
              cookieOpts.expires = new Date(token.accessTokenExpiresAt);
              authCookies.push({
                name: 'refreshToken',
                value: token.refreshToken,
                options: cookieOpts,
              });
              apiUtil.sendResponse(res, { body: clientToken, cookies: authCookies });
            }
          });
      })
      .catch(function (err) {
        apiUtil.sendErr(res, {
          statusCode: err.code || 500,
          type: err.message.name || err.name,
          msg: err.message.message || err.message,
          details: err.message.details || err.details,
        });
      });
  },
  logout = (req, res) => {
    apiUtil.getRefreshToken(req, (refreshToken) => {
      if (refreshToken.token) {
        OAuthController.revokeToken(refreshToken.token, (err, deleteStatus) => {
          res.clearCookie('accessToken').clearCookie('refreshToken').status(202).send({ status: 'success' });
        });
      } else {
        apiUtil.sendErr(res, { msg: 'Invalid Auth / Refresh Token!', type: 'invalid_auth_refresh_token' });
      }
    });
  },
  validateRequest = (req, res, next) => {
    if (req.cookies.accessToken) req.headers.authorization = 'Bearer ' + req.cookies.accessToken;
    const request = new Request(req),
      response = new Response(res);
    return req.app.oauth
      .authenticate(request, response)
      .then(function (token) {
        next();
      })
      .catch(function (err) {
        apiUtil.sendErr(res, { msg: err.message, type: err.name });
      });
  },
  sendHealth = (req, res) => {
    apiUtil
      .getElasticHealth(req)
      .then((body) => {
        apiUtil.sendResponse(res, { status: body.status || 'red', body: body });
      })
      .catch((err) => {
        apiUtil.sendErr(res, { type: 'health_err', msg: err.message, details: err });
      });
  },
  initServer = (handlers) => {
    const app = express();
    app.use(function (req, res, next) {
      if (req.secure) {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
      }
      next();
    });

    app.use(cookieParser());
    app.use(cors(CORS_CONFIG));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(multer().none()); // accept only test
    app.use(compression());
    if (!isLocalServer) {
      const accessLogStream = rfs.createStream('access.log', {
        interval: '1d', // rotate daily
        path: path.join(__dirname, 'log'),
      });
      app.use(
        morgan(':date[clf] :method :url [:status/:res[content-length]] - :response-time ms', {
          stream: accessLogStream,
        })
      );
    } else {
      app.use(morgan('[:date[iso]] :method :url :status :res[content-length] - :response-time ms'));
    }

    dbConnector((status, msg) => {
      if (status === 'SUCCESS') {
        preloadDbSettings(app, (type) => {
          if (type === 'GLOBAL_CONFIG') {
            app.set('elasticClient', initElasticClient(app.get('config').es_ui));
          }
        });
      }
    });

    app.oauth = new OAuth2Server({
      model: OAuthController,
      accessTokenLifetime: 60 * 60,
      refreshTokenLifetime: 60 * 90,
      allowBearerTokensInQueryString: true,
      alwaysIssueNewRefreshToken: true,
    });
    app.use(apiUtil.validateJsonDepth);
    app.get('/api/_health', (req, res) => sendHealth(req, res));
    app.post('/api/oauth/token', (req, res) => obtainToken(req, res));
    app.get(
      '/api/logout',
      (req, res, next) => validateRequest(req, res, next),
      (req, res) => logout(req, res)
    );
    app.post(
      '/api/logout',
      (req, res, next) => validateRequest(req, res, next),
      (req, res) => logout(req, res)
    );
    handlers.forEach((handler) => {
      if (typeof handler.validate === undefined || handler.validate) {
        app.use(handler.path, (req, res, next) => validateRequest(req, res, next), handler.router);
      } else {
        app.use(handler.path, handler.router);
      }
    });
    app.use(handle404); //404 handler and pass to error handler
    app.use(handle500); //Error handler
    try {
      app.listen(PORT, () => {
        console.log('Server started on port ' + PORT + '...!');
      });
    } catch (e) {
      console.log('Error occurred while starting API server', e);
    }
    return app;
  };

module.exports = {
  isLocalServer: isLocalServer,
  initServer: initServer,
  validateRequest: validateRequest,
};
