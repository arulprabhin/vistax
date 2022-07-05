import apiUtil from '../Utils';
import caseQueries from '../ElasticQueries/Case';
import mongoose from 'mongoose';
import TokenModel from '../Models/Token';
import EmailPreference from '../Models/EmailPreferences';
import FavoriteCasesModel from '../Models/FavoriteCases';

module.exports = {
  getGeoLocationData: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexRawLogs, //[req.body.index],
      caseQueries.geoMap.query(req),
      caseQueries.geoMap.postProcessFn
    );
  },
  getTableFields: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      caseQueries.getTableFields.indexes(req),
      caseQueries.getTableFields.query(req),
      caseQueries.getTableFields.postProcessFn,
      true
    );
  },
  getHuntTableData: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      caseQueries.getHuntTable.indexes(req),
      caseQueries.getHuntTable.query(req),
      caseQueries.getHuntTable.postProcessFn,
      true
    );
  },
  getHuntGraphData: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      caseQueries.getHuntGraph.indexes(req),
      caseQueries.getHuntGraph.query(req),
      caseQueries.getHuntGraph.postProcessFn,
      true
    );
  },
  getTableFieldConfig: async (req, res, next) => {
    const tableFieldsConfig = mongoose.connection.db.collection('table_field_config');
    const query = {},
      match = {},
      sort = {},
      group = { _id: '$_id' };
    query[req.params.type] = { $exists: true };
    match[req.params.type + '.enabled'] = true;
    sort[req.params.type + '.display_order'] = 1;
    group[req.params.type] = {
      $push: {
        order: '$' + req.params.type + '.display_order',
        field: '$' + req.params.type + '.field',
        label: '$' + req.params.type + '.label',
        width: '$' + req.params.type + '.width',
        visible: '$' + req.params.type + '.visible',
        static: '$' + req.params.type + '.static',
      },
    };
    tableFieldsConfig
      .aggregate([
        { $match: query },
        { $unwind: '$' + req.params.type },
        { $match: match },
        { $sort: sort },
        { $group: group },
      ])
      .toArray((err, items) => {
        if (!err) {
          const result = items.length > 0 && items[0][req.params.type] ? items[0][req.params.type] : [];
          apiUtil.sendResponse(res, { body: result, count: result.length });
        } else {
          apiUtil.sendErr(res, { msg: err.message || 'Request failed!' });
        }
      });
  },
  getHuntData: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      caseQueries.getHuntTable.indexes(req),
      caseQueries.getHuntTable.query(req),
      caseQueries.getHuntTable.postProcessFn,
      true
    );
  },
  getTopCases: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      caseQueries.topCases.query(req, req.params.fields || caseQueries.topCases.fields),
      (result) => {
        return {
          count: result.body.hits.total,
          data: apiUtil.deSnakeJsonKeys(result.body.hits.hits.map((item) => item._source)),
        };
      },
      true,
      (response) => {
        apiUtil.sendResponse(res, {
          body: response.body.data,
          count: response.body.count,
          limit: Number(req.params.limit),
        });
      }
    );
  },
  getWorstOffenders: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      caseQueries.worstOffenders.query(req, req.params.fields || caseQueries.worstOffenders.sourceFields),
      (result) => {
        return {
          count: result.body.hits.total,
          data: apiUtil.deSnakeJsonKeys(result.body.hits.hits.map((item) => item._source)),
        };
      },
      true,
      (response) => {
        apiUtil.sendResponse(res, {
          body: response.body.data,
          count: response.body.count,
          limit: Number(req.params.limit),
        });
      }
    );
  },
  getIncidentHistoryGraph: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      caseQueries.incidentHistoryGraph.query(req),
      (results) => caseQueries.incidentHistoryGraph.postProcessFn(req, results),
      true
    );
  },
  getTIncidenTableFields: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      caseQueries.caseListingTableFields.indexes(req),
      caseQueries.caseListingTableFields.query(req),
      caseQueries.caseListingTableFields.postProcessFn,
      true
    );
  },
  getCaseTableData: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      caseQueries.caseListData.query(req, caseQueries.caseListData.fields),
      (body) => body.map((hit) => hit._source),
      null,
      null,
      true
    );
  },
  getCaseAggregation: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      caseQueries.caseAggregation.query(req),
      (results) => caseQueries.caseAggregation.postProcessFn(req, results),
      true
    );
  },
  getCaseAndCategorySummary: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      caseQueries.caseAndCategorySummary.query(req),
      caseQueries.caseAndCategorySummary.postProcessFn,
      true
    );
  },

  retrieveEmails: async (req, res, next) => {
    let preferences;
    EmailPreference.find()
      .lean()
      .exec(function (err, pref) {
        preferences = pref.map((m) => ({
          email: m.email,
        }));
        apiUtil.sendResponse(res, { body: preferences, total: preferences.length });
      });
  },
  getCaseActivity: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexWorkLogs,
      caseQueries.caseActivityQuery.query(req, caseQueries.caseActivityQuery.fields),
      (result) => {
        return {
          result: apiUtil.deSnakeJsonKeys(result.map((item) => item._source)),
        };
      }
    );
  },
  addCaseBookmark: async (req, res, next) => {
    const caseUuid = req.body.uuid;
    if (!caseUuid) {
      apiUtil.sendErr(res, {
        type: 'missing_parameters',
        msg: 'UUID is Required!',
      });
      return;
    }
    const isPublic = apiUtil.sanitizeMongoParam(req.body.public || false);
    apiUtil
      .getCurrentUser(req)
      .then((username) => {
        const filter = {
          $and: [{ username: username }, { 'cases.uuid': apiUtil.sanitizeMongoParam(caseUuid) }],
        };
        FavoriteCasesModel.exists(filter, (err, existingQuery) => {
          if (existingQuery) {
            apiUtil.sendErr(res, {
              type: 'duplicate_entry',
              msg: 'Uuid already exists',
            });
          } else {
            FavoriteCasesModel.updateOne(
              { username: username },
              {
                username: username,
                $push: {
                  cases: { uuid: apiUtil.sanitizeMongoParam(caseUuid), createdOn: new Date(), public: isPublic },
                },
              },
              { new: true, upsert: true }
            ).exec(function (err, results) {
              if (results) {
                apiUtil.sendResponse(res, { statusCode: 200 });
              } else {
                apiUtil.sendErr(res, {
                  type: 'upsert_failed',
                  msg: 'Favorite Case push has failed',
                });
              }
            });
          }
        });
      })
      .catch((err) => {
        apiUtil.sendErr(res, err);
      });
  },
  listCaseBookmarks: async (req, res, next) => {
    apiUtil
      .getCurrentUser(req)
      .then((username) => {
        const aggregateFilter = [
          { $match: { $or: [{ username: username }, { 'cases.public': true }] } },
          {
            $project: {
              username: 1,
              cases: {
                $filter: {
                  input: '$cases',
                  as: 'case',
                  cond: { $or: [{ $eq: ['$username', username] }, { $eq: ['$$case.public', true] }] },
                },
              },
            },
          },
        ];
        const uniqueCases = new Set();
        FavoriteCasesModel.aggregate(aggregateFilter).exec((err, result) => {
          result.flatMap((r) => r.cases).forEach((c) => uniqueCases.add(c.uuid));
          apiUtil.elasticQuery(
            req,
            res,
            req.app.get('config').EsIndexCases,
            caseQueries.FavoriteCases.query(req, Array.from(uniqueCases), caseQueries.FavoriteCases.fields),
            (body) => body.map((hit) => hit._source),
            null,
            null,
            true
          );
        });
      })
      .catch((err) => apiUtil.sendErr(res, err));
  },
  isBookmarked: async (req, res, next) => {
    apiUtil
      .getCurrentUser(req)
      .then((username) => {
        //const filterCondition = {'cases.uuid': apiUtil.sanitizeMongoParam(req.params.uuid), username: username};
        const filterCondition = {
          $and: [
            { 'cases.uuid': apiUtil.sanitizeMongoParam(req.params.uuid) },
            { $or: [{ username: username }, { 'cases.public': true }] },
          ],
        };
        FavoriteCasesModel.find(filterCondition, (err, results) => {
          if (err) {
            apiUtil.sendErr(res, err);
          } else {
            const refinedResults = results.flatMap((u) => u.cases).filter((c) => c.uuid === req.params.uuid);
            const isSelfAdded = results.some((u) => u.username === username);
            const isPublic = refinedResults.some((c) => c.public);
            const isBookmarked = isSelfAdded || isPublic;
            apiUtil.sendResponse(res, {
              body: { bookmarked: isBookmarked, public: isPublic, selfAdded: isSelfAdded },
            });
          }
        });
      })
      .catch((err) => apiUtil.sendErr(res, err));
  },

  deleteFavoriteCase: async (req, res, next) => {
    if (!req.params.uuid) {
      apiUtil.sendErr(res, {
        type: 'missing_parameters',
        msg: 'UUID is missing!',
      });
      return;
    }

    apiUtil
      .getCurrentUser(req)
      .then((username) => {
        FavoriteCasesModel.updateOne(
          { username: username },
          { $pull: { cases: { uuid: req.params.uuid } } },
          { multi: false },
          function (err, affected) {
            if (err) {
              apiUtil.sendErr(res, {
                type: 'deletion_failed',
                msg: 'Invalid uuid',
                details: err,
              });
            } else if (affected && affected.nModified > 0) {
              apiUtil.sendResponse(res, { statusCode: 202 });
            } else if (affected && affected.nModified == 0) {
              apiUtil.sendErr(res, {
                type: 'deletion_failed',
                msg: 'Invalid id or it belongs to another user',
              });
            }
          }
        );
      })
      .catch((err) => apiUtil.sendErr(res, err));
  },
  getCaseSourceAndDestination: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      caseQueries.caseSourceAndDestination.query(req, caseQueries.caseSourceAndDestination.fields),
      caseQueries.caseSourceAndDestination.postProcessFn,
      true
    );
  },
  getCaseHostUserNetwork: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      caseQueries.caseHostUserNetworkFields.indexes(req),
      caseQueries.caseHostUserNetworkFields.query(req),
      (results) => caseQueries.caseHostUserNetworkFields.postProcessFn(req, results),
      true
    );
  },
  getCaseWhitelist: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      caseQueries.getCaseWhitelistFields.indexes(req),
      caseQueries.getCaseWhitelistFields.query(req, caseQueries.getCaseWhitelistFields.fields),
      caseQueries.getCaseWhitelistFields.postProcessFn,
      true
    );
  },
  addCaseWhitelist: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexPolicyWhiteList,
      caseQueries.addCaseWhitelistFields.query(req),
      caseQueries.addCaseWhitelistFields.postProcessFn,
      null,
      null
    );
  },
  updateState: async (req, res, next) => {
    apiUtil
      .getCurrentUser(req)
      .then((username) => {
        apiUtil.makeApiRequest(req, res, 'case.state', {
          pathParams: [req.body.uid, req.body.state, username, req.body.positive, req.body.reason],
          body: { reason: req.body.reason },
        });
      })
      .catch((err) => apiUtil.sendErr(res, err));
  },
};
