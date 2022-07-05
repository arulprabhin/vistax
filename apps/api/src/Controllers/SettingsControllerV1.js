import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import apiUtil from '../Utils';

import UserModel from '../Models/User';
import EmailModel from '../Models/EmailPreferences';
import SyslogModel from '../Models/Syslog';

module.exports = {
  listUsers: async (req, res, next) => {
    let emailingPreference;
    UserModel.find({}, ['_id', 'name', 'username', 'email', 'role', 'status', 'expiry_date', 'photo'], {
      sort: { name: 1 },
    })
      .lean()
      .exec(function (err, users) {
        EmailModel.find({
          email: { $in: users.map((u) => u.email) },
        })
          .lean()
          .exec(function (err, pref) {
            users.forEach((u) => {
              emailingPreference = pref
                .filter((f) => f.email === u.email)
                .map((m) => ({
                  mailingPrefId: m._id.toString(),
                  automaticMailing:
                    typeof m.automatic === 'string'
                      ? m.automatic === 'yes'
                      : typeof m.automatic === 'number'
                      ? m.automatic === 1
                      : m.automatic,
                  mailPerCases: m.perCases || m.percases === 'yes',
                  mailPerIncident: m.perIncident || m.perincident === 'yes',
                  mailPerPolicy: m.perPolicy || m.perpolicy === 'yes',
                  mailPerTests: m.perTests || m.pertests === 'yes',
                  mailScoreThreshold: m.score,
                }))
                .reduce((a, c) => c, {});
              apiUtil.extend(u, emailingPreference);
              u.blocked = u.loginAttempt >= Number(process.env.MAX_LOGIN_ATTEMPTS);
              u.id = u._id;
              delete u._id;
            });
            apiUtil.sendResponse(res, { body: users, total: users.length });
          });
      });
  },
  saveUser: {
    validationRules: {},
    action: async (req, res, next) => {
      const id = req.params.id;
      const params = {
        name: apiUtil.sanitizeMongoParam(req.body.name),
        email: apiUtil.sanitizeMongoParam(req.body.email),
        role: apiUtil.sanitizeMongoParam(req.body.role),
        status: apiUtil.sanitizeMongoParam(req.body.isActive) === 'true' ? 'Active' : 'Inactive',
        photo: apiUtil.sanitizeMongoParam(req.body.photo),
        expiretime: apiUtil.sanitizeMongoParam(req.body.expiresOn),
        expiry_date: apiUtil.sanitizeMongoParam(req.body.expiresOn),
      };
      if (id) {
        UserModel.exists({ $and: [{ username: params.username }, { _id: { $ne: id } }] })
          .then((exists) => {
            if (exists) {
              apiUtil.sendErr(res, {
                type: 'user_duplicate_entry',
                msg: 'This username is already taken',
              });
            } else {
              UserModel.updateOne({ _id: id }, { $set: params }, {}, (err, doc) => {
                if (err) {
                  apiUtil.sendErr(res, {
                    type: 'user_saving_failed',
                    msg: 'Error occurred while updating the user details',
                    details: err,
                  });
                } else {
                  apiUtil.sendResponse(res, { statusCode: 201 });
                }
              });
            }
          })
          .catch((err) =>
            apiUtil.sendErr(res, {
              type: 'user_saving_failed',
              msg: 'Error occurred while saving the email preference',
              details: err,
            })
          );
      } else {
        params.username = apiUtil.sanitizeMongoParam(req.body.username);
        params.password = bcrypt.hashSync(apiUtil.sanitizeMongoParam(req.body.password), bcrypt.genSaltSync(10));
        UserModel.exists({ username: params.username }, (err, exists) => {
          if (err) {
            apiUtil.sendErr(res, {
              type: 'user_creation_failed',
              msg: 'Server error occurred',
              details: err,
            });
          } else if (exists) {
            apiUtil.sendErr(res, {
              type: 'user_duplicate_entry',
              msg: 'Username is taken',
            });
          } else {
            params.loginAttempt = req.body.blocked === 'true' ? Number(process.env.MAX_LOGIN_ATTEMPTS) : 0;
            const userModelInstance = new UserModel(params);
            userModelInstance
              .save()
              .then((savedDoc) => {
                apiUtil.sendResponse(res, { statusCode: 201, body: savedDoc });
              })
              .catch((err) => {
                apiUtil.sendErr(res, {
                  type: 'user_saving_failed',
                  msg: 'Error occurred while saving new user',
                  details: err,
                });
              });
          }
        });
      }
    },
  },
  deleteUser: async (req, res, next) => {
    const userId = apiUtil.sanitizeMongoParam(req.params.id);
    UserModel.deleteOne({
      _id: userId,
    }).exec((err, response) => {
      let deleteSuccess = response && response.deletedCount === 1;
      if (!deleteSuccess || err) {
        apiUtil.sendErr(res, {
          type: 'deletion_failed',
          msg: 'Invalid id',
          details: err,
        });
      } else {
        apiUtil.sendResponse(res, { statusCode: 202 });
      }
    });
  },

  generateCertificate: async (req, res, next) => {},
  downloadCertificate: async (req, res, next) => {},

  listEmailAlert: async (req, res, next) => {
    let preferences;
    EmailModel.find()
      .lean()
      .exec(function (err, pref) {
        preferences = pref.map((m) => ({
          id: m._id,
          email: m.email,
          automaticMailing:
            typeof m.automatic === 'string'
              ? m.automatic === 'yes'
              : typeof m.automatic === 'number'
              ? m.automatic === 1
              : m.automatic,
          mailPerCases: m.perCases || m.percases === 'yes',
          mailPerIncident: m.perIncident || m.perincident === 'yes',
          mailPerPolicy: m.perPolicy || m.perpolicy === 'yes',
          mailPerTests: m.perTests || m.pertests === 'yes',
          mailScoreThreshold: m.score,
          createdOn: m.createdOn,
          updatedOn: m.updatedOn,
        }));
        apiUtil.sendResponse(res, { body: preferences, total: preferences.length });
      });
  },
  saveEmailAlert: async (req, res, next) => {
    const id = req.params.id;
    const params = {
      automaticMailing: apiUtil.sanitizeMongoParam(req.body.automatic),
      automatic: apiUtil.sanitizeMongoParam(req.body.automatic) === 'true' ? 1 : 0,
      perIncident: apiUtil.sanitizeMongoParam(req.body.perIncident),
      perincident: apiUtil.sanitizeMongoParam(req.body.perIncident === 'true') ? 'yes' : 'no',
      perPolicy: apiUtil.sanitizeMongoParam(req.body.perPolicy),
      perpolicy: apiUtil.sanitizeMongoParam(req.body.perPolicy) === 'true' ? 'yes' : 'no',
      perCases: apiUtil.sanitizeMongoParam(req.body.perCases),
      percases: apiUtil.sanitizeMongoParam(req.body.perCases) === 'true' ? 'yes' : 'no',
      perTests: apiUtil.sanitizeMongoParam(req.body.perTests),
      pertests: apiUtil.sanitizeMongoParam(req.body.perTests) === 'true' ? 'yes' : 'no',
      score: Number(apiUtil.sanitizeMongoParam(req.body.scoreThreshold)),
    };
    if (id) {
      EmailModel.exists({ $and: [{ email: params.email }, { _id: { $ne: id } }] })
        .then((exists) => {
          if (exists) {
            apiUtil.sendErr(res, {
              type: 'email_alert_duplicate_entry',
              msg: 'There is another entry exists for the supplied email',
            });
          } else {
            EmailModel.updateOne({ _id: id }, { $set: params }, {}, (err, doc) => {
              if (err) {
                apiUtil.sendErr(res, {
                  type: 'email_alert_saving_failed',
                  msg: 'Error occurred while updating the email preference',
                  details: err,
                });
              } else {
                apiUtil.sendResponse(res, { statusCode: 201 });
              }
            });
          }
        })
        .catch((err) =>
          apiUtil.sendErr(res, {
            type: 'email_alert_saving_failed',
            msg: 'Error occurred while saving the email preference',
            details: err,
          })
        );
    } else {
      params.email = apiUtil.sanitizeMongoParam(req.body.email);
      EmailModel.exists({ email: params.email }, (err, exists) => {
        if (err) {
          apiUtil.sendErr(res, {
            type: 'email_alert_creation_failed',
            msg: 'Server error occurred',
            details: err,
          });
        } else if (exists) {
          apiUtil.sendErr(res, {
            type: 'email_alert_duplicate_entry',
            msg: 'There is another entry exists for the supplied email',
          });
        } else {
          const emailModelInstance = new EmailModel(params);
          emailModelInstance
            .save()
            .then((savedDoc) => {
              apiUtil.sendResponse(res, { statusCode: 201, body: savedDoc });
            })
            .catch((err) =>
              apiUtil.sendErr(res, {
                type: 'email_alert_saving_failed',
                msg: 'Error occurred while saving the email preference',
                details: err,
              })
            );
        }
      });
    }
  },
  deleteEmailAlert: async (req, res, next) => {
    const emailRefId = apiUtil.sanitizeMongoParam(req.params.id);
    EmailModel.deleteOne({
      _id: emailRefId,
    }).exec((err, response) => {
      let deleteSuccess = response && response.deletedCount === 1;
      if (!deleteSuccess || err) {
        apiUtil.sendErr(res, {
          type: 'deletion_failed',
          msg: 'Invalid id',
          details: err,
        });
      } else {
        apiUtil.sendResponse(res, { statusCode: 202 });
      }
    });
  },
  getOktaConfig: async (req, res, next) => {
    apiUtil.sendResponse(res, {
      body: {
        url: req.app.get('config').OktaUrlPath,
        username: req.app.get('config').OktaUsername,
        password: req.app.get('config').OktaPassword, // decrypt me
        token: req.app.get('config').OktaToken,
      },
    });
  },
  saveOktaConfig: async (req, res, next) => {
    const newOktaConfig = {
      OktaUrlPath: apiUtil.sanitizeMongoParam(req.body.OktaUrlPath),
      OktaUsername: apiUtil.sanitizeMongoParam(req.body.OktaUsername),
      OktaPassword: apiUtil.sanitizeMongoParam(req.body.OktaPassword), // encrypt me
      OktaToken: apiUtil.sanitizeMongoParam(req.body.OktaToken),
    };
    const globalConfig = req.app.get('config');
    apiUtil.extend(globalConfig, newOktaConfig);
    const globalCollection = mongoose.connection.db.collection('global_config');
    globalCollection
      .updateOne(
        { modulename: 'system' },
        {
          $set: {
            config: globalConfig,
          },
        }
      )
      .then((doc) => {
        req.app.set('config', globalConfig);
        apiUtil.sendResponse(res, { statusCode: 202 });
      })
      .catch((err) =>
        apiUtil.sendErr(res, {
          type: 'okta_config_saving_failed',
          msg: 'Error occurred while saving okta configuration',
          details: err,
        })
      );
  },
  getSyslogConfig: async (req, res, next) => {
    apiUtil.sendResponse(res, {
      body: {
        ip: req.app.get('config').SyslogServer.split(':')[0],
        port: req.app.get('config').SyslogServer.split(':')[1],
      },
    });
  },
  saveSyslogConfig: async (req, res, next) => {
    const newSyslogConfig = {
      SyslogServer: `${apiUtil.sanitizeMongoParam(req.body.ip)}:${apiUtil.sanitizeMongoParam(req.body.port)}`,
    };
    const globalConfig = req.app.get('config');
    apiUtil.extend(globalConfig, newSyslogConfig);
    const globalCollection = mongoose.connection.db.collection('global_config');
    globalCollection
      .updateOne(
        { modulename: 'system' },
        {
          $set: {
            config: globalConfig,
          },
        }
      )
      .then((doc) => {
        req.app.set('config', globalConfig);
        apiUtil.sendResponse(res, { statusCode: 202 });
      })
      .catch((err) =>
        apiUtil.sendErr(res, {
          type: 'syslog_config_saving_failed',
          msg: 'Error occurred while saving syslog configuration',
          details: err,
        })
      );
  },
  getSyslogNotificationConfig: async (req, res, next) => {
    SyslogModel.findOne({ name: 'main' }, ['perincident', 'perpolicy', 'percases', 'pertests', 'score'])
      .lean()
      .exec()
      .then((doc) =>
        apiUtil.sendResponse(res, {
          body: {
            perIncident: doc.perincident === 'yes',
            perPolicy: doc.perpolicy === 'yes',
            perCases: doc.percases === 'yes',
            perTests: doc.pertests === 'yes',
            scoreThreshold: doc.score,
          },
        })
      )
      .catch((err) =>
        apiUtil.sendErr(res, {
          type: 'syslog_notification_fetching_failed',
          msg: 'Error occurred while fetching syslog notification configuration',
          details: err,
        })
      );
  },
  saveSyslogNotificationConfig: async (req, res, next) => {
    const newNotificatioNPreference = {
      perincident: apiUtil.sanitizeMongoParam(req.body.perIncident === 'true') ? 'yes' : 'no',
      perpolicy: apiUtil.sanitizeMongoParam(req.body.perPolicy === 'true') ? 'yes' : 'no',
      percases: apiUtil.sanitizeMongoParam(req.body.perCases === 'true') ? 'yes' : 'no',
      pertests: apiUtil.sanitizeMongoParam(req.body.perTests === 'true') ? 'yes' : 'no',
      score: Number(apiUtil.sanitizeMongoParam(req.body.scoreThreshold)),
    };
    SyslogModel.updateOne({ name: 'main' }, { $set: newNotificatioNPreference })
      .then((doc) => {
        apiUtil.sendResponse(res, { statusCode: 202 });
      })
      .catch((err) =>
        apiUtil.sendErr(res, {
          type: 'syslog_notification_config_saving_failed',
          msg: 'Error occurred while saving syslog notification preferences',
          details: err,
        })
      );
  },
  getShodanConfig: async (req, res, next) => {
    apiUtil.sendResponse(res, {
      body: {
        url: req.app.get('config').ShodanInvestigationApiUrl,
        apiKey: req.app.get('config').ShodanInvestigationApiKey,
      },
    });
  },
  saveShodanConfig: async (req, res, next) => {
    const newShodanConfig = {
      ShodanInvestigationApiUrl: apiUtil.sanitizeMongoParam(req.body.url),
      ShodanInvestigationApiKey: apiUtil.sanitizeMongoParam(req.body.key),
    };
    const globalConfig = req.app.get('config');
    apiUtil.extend(globalConfig, newShodanConfig);
    const globalCollection = mongoose.connection.db.collection('global_config');
    globalCollection
      .updateOne(
        { modulename: 'system' },
        {
          $set: {
            config: globalConfig,
          },
        }
      )
      .then((doc) => {
        req.app.set('config', globalConfig);
        apiUtil.sendResponse(res, { statusCode: 202 });
      })
      .catch((err) =>
        apiUtil.sendErr(res, {
          type: 'shodan-config-saving-failed',
          msg: 'Error occurred while saving shodan configuration',
          details: err,
        })
      );
  },
  getSophosConfig: async (req, res, next) => {
    apiUtil.sendResponse(res, {
      body: {
        clientId: req.app.get('config').SophosUsername,
        clientSecret: req.app.get('config').SophosPassword,
      },
    });
  },
  saveSophosConfig: async (req, res, next) => {
    const newSophosConfig = {
      SophosUsername: apiUtil.sanitizeMongoParam(req.body.clientId),
      SophosPassword: apiUtil.sanitizeMongoParam(req.body.clientSecret),
    };
    const globalConfig = req.app.get('config');
    apiUtil.extend(globalConfig, newSophosConfig);
    const globalCollection = mongoose.connection.db.collection('global_config');
    globalCollection
      .updateOne(
        { modulename: 'system' },
        {
          $set: {
            config: globalConfig,
          },
        }
      )
      .then((doc) => {
        req.app.set('config', globalConfig);
        apiUtil.sendResponse(res, { statusCode: 202 });
      })
      .catch((err) =>
        apiUtil.sendErr(res, {
          type: 'sophos-config-saving-failed',
          msg: 'Error occurred while saving sophos configuration',
          details: err,
        })
      );
  },
};
