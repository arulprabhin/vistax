import apiUtil from '../Utils';

const lte_global = new Date().getTime() - 0;
// General Format => mapType: {host: [String, Optional], index: [String], query: [JSON Object]}
const queries = {
  geoMap: {
    query: {
      size: 200,
      _source: 'source.geo',
      query: {
        bool: {
          must: [
            {
              query_string: {
                query: '_exists_:source.geo',
              },
            },
          ],
        },
      },
    },
  },
  activityGraph: {
    query: {
      size: 0,
      query: {
        bool: {
          must: [
            {
              query_string: {
                query: 'entry_type:Connection OR entry_type:Ssl OR entry_type:Http',
              },
            },
            {
              range: {
                timestamp: {
                  gte: 'now-5m',
                  lte: 'now',
                },
              },
            },
          ],
        },
      },
      aggs: {
        timeSlots: {
          date_histogram: {
            field: 'timestamp',
            interval: '10s',
            format: 'HH:mm:ss', //"YYYY-MM-dd'T'HH:mm:SS",
            min_doc_count: 0,
          },
          aggs: {
            entityTypeAgg: {
              terms: {
                field: 'entry_type',
              },
            },
          },
        },
      },
    },
    postProcessFn: (response) => {
      return response.body.aggregations.timeSlots.buckets.map((b) => ({
        timestamp: b.key, //new Date(b.key),
        timeStr: b.key_as_string,
        ...b.entityTypeAgg.buckets
          .map((m) => {
            let val = {};
            val[m.key.toLowerCase()] = m.doc_count;
            return val;
          })
          .reduce((accumulator, currentValue) => {
            return { ...accumulator, ...currentValue };
          }, {}),
      }));
    },
  },
  anomalyChart: {
    query: {
      size: 100,
      query: {
        bool: {
          must: [
            {
              query_string: {
                query:
                  '(entry_type:*AnomalyEvent AND event_certainty:>20) OR (entry_type:EndpointEvent AND event_category:"Anomalous Activity")',
              },
            },
            {
              range: {
                timestamp: {
                  gte: lte_global - 2 * 24 * 60 * 60 * 1000,
                  lte: lte_global,
                  format: 'epoch_millis',
                },
              },
            },
          ],
        },
      },
      aggs: {
        name: {
          date_histogram: {
            field: 'timestamp',
            time_zone: 'America/Los_Angeles',
            interval: '4h',
            format: "YYYY-MM-dd'T'HH:mm:SS",
            min_doc_count: 0,
          },
          aggs: {
            severity: {
              stats: {
                field: 'event_severity',
              },
            },
            certainty: {
              stats: {
                field: 'event_certainty',
              },
            },
          },
        },
      },
    },
  },
  incidentsCount: {
    query: {
      query: {
        bool: {
          must: [
            {
              query_string: {
                query:
                  '(admin_state:IncidentReported OR admin_state:IncidentInvestigation ) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)',
              },
            },
          ],
        },
      },
    },
  },
  incidentAndViolationPercentageGraph: {
    query: (req) => ({
      size: 0,
      query: {
        bool: {
          must: [
            {
              range: {
                timestamp: {
                  gte: Number(req.params.gte) > 0 ? Number(req.params.gte) : 'now-1y',
                  lte: Number(req.params.lte) > 0 ? Number(req.params.lte) : 'now',
                  format: 'epoch_millis',
                },
              },
            },
          ],
        },
      },
      aggs: {
        incident: {
          filter: {
            bool: {
              must: [
                {
                  query_string: {
                    query:
                      '(admin_state:IncidentReported OR admin_state:IncidentInvestigation ) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)',
                  },
                },
              ],
            },
          },
        },
        policy_violation: {
          filter: {
            bool: {
              must: [
                {
                  query_string: {
                    query: 'category:Policy*',
                  },
                },
              ],
            },
          },
        },
      },
    }),
    postProcessFn: (results) => {
      return {
        cases: results.body.hits.total,
        incidents: {
          count: results.body.aggregations.incident.doc_count,
          percentage:
            results.body.hits.total > 0
              ? Math.ceil((results.body.aggregations.incident.doc_count / results.body.hits.total) * 100)
              : 0,
        },
        policyViolations: {
          count: results.body.aggregations.policy_violation.doc_count,
          percentage:
            results.body.hits.total > 0
              ? Math.ceil((results.body.aggregations.policy_violation.doc_count / results.body.hits.total) * 100)
              : 0,
        },
      };
    },
  },
  dataTransmittedReceivedGraph: {
    query: {
      size: 0,
      query: {
        bool: {
          must: [
            {
              query_string: {
                query: 'entry_type:Connection',
                analyze_wildcard: true,
              },
            },
            {
              range: {
                timestamp: {
                  gte: new Date().getTime() - apiUtil.minsToMilliSecs(10) - 1 * 60 * 1000,
                  lte: new Date().getTime() - apiUtil.minsToMilliSecs(10),
                  format: 'epoch_millis',
                },
              },
            },
          ],
          must_not: [],
        },
      },
      aggs: {
        transmitted: {
          sum: {
            field: 'orig_ip_bytes',
          },
        },
        received: {
          sum: {
            field: 'resp_ip_bytes',
          },
        },
      },
    },
  },
  notableItemsList: {
    fields: (req) => {
      if (req.params.type === 'hosts')
        return ['host_id', 'host_name', 'host_dns_name', 'host_score', 'host_critical', 'host_watched', 'host_uuid'];
      else if (req.params.type === 'users')
        return [
          'user_id',
          'user_name',
          'user_title',
          'user_score',
          'user_critical',
          'user_watched',
          'user_uuid',
          'user_photo',
        ];
      // changes
      else return [];
    },
    query: (req, fields) => {
      let sortBy;
      if (req.params.type === 'hosts') sortBy = 'host_score';
      else if (req.params.type === 'users') sortBy = 'user_score';
      else sortBy = 'entity_score';

      let sort = {};
      sort[sortBy] = { order: 'desc', unmapped_type: 'boolean' };

      let query;
      if (req.params.type === 'hosts') query = 'entry_type:HostType AND host_score:>0';
      else if (req.params.type === 'users')
        query = 'entry_type:UserType AND (user_score:>0 OR user_critical:true OR user_watched:true)';
      else query = '_exists_:entity_score AND entity_score:>0 AND entry_type:User';

      const site = req.params.site;
      if (site !== 'all') query += ' AND entry_source:' + site;

      const gte = Number(req.query.gte || req.params.gte),
        lte = Number(req.query.lte || req.params.lte);
      let mainQueries = [
        {
          query_string: {
            query: query,
            analyze_wildcard: true,
          },
        },
      ];
      if (gte > 0 && lte > 0) {
        mainQueries.push({
          range: {
            timestamp: {
              gte: gte,
              lte: lte,
            },
          },
        });
      } else if (gte > 0) {
        mainQueries.push({
          range: {
            timestamp: {
              gte: gte,
            },
          },
        });
      } else if (lte > 0) {
        mainQueries.push({
          range: {
            timestamp: {
              lte: lte,
            },
          },
        });
      }
      return {
        size: Number(req.params.limit),
        sort: [sort],
        _source: fields,
        query: {
          bool: {
            must: mainQueries,
          },
        },
      };
    },
    timeSeriesQuery: (uuidArray) => {
      return {
        size: 0,
        query: {
          terms: {
            entity_uuid: uuidArray,
          },
        },
        aggs: {
          agg_user: {
            terms: {
              field: 'entity_uuid',
            },
            aggs: {
              histogram: {
                auto_date_histogram: {
                  field: 'timestamp',
                  buckets: 10,
                  format: 'yyyy-MM-dd',
                },
                aggs: {
                  agg_score: {
                    terms: {
                      field: 'entity_score',
                      size: 3,
                    },
                  },
                },
              },
            },
          },
        },
      };
    },
    caseSummaryQuery: (uuidArray) => {
      return {
        size: 0,
        query: {
          terms: {
            entity_uuid: uuidArray,
          },
        },
        aggs: {
          agg_cases: {
            terms: {
              field: 'entity_uuid',
            },
            aggs: {
              incident: {
                filter: {
                  bool: {
                    must: [
                      {
                        query_string: {
                          query:
                            '(admin_state:IncidentReported OR admin_state:IncidentInvestigation) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)',
                        },
                      },
                    ],
                  },
                },
              },
              policy_violation: {
                filter: {
                  bool: {
                    must: [
                      {
                        query_string: {
                          query: 'category:Policy*',
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        },
      };
    },
    callbackFn: (response, req, res) => {
      let refinedHits = response.body.map((h) => apiUtil.sanitizeHtml(h._source));
      const uids = refinedHits.map((f) => f.user_uuid || f.host_uuid);
      apiUtil.elasticQuery(
        req,
        res,
        req.app.get('config')['EsIndexWorkLogs'],
        queries.notableItemsList.timeSeriesQuery(uids),
        null,
        true,
        (body) => {
          body = body.body.body;
          refinedHits.forEach((h) => {
            let histogram = body.aggregations.agg_user.buckets
              .filter((f) => f.key === (h.user_uuid || h.host_uuid))
              .flatMap((m) => m.histogram.buckets);
            let finalHistogram = [];
            histogram.forEach((rh) => {
              finalHistogram.push(
                rh.agg_score.buckets
                  .filter((ff) => Number(ff.key) > 0)
                  .flatMap((m) => ({
                    dateStr: rh.key_as_string,
                    timestamp: rh.key,
                    hits: m.doc_count,
                    score: m.key || 0,
                  }))
              );
            });
            h.histogram = finalHistogram.flat().slice(-10); // send back last 10 only
          });
          apiUtil.elasticQuery(
            req,
            res,
            req.app.get('config')['EsIndexCases'],
            queries.notableItemsList.caseSummaryQuery(uids),
            null,
            true,
            (caseBody) => {
              caseBody = caseBody.body.body.aggregations.agg_cases.buckets;
              refinedHits.forEach((h) => {
                const caseSummary = caseBody
                  .filter((f) => f.key === (h.user_uuid || h.host_uuid))
                  .map((m) => ({
                    cases: m.doc_count,
                    incidents: m.incident.doc_count,
                    policyViolations: m.policy_violation.doc_count,
                  }))
                  .reduce((a, c) => ({ ...a, ...c }));
                h.summary = caseSummary;
              });
              apiUtil.sendResponse(res, { body: refinedHits, count: refinedHits.length });
            }
          );
        }
      );
    },
  },
  mitreTacticsSummary: {
    query: (req) => {
      let queryString = 'main_event.event_extra_attributes:MITRE*';
      if (req.params.type === 'incident')
        queryString +=
          ' AND (admin_state:IncidentReported OR admin_state:IncidentInvestigation ) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)';
      return {
        size: 0,
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: queryString,
                },
              },
            ],
          },
        },
        aggs: {
          NAME: {
            terms: {
              field: 'main_event.event_extra_attributes',
              size: 100,
            },
          },
        },
      };
    },
  },
};
module.exports = queries;
