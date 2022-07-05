import apiUtil from '../Utils';
import TokenModel from '../Models/Token';
import SavedQueryModel from '../Models/SavedQuery';
import QueryHistoryModel from '../Models/QueryHistory';

module.exports = {
  getMitreConfig: async (req, res, next) => {
    apiUtil.sendResponse(res, { body: req.app.get('mitre') });
  },
  getSiteList: async (req, res, next) => {
    apiUtil.sendResponse(res, { body: req.app.get('config').site_mapping });
  },
  saveQuery: async (req, res, next) => {
    if (!req.body.name || !req.body.query) {
      apiUtil.sendErr(res, {
        type: 'missing_parameters',
        msg: 'Query name / Query is missing!',
      });
      return;
    }
    TokenModel.findOne({ accessToken: apiUtil.getAuthToken(req) })
      .lean()
      .exec(function (err, userToken) {
        if (userToken) {
          let filter = {
            $and: [
              { username: userToken.user.username },
              {
                $or: [
                  { name: { $regex: new RegExp('^' + apiUtil.sanitizeMongoParam(req.body.name), 'i') } },
                  { query: { $regex: new RegExp('^' + apiUtil.sanitizeMongoParam(req.body.query), 'i') } },
                ],
              },
            ],
          };
          SavedQueryModel.findOne(filter)
            .lean()
            .exec(function (err, existingQuery) {
              if (existingQuery) {
                apiUtil.sendErr(res, {
                  type: 'duplicate_entry',
                  msg: 'Saved query / query name already exists',
                });
              } else {
                const query = {
                  userId: userToken.user.id,
                  username: userToken.user.username,
                  name: apiUtil.sanitizeMongoParam(req.body.name),
                  query: apiUtil.sanitizeMongoParam(req.body.query),
                  public: apiUtil.sanitizeMongoParam(req.body.public)
                    ? apiUtil.sanitizeMongoParam(req.body.public).toLowerCase() === 'true'
                    : false,
                };
                let saveQueryInstance = new SavedQueryModel(query);
                saveQueryInstance.save(function (err, query) {
                  if (query) {
                    apiUtil.sendResponse(res, { statusCode: 201 });
                  } else {
                    apiUtil.sendErr(res, {
                      type: 'query_saving_failed',
                      msg: 'Saving query has failed!',
                    });
                  }
                });
              }
            });
        } else {
          apiUtil.sendErr(res, {
            type: 'invalid_auth_token',
            msg: 'Invalid Access Token!',
          });
        }
      });
  },
  retrieveQueries: async (req, res, next) => {
    TokenModel.findOne({ accessToken: apiUtil.getAuthToken(req) })
      .lean()
      .exec(function (err, userToken) {
        if (userToken) {
          SavedQueryModel.find({ username: userToken.user.username }, ['_id', 'name', 'query', 'updated_on'], {
            sort: { updated_on: -1 },
          })
            .lean()
            .exec(function (err, query) {
              apiUtil.sendResponse(res, { body: query, count: query.length });
            });
        } else {
          apiUtil.sendErr(res, {
            type: 'invalid_auth_token',
            msg: 'Invalid Access Token!',
          });
        }
      });
  },
  deleteQuery: async (req, res, next) => {
    TokenModel.findOne({ accessToken: apiUtil.getAuthToken(req) })
      .lean()
      .exec(function (err, userToken) {
        if (userToken) {
          SavedQueryModel.deleteOne({
            _id: apiUtil.sanitizeMongoParam(req.params.queryId),
            username: userToken.user.username,
          }).exec(function (err, results) {
            if (results && results.deletedCount === 1) {
              apiUtil.sendResponse(res, { statusCode: 202 });
            } else {
              apiUtil.sendErr(res, {
                type: 'deletion_failed',
                msg: 'Invalid id or it belongs to another user',
              });
            }
          });
        } else {
          apiUtil.sendErr(res, {
            type: 'invalid_auth_token',
            msg: 'Invalid Access Token!',
          });
        }
      });
  },
  saveQueryHistory: async (req, res, next) => {
    if (!req.body.query) {
      apiUtil.sendErr(res, {
        type: 'missing_parameters',
        msg: 'Query is missing!',
      });
      return;
    }
    TokenModel.findOne({ accessToken: apiUtil.getAuthToken(req) })
      .lean()
      .exec(function (err, userToken) {
        if (!userToken) {
          apiUtil.sendErr(res, {
            type: 'invalid_auth_token',
            msg: 'Invalid Access Token!',
          });
        } else {
          QueryHistoryModel.updateOne(
            { username: userToken.user.username },
            {
              username: userToken.user.username,
              userId: userToken.user.id,
              updated_on: new Date(),
              $push: {
                list: { type: req.body.type || 'HUNT_ACTIVITY', query: req.body.query, created_on: new Date() },
              },
            },
            { new: true, upsert: true }
          ).exec(function (err, results) {
            if (results) {
              apiUtil.sendResponse(res, { statusCode: 202 });
            } else {
              console.log(err);
              apiUtil.sendErr(res, {
                type: 'upsert_failed',
                msg: 'History push has failed',
              });
            }
          });
        }
      });
  },
  retrieveQueryHistory: async (req, res, next) => {
    let resultLimit = Number(req.params.limit || req.query.limit || 5);
    TokenModel.findOne({ accessToken: apiUtil.getAuthToken(req) })
      .lean()
      .exec(function (err, userToken) {
        if (userToken) {
          QueryHistoryModel.aggregate([{ $project: { sizeOfArray: { $size: '$list' } } }]).exec((err, result) => {
            const totalRecords = result && result.length > 0 && result[0].sizeOfArray ? result[0].sizeOfArray : 0;
            QueryHistoryModel.aggregate([
              { $match: { username: userToken.user.username } },
              { $unwind: '$list' },
              {
                $group: {
                  _id: '$list._id',
                  query: { $last: '$list.query' },
                  created_on: { $last: '$list.created_on' },
                },
              },
              { $sort: { created_on: -1 } },
              { $limit: resultLimit },
            ]).exec(function (err, result) {
              if (result && result.length > 0) {
                apiUtil.sendResponse(res, {
                  body: result,
                  count: result.length,
                  limit: resultLimit,
                });
              } else if (err) {
                apiUtil.sendErr(res, {
                  type: 'history_fetching_failed',
                  msg: 'Unable to fetch history!',
                });
              } else {
                apiUtil.sendErr(res, {
                  type: 'no_history',
                  msg: 'No search history found for this user',
                });
              }
            });
          });
        } else {
          apiUtil.sendErr(res, {
            type: 'invalid_auth_token',
            msg: 'Invalid Access Token!',
          });
        }
      });
  },
  deleteQueryHistory: async (req, res, next) => {
    TokenModel.findOne({ accessToken: apiUtil.getAuthToken(req) })
      .lean()
      .exec(function (err, userToken) {
        if (!userToken) {
          apiUtil.sendErr(res, {
            type: 'invalid_auth_token',
            msg: 'Invalid Access Token!',
          });
        } else {
          let upd = req.params.queryId ? { $pull: { list: { _id: req.params.queryId } } } : { $set: { list: [] } };
          QueryHistoryModel.updateOne(
            { username: userToken.user.username },
            upd,
            { multi: true },
            function (err, affected) {
              if (affected && affected.nModified > 0) apiUtil.sendResponse(res, { statusCode: 202 });
              else if (affected && affected.nModified == 0)
                apiUtil.sendErr(res, {
                  type: 'nothing_to_delete',
                  msg: req.params.queryId ? 'Invalid history id' : "This user doesn't have any search history",
                });
              else
                apiUtil.sendErr(res, {
                  type: 'deletion_failed',
                  msg: 'Invalid id or it belongs to another user',
                });
            }
          );
        }
      });
  },
  searchQueryHistory: async (req, res, next) => {
    TokenModel.findOne({ accessToken: apiUtil.getAuthToken(req) })
      .lean()
      .exec(function (err, userToken) {
        if (!userToken) {
          apiUtil.sendErr(res, {
            type: 'invalid_auth_token',
            msg: 'Invalid Access Token!',
          });
        } else {
          const searchRegex = new RegExp(req.body.query, 'i');
          const findQuery = [
            { $unwind: '$list' },
            { $match: { 'list.query': searchRegex } },
            { $group: { _id: '$_id', list: { $push: '$list' } } },
          ];
          let resultLimit = Number(req.params.limit || 5);
          QueryHistoryModel.aggregate(findQuery)
            //.project('list.query')
            .exec(function (err, result) {
              if (result && result.length > 0 && result[0].list.length > 0) {
                let resultArray = resultLimit > 0 ? result[0].list.slice(0, resultLimit) : result[0].list;
                apiUtil.sendResponse(res, {
                  body: resultArray,
                  count: result[0].list.length,
                  limit: resultLimit,
                });
              } else if (err) {
                apiUtil.sendErr(res, {
                  type: 'history_searching_failed',
                  msg: 'Unable to search history!',
                });
              } else {
                apiUtil.sendErr(res, {
                  type: 'no_history',
                  msg: 'No search history found for this user',
                });
              }
            });
        }
      });
  },
};
