import bcrypt from 'bcryptjs';
import userModel from '../Models/User';
import clientModel from '../Models/Client';
import tokenModel from '../Models/Token';
import apiUtil from '../Utils';

const getAccessToken = function (token, callback) {
  tokenModel
    .findOne({
      accessToken: apiUtil.sanitizeMongoParam(token),
    })
    .lean()
    .exec(
      function (callback, err, token) {
        if (!token) console.error('Token not found');
        callback(err, token);
      }.bind(null, callback)
    );
};

const getClient = function (clientId, clientSecret, callback) {
  clientModel
    .findOne({
      id: apiUtil.sanitizeMongoParam(clientId),
      clientSecret: apiUtil.sanitizeMongoParam(clientSecret),
    })
    .lean()
    .exec(
      function (callback, err, client) {
        if (!client) console.error('Client not found');
        callback(err, client);
      }.bind(null, callback)
    );
};

const saveToken = function (token, client, user, callback) {
  token.client = { id: client.clientId };
  token.user = {
    id: user._id,
    username: apiUtil.sanitizeMongoParam(user.username),
  };
  let tokenInstance = new tokenModel(token);
  tokenInstance.save(
    function (callback, err, token) {
      if (!token) {
        console.error('Token not saved');
      } else {
        token = token.toObject();
        delete token._id;
        delete token.__v;
      }
      callback(err, token);
    }.bind(null, callback)
  );
};

const getUser = function (username, password, callback) {
  userModel
    .findOne({
      username: apiUtil.sanitizeMongoParam(username),
    })
    .lean()
    .exec(
      function (callback, err, user) {
        const isActive = user && user.status === 'Active';
        const isBlocked = user && (user.loginAttempt > Number(process.env.MAX_LOGIN_ATTEMPTS) || user.blockedOn);
        const isExpired =
          user &&
          (user.expiretime || user.expiry_date) &&
          new Date(user.expiretime || user.expiry_date) - new Date().getTime() <= 0;
        if (!user) {
          callback(err, user);
        } else if (isBlocked) {
          callback(
            {
              name: 'blocked_user',
              message: 'User account is blocked',
              details: {
                blockedOn: new Date(user.blockedOn),
                blockedOnNum: user.blockedOn,
                reason: user.blockingReason,
              },
            },
            null
          );
        } else {
          bcrypt.compare(password, user.password).then(function (resp) {
            if (resp && !isActive) {
              callback(
                { name: 'inactive_user', message: 'User account is ' + user.status, details: { status: user.status } },
                null
              );
            } else if (resp && isExpired) {
              callback(
                {
                  name: 'expired_user',
                  message: 'User account has expired',
                  details: {
                    expiredOn:
                      user.expiretime || user.expiry_date ? new Date(user.expiretime || user.expiry_date) : null,
                    expiredOnNum: user.expiretime || user.expiry_date,
                  },
                },
                null
              );
            } else if (resp) {
              let upd = { loginAttempt: 0, blockedOn: null, blockingReason: null };
              userModel.updateOne({ _id: user._id }, { $set: upd }, {}, function (err1, docs) {
                callback(err, user);
              });
            } else {
              let upd = { loginAttempt: (user.loginAttempt || 0) + 1 };
              if (user.loginAttempt > 0 && !user.blockedOn) upd.blockedOn = new Date().getTime();
              if (user.loginAttempt > 0 && !user.blockingReason)
                upd.blockingReason = 'Too many invalid login attempts!';
              userModel.updateOne({ _id: user._id }, { $set: upd }, {}, function (err1, docs) {
                callback(
                  {
                    name: 'invalid_grant',
                    message: 'User credentials are invalid',
                    details: { attempt: upd.loginAttempt },
                  },
                  null
                );
              });
            }
          });
        }
      }.bind(null, callback)
    );
};

const getUserFromClient = function (client, callback) {
  clientModel
    .findOne({
      //clientId: client.clientId,
      id: apiUtil.sanitizeMongoParam(client.clientId),
      clientSecret: apiUtil.sanitizeMongoParam(client.clientSecret),
      grants: 'client_credentials',
    })
    .lean()
    .exec(
      function (callback, err, client) {
        if (!client) {
          console.error('Client not found');
        }
        callback(err, {
          username: '',
        });
      }.bind(null, callback)
    );
};

const getRefreshToken = function (refreshToken, callback) {
  tokenModel
    .findOne({
      refreshToken: apiUtil.sanitizeMongoParam(refreshToken),
    })
    .lean()
    .exec(
      function (callback, err, token) {
        if (!token) {
          console.error('Token not found');
        }
        callback(err, token);
      }.bind(null, callback)
    );
};

const revokeToken = function (token, callback) {
  tokenModel
    .deleteOne({
      refreshToken: apiUtil.sanitizeMongoParam(token.refreshToken || token),
    })
    .exec(
      function (callback, err, results) {
        let deleteSuccess = results && results.deletedCount === 1;
        if (!deleteSuccess) {
          console.error('Token not deleted');
        }
        callback(err, deleteSuccess);
      }.bind(null, callback)
    );
};

module.exports = {
  getAccessToken: getAccessToken,
  getClient: getClient,
  saveToken: saveToken,
  getUser: getUser,
  getUserFromClient: getUserFromClient,
  getRefreshToken: getRefreshToken,
  revokeToken: revokeToken,
};
