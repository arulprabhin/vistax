import apiUtil from '../Utils';

const getAllFields = (src) => {
  if (!src || src.length === 0) return { fields: [] };
  let uniqueFields = new Set();
  src.forEach((source) => {
    Object.keys(source).forEach((key) => uniqueFields.add(key));
  });
  return uniqueFields; //apiUtil.setToArray(uniqueFields);
};

function getTablefields(src) {
  let source = [];
  let allFields = Array.from(
    new Set(
      src.flatMap((item) => {
        source.push(item._source);
        return Object.keys(item._source);
      })
    )
  );

  return { source: source, allFields: allFields };
}

function getStackedChart(buck) {
  let keys = new Set();
  buck.flatMap((item) => item.type.buckets).forEach((item) => keys.add(item.key));
  keys = Array.from(keys);
  const obj = {};
  const tmpArray = [];
  buck.forEach((item) => {
    item.type.buckets.forEach((child) => {
      tmpArray.push({ timestamp: item.key, [child.key]: child.doc_count });
    });
  });
  obj.allkeys = keys;
  obj.result = tmpArray;

  return obj;
}

function getGraphArray(wholeData, gte, interval) {
  const aggr = wholeData.aggregations.first.buckets;
  if (aggr.length > 0) {
    const dateArray = getStackedChart(aggr);
    return {
      graphData: dateArray,
    };
  }
  return {
    graphData: {},
  };
}

function updateQuery(doc, query) {
  let must = query.must_query;
  let must_not = query.must_not_query;
  let must_key = Object.keys(query.must_query);
  let must_not_query_key = Object.keys(query.must_not_query);
  let should_key = Object.keys(query.should_query);

  must_key.forEach(function (item) {
    let tmpArray = must[item];

    tmpArray.forEach(function (child) {
      let tmp = { match: {} };
      tmp['match'][item] = child;
      doc.query.bool.must.push(tmp);
    });
  });

  should_key.forEach(function (item) {
    let tmpArray = query.should_query[item];

    tmpArray.forEach(function (child) {
      let tmp_should = { match: {} };
      tmp_should.match[item] = child;
      doc.query.bool.should.push(tmp_should);
    });
  });

  must_not_query_key.forEach(function (item) {
    let tmpArray = must_not[item];

    tmpArray.forEach(function (child) {
      let tmp = { match: {} };
      tmp['match'][item] = child;
      doc.query.bool.must_not.push(tmp);
    });
  });

  return doc;
}

module.exports = {
  geoMap: {
    query: (req) => {
      return {
        size: 1000,
        _source: ['source.geo.location', 'destination.geo.location'],
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: req.body.query,
                  analyze_wildcard: true,
                },
              },
              {
                range: {
                  timestamp: {
                    gte: Number(req.body.gte),
                    lte: Number(req.body.lte),
                    format: 'epoch_millis',
                  },
                },
              },
            ],
            should: [
              {
                exists: {
                  field: 'destination.geo.location',
                },
              },
              {
                exists: {
                  field: 'source.geo.location',
                },
              },
            ],
            must_not: [],
          },
        },
      };
    },
    postProcessFn: (hit) => {
      let map_array = [];
      hit.forEach(function (item) {
        if (typeof item._source['source'] != 'undefined') {
          if (typeof item._source['source']['geo'] != 'undefined') {
            if (typeof item._source['source']['geo']['location'] != 'undefined') {
              map_array.push(item._source['source']['geo']['location']);
            }
          }
        }
        if (typeof item._source['destination'] != 'undefined') {
          if (typeof item._source['destination']['geo'] != 'undefined') {
            if (typeof item._source['destination']['geo']['location'] != 'undefined') {
              map_array.push(item._source['destination']['geo']['location']);
            }
          }
        }
      });
      return map_array;
    },
  },
  getTableFields: {
    indexes: (req) => [
      req.app.get('config').Customer + '-' + 'raw-logs*',
      req.app.get('config').Customer + '-' + 'raw-events*',
    ],
    query: (req) => {
      return {
        size: 500,
        sort: [
          {
            probability: {
              order: 'desc',
              unmapped_type: 'boolean',
            },
          },
        ],
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: '*',
                },
              },
              {
                range: {
                  timestamp: {
                    gte: Number(req.query.gte),
                    lte: Number(req.query.lte),
                    format: 'epoch_millis',
                  },
                },
              },
            ],
            must_not: [],
          },
        },
        aggs: {
          ipa: {
            terms: {
              field: 'entry_type',
              size: 50,
            },
            aggs: {
              unique: {
                top_hits: {
                  sort: [
                    {
                      timestamp: {
                        order: 'desc',
                      },
                    },
                  ],
                  size: 5,
                },
              },
            },
          },
        },
      };
    },
    postProcessFn: (response) => {
      let source = [];
      let aggs = response.body.aggregations.ipa.buckets;
      for (let i = 0; i < aggs.length; i++) {
        let child = aggs[i].unique.hits.hits;
        for (let j = 0; j < child.length; j++) source.push(child[j]._source);
      }
      return getAllFields(source);
    },
  },
  getHuntTable: {
    indexes: (req) => [
      req.app.get('config').Customer + '-' + 'raw-logs*',
      req.app.get('config').Customer + '-' + 'raw-events*',
      req.app.get('config').Customer + '-' + 'ioas',
    ],
    query: (req) => {
      return {
        from: 0,
        size: 10,
        sort: [
          {
            timestamp: {
              order: 'desc',
              unmapped_type: 'boolean',
            },
          },
        ],
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: '*',
                  analyze_wildcard: true,
                },
              },
              {
                range: {
                  timestamp: {
                    gte: req.body.gte,
                    lte: req.body.lte,
                    format: 'epoch_millis',
                  },
                },
              },
            ],
            must_not: [
              {
                query_string: {
                  query:
                    'action:snapshot OR entry_type:"HostComplianceType" OR name:"pack/Monitoring Pack/ProcessList"',
                  analyze_wildcard: true,
                },
              },
            ],
            should: [],
            minimum_should_match: 0,
            boost: 1,
          },
        },
        aggs: {
          first: {
            date_histogram: {
              field: 'timestamp',
              interval: '90000ms',
              format: 'YYYY-MMM-dd',
              min_doc_count: 0,
            },
            aggs: {
              type: {
                terms: {
                  field: 'entry_type',
                  size: 20,
                },
              },
            },
          },
        },
      };
    },
    postProcessFn: (response) => {
      let field = ['entry_type'];
      let source = response.body.hits.hits;
      let result;
      if (source.length > 0) {
        result = getTablefields(source, field);
        result['total'] = response.body.hits.total;
        return result;
      } else {
        return {
          tableData: {
            total: 0,
            result: '',
            allFields: [],
          },
        };
      }
    },
  },
  getHuntGraph: {
    indexes: (req) => [
      req.app.get('config').Customer + '-' + 'raw-logs*',
      req.app.get('config').Customer + '-' + 'raw-events*',
      req.app.get('config').Customer + '-' + 'ioas',
    ],
    query: (req) => {
      let query = {
        size: 10,
        sort: [
          {
            timestamp: {
              order: 'desc',
              unmapped_type: 'boolean',
            },
          },
        ],
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: req.body.query,
                  analyze_wildcard: true,
                },
              },
            ],
            must_not: [
              {
                query_string: {
                  query:
                    'action:snapshot OR entry_type:"HostComplianceType" OR name:"pack/Monitoring Pack/ProcessList"',
                  analyze_wildcard: true,
                },
              },
            ],
            should: [],
            minimum_should_match: 0,
            boost: 1,
          },
        },
        aggs: {
          first: {
            auto_date_histogram: {
              field: 'timestamp',
              format: 'YYYY-MM-dd HH:mm',
            },
            aggs: {
              type: {
                terms: {
                  field: 'entry_type',
                  size: 20,
                },
              },
            },
          },
        },
      };
      if (Number(req.params.gte) > 0 && Number(req.params.lte) > 0) {
        query.query.bool.must.push({
          range: {
            timestamp: {
              gte: Number(req.params.gte),
              lte: Number(req.params.lte),
              format: 'epoch_millis',
            },
          },
        });
      }
      return updateQuery(query, JSON.parse(atob(req.body.subQuery)));
    },
    postProcessFn: (response) => {
      let field = ['entry_type'];
      let source = response.body.hits.hits;
      let result;
      if (source.length > 0) {
        result = getGraphArray(response.body, field, '1644992144621', '9000ms');
        return result;
      } else {
        return {
          graphData: {
            total: 0,
          },
        };
      }
    },
  },
  topCases: {
    fields: [
      'certainty',
      'severity',
      'score',
      'admin_state',
      'case_detail',
      'case_id',
      'category',
      'case_summary',
      'created_at',
      'entry_origin',
      'entry_source',
      'entry_type',
      'entry_uuid',
      'ioa_count',
      'last_modified',
      'timestamp',
      'uri',
      'attacker_is_dest',
      'attacker_ip',
      'dest',
      'src',
      'victim_host_uuid',
      'victim_is_src',
      'victim_ip',
      'victim_user_uuid',
      'attacker_user_uuid',
      'attacker_host_uuid',
      'trigger',
      'entity_uuid',
      'entity_type',
    ],
    query: (req, fields) => {
      let queryString = '*'; // case, activity
      if (req.params.type === 'incident')
        queryString =
          '(admin_state:IncidentReported OR admin_state:IncidentInvestigation ) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)';
      else if (req.params.type === 'policy') queryString = 'category:Policy*';
      else if (req.params.type === 'geo')
        queryString = '_exists_:source.geo.location OR _exists_:destination.geo.location';
      else if (req.params.type === 'mitre') queryString = 'event_extra_attributes:MITRE*';

      let sort = [];
      if (req.params.topBy === 'all') {
        req.params.topBy = 'certainty,severity,score';
      }
      req.params.topBy.split(',').forEach((top) => {
        let sortParam = {};
        sortParam[top] = { order: 'desc' };
        sort.push(sortParam);
      });
      let must = [
        {
          query_string: {
            query: queryString,
          },
        },
      ];
      const gte = Number(req.params.gte);
      const lte = Number(req.params.lte);
      if (lte > 0 && gte > 0) {
        must.push({
          range: {
            timestamp: {
              gte: Number(req.params.gte),
              lte: Number(req.params.lte),
              format: 'epoch_millis',
            },
          },
        });
      }

      return {
        size: req.params.limit,
        sort: sort,
        _source: fields,
        query: {
          bool: {
            must: must,
          },
        },
      };
    },
  },
  FavoriteCases: {
    fields: [
      'certainty',
      'severity',
      'score',
      'admin_state',
      'case_detail',
      'entity_uuid',
      'case_id',
      'category',
      'case_summary',
      'category',
      'created_at',
      'entry_origin',
      'entry_source',
      'entry_type',
      'entry_uuid',
      'ioa_count',
      'last_modified',
      'positive',
      'recommendation',
      'severity',
      'score',
      'timestamp',
      'attacker_is_dest',
      'attacker_ip',
      'dest',
      'src',
      'victim_host_uuid',
      'victim_is_src',
      'victim_ip',
      'victim_user_uuid',
      'attacker_user_uuid',
      'attacker_host_uuid',
      'trigger',
      'main_event',
      'entity_type',
      'actor',
      'targets',
      'weightage',
      'ioa_count',
    ],
    query: (req, caseUuids, fields) => {
      const page = Number(req.body.page) || 0;
      const size = Number(req.body.size) || 10;
      const filter = req.body.filter
        ? req.body.filter.map((f) => ({ match: JSON.parse(Buffer.from(f, 'base64').toString()) }))
        : [];

      const defaultSort = [
        {
          sort_all_fieldsssss: {
            order: 'desc',
            unmapped_type: 'boolean',
          },
        },
      ];
      const order = req.body.order
        ? req.body.order.map((o) => JSON.parse(Buffer.from(o, 'base64').toString()))
        : defaultSort;
      return {
        from: page * size,
        size: size,
        sort: order,
        _source: fields,
        query: {
          bool: {
            must: [
              ...filter,
              ...[
                {
                  terms: {
                    entry_uuid: caseUuids,
                  },
                },
              ],
            ],
            must_not: [],
          },
        },
      };
    },
    postProcessFn: (response) => {
      let source = response.data.body;
      let result;
      if (source.length > 0) {
        result = getTablefields(source, field);
        result['total'] = response.body.hits.total;
        return result;
      } else {
        return {
          tableData: {
            total: 0,
            result: '',
            allFields: [],
          },
        };
      }
    },
  },
  worstOffenders: {
    sourceFields: [
      'entity_type',
      'admin_state',
      'case_summary',
      'certainty',
      'entity_uuid',
      'entry_origin',
      'entry_source',
      'entry_type',
      'entry_uuid',
      'score',
      'severity',
      'certainty',
      'timestamp',
      'src',
      'dest',
      'trigger',
    ],
    query: (req, sourceFields) => {
      const entityType =
        req.params.type === 'user'
          ? 'entity_type:User'
          : req.params.type === 'host'
          ? 'entity_type:Host'
          : '(entity_type:User or entity_type:Host)';
      let sort = [];
      if (req.params.topBy === 'all') {
        req.params.topBy = 'certainty,severity,score';
      }
      req.params.topBy.split(',').forEach((top) => {
        let sortParam = {};
        sortParam[top] = { order: 'desc' };
        sort.push(sortParam);
      });
      let query = {
        size: Number(req.params.limit || '10'),
        sort: sort,
        _source: sourceFields,
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: `(admin_state:IncidentReported OR admin_state:IncidentInvestigation) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*) AND ${entityType}`,
                },
              },
            ],
          },
        },
      };
      if (Number(req.params.gte) > 0 && Number(req.params.lte) > 0) {
        query.query.bool.must.push({
          range: {
            timestamp: {
              gte: Number(req.params.gte),
              lte: Number(req.params.lte),
              format: 'epoch_millis',
            },
          },
        });
      }
      return query;
    },
  },
  caseAggregation: {
    query: (req) => {
      const type = req.params.type,
        aggregateBy = req.params.aggBy;
      const gte = Number(req.params.gte),
        lte = Number(req.params.lte);
      let queryString = '*';
      if (type === 'incident') {
        queryString =
          '(admin_state:IncidentReported OR admin_state:IncidentInvestigation) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)';
      } else if (type === 'policy') {
        queryString = '(category:Policy*)';
      }
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
              {
                range: {
                  timestamp: {
                    gte: gte,
                    lte: lte,
                    format: 'epoch_millis',
                  },
                },
              },
            ],
          },
        },
        aggs: {
          timeSeries: {
            date_histogram: {
              field: 'timestamp',
              interval: apiUtil.getElasticInterval(gte, lte),
              format: 'YYYY-MM-dd HH:mm',
            },
            aggs: {
              aggType: {
                terms: {
                  field: aggregateBy,
                },
              },
            },
          },
        },
      };
    },
    postProcessFn: (req, result) => {
      const gte = Number(req.params.gte),
        lte = Number(req.params.lte);

      return {
        interval: apiUtil.getElasticInterval(gte, lte),
        result: result.body.aggregations.timeSeries.buckets.map((m) => ({
          timestamp: m.key,
          timeStr: m.key_as_string,
          total: m.doc_count,
          values: apiUtil.deSnakeJsonKeys(m.aggType.buckets),
        })),
      };
    },
  },
  incidentHistoryGraph: {
    query: (req) => {
      const gte = Number(req.params.gte),
        lte = Number(req.params.lte);
      let query = {
        size: 0,
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
        aggs: {
          NAME: {
            date_histogram: {
              field: 'timestamp',
              interval: apiUtil.getElasticInterval(gte, lte),
            },
            aggs: {
              NAME: {
                terms: {
                  field: 'admin_state',
                  size: 10000,
                },
              },
            },
          },
        },
      };
      if (Number(req.params.gte) > 0 && Number(req.params.lte) > 0) {
        query.query.bool.must.push({
          range: {
            timestamp: {
              gte: Number(req.params.gte),
              lte: Number(req.params.lte),
              format: 'epoch_millis',
            },
          },
        });
      }
      return query;
    },
    postProcessFn: (req, results) => {
      const gte = Number(req.params.gte),
        lte = Number(req.params.lte);
      return {
        interval: apiUtil.getElasticInterval(gte, lte),
        result: results.body.aggregations.NAME.buckets.map((item) => ({
          timestamp: item.key,
          incident: item.doc_count,
        })),
      };
    },
  },
  caseAndCategorySummary: {
    query: (req) => {
      const site = req.params.site;
      const type = req.params.type;
      const aggregateBy = req.params.aggBy;
      const gte = Number(req.params.gte),
        lte = Number(req.params.lte);
      const certainty = Number(req.params.certainty),
        score = Number(req.params.score);
      let queryString = '*';
      if (req.method == 'POST') queryString = req.body.query;
      else if (type === 'incident')
        queryString =
          '(admin_state:IncidentReported OR admin_state:IncidentInvestigation ) AND -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)';
      else if (type === 'policy') queryString = '(category:Policy*)';
      if (site !== 'all') queryString += ` AND entry_source:"${site}"`;
      let ranges = [
        {
          key: 'Critical',
          from: 75,
        },
        {
          key: 'High',
          from: 50,
          to: 75,
        },
        {
          key: 'Medium',
          from: 25,
          to: 50,
        },
        {
          key: 'Low',
          to: 25,
        },
      ];
      if (aggregateBy === 'score') {
        ranges[0].from = 8;
        ranges[1].to = 8;
        ranges[1].from = 6;
        ranges[2].to = 6;
        ranges[2].from = 3;
        ranges[3].to = 3;
      }

      let mustQuery = [
        {
          query_string: {
            query: queryString,
          },
        },
        {
          range: {
            timestamp: {
              gte: gte,
              lte: lte,
              format: 'epoch_millis',
            },
          },
        },
      ];
      if (certainty > 0)
        mustQuery.push({
          range: {
            certainty: {
              gte: 0,
              lte: certainty,
            },
          },
        });
      if (score > 0)
        mustQuery.push({
          range: {
            score: {
              gte: 0,
              lte: score,
            },
          },
        });
      return {
        size: 0,
        query: {
          bool: {
            must: mustQuery,
          },
        },
        aggs: {
          range_aggregation: {
            range: {
              field: aggregateBy,
              ranges: ranges,
            },
          },
          category_aggregation: {
            aggs: {
              category_range_aggregation: {
                range: {
                  field: aggregateBy,
                  ranges: ranges,
                },
              },
            },
            terms: {
              field: 'category',
            },
          },
        },
      };
    },
    postProcessFn: (results) => ({
      total: results.body.hits.total,
      ...results.body.aggregations.range_aggregation.buckets
        .map((m) => {
          let ret = {};
          ret[m.key.toLowerCase()] = m.doc_count;
          return ret;
        })
        .reduce((acc, val) => ({ ...acc, ...val }), {}),
      categories: results.body.aggregations.category_aggregation.buckets.map((m) => {
        return {
          category: m.key,
          count: m.doc_count,
          ...m.category_range_aggregation.buckets
            .map((m) => {
              let ret = {};
              ret[m.key.toLowerCase()] = m.doc_count;
              return ret;
            })
            .reduce((acc, val) => ({ ...acc, ...val }), {}),
        };
      }),
      ranges: results.body.aggregations.range_aggregation.buckets
        .map((m) => {
          let ret = {};
          ret[m.key.toLowerCase()] = { from: m.from, to: m.to };
          return ret;
        })
        .reduce((acc, val) => ({ ...acc, ...val }), {}),
    }),
  },

  caseListingTableFields: {
    indexes: (req) => [
      req.app.get('config').Customer + '-' + 'raw-logs*',
      req.app.get('config').Customer + '-' + 'raw-events*',
    ],
    query: (req) => {
      return {
        size: 500,
        sort: [
          {
            probability: {
              order: 'desc',
              unmapped_type: 'boolean',
            },
          },
        ],
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: '*',
                },
              },
              {
                range: {
                  timestamp: {
                    gte: Number(req.query.gte),
                    lte: Number(req.query.lte),
                    format: 'epoch_millis',
                  },
                },
              },
            ],
            must_not: [],
          },
        },
        aggs: {
          ipa: {
            terms: {
              field: 'entry_type',
              size: 50,
            },
            aggs: {
              unique: {
                top_hits: {
                  sort: [
                    {
                      timestamp: {
                        order: 'desc',
                      },
                    },
                  ],
                  size: 5,
                },
              },
            },
          },
        },
      };
    },
    postProcessFn: (response) => {
      let source = [];
      let aggs = response.body.aggregations.ipa.buckets;
      for (let i = 0; i < aggs.length; i++) {
        let child = aggs[i].unique.hits.hits;
        for (let j = 0; j < child.length; j++) source.push(child[j]._source);
      }
      return getAllFields(source);
    },
  },
  caseListData: {
    fields: [
      'admin_state',
      'case_detail',
      'entity_uuid',
      'case_id',
      'certainty',
      'case_summary',
      'category',
      'created_at',
      'entry_origin',
      'entry_source',
      'entry_type',
      'entry_uuid',
      'last_modified',
      'positive',
      'recommendation',
      'severity',
      'score',
      'timestamp',
      'attacker_is_dest',
      'attacker_ip',
      'dest',
      'src',
      'victim_host_uuid',
      'victim_is_src',
      'victim_ip',
      'victim_user_uuid',
      'attacker_user_uuid',
      'attacker_host_uuid',
      'trigger',
      'main_event',
      'entity_type',
      'actor',
      'targets',
      'weightage',
      'ioa_count',
    ],
    query: (req, fields) => {
      const type = req.params.type || 'incident';
      const site = req.params.site || 'all';
      const gte = req.params.gte ? Number(req.params.gte) : 'now-1y';
      const lte = req.params.lte ? Number(req.params.lte) : 'now';
      const certainty = req.params.certainty ? Number(req.params.certainty) : 0;
      const score = req.params.score ? Number(req.params.score) : 0;
      const page = Number(req.body.page) || 0;
      const size = Number(req.body.size) || 10;
      const filter = req.body.filter
        ? req.body.filter.map((f) => ({ match: JSON.parse(Buffer.from(f, 'base64').toString()) }))
        : [];
      const baseQuery = req.body.query;
      const category = { match: { category: req.body.category } };
      let modifiedQuery = `${baseQuery} AND certainty:>=${certainty} AND score:>=${score}`;
      if (site !== 'all') modifiedQuery += ` AND entry_source:"${site}"`;
      const defaultSort = [
        {
          sort_all_fieldsssss: {
            order: 'desc',
            unmapped_type: 'boolean',
          },
        },
      ];
      const order = req.body.order
        ? req.body.order.map((o) => JSON.parse(Buffer.from(o, 'base64').toString()))
        : defaultSort;
      return {
        from: page * size,
        size: size,
        sort: order,
        _source: fields,
        query: {
          bool: {
            must: [
              ...[category],
              ...filter,
              ...[
                {
                  query_string: {
                    query: modifiedQuery,
                    analyze_wildcard: true,
                  },
                },
                {
                  range: {
                    timestamp: {
                      gte: gte,
                      lte: lte,
                      format: 'epoch_millis',
                    },
                  },
                },
              ],
            ],
            must_not: [],
          },
        },
      };
    },
    postProcessFn: (response) => {
      let source = response.data.body;
      let result;
      //return response;
      if (source.length > 0) {
        result = getTablefields(source, field);
        result['total'] = response.body.hits.total;
        return result;
      } else {
        return {
          tableData: {
            total: 0,
            result: '',
            allFields: [],
          },
        };
      }
    },
  },
  caseActivityQuery: {
    fields: [
      'entry_origin',
      'entry_type',
      'entity_score',
      'entity_uuid',
      'ref_type',
      'timestamp',
      'param1',
      'param2',
      'param3',
      'ref_uuid',
    ],
    query: (req) => {
      return {
        size: 500,
        sort: [
          {
            timestamp: {
              order: 'asc',
              unmapped_type: 'boolean',
            },
          },
        ],
        _source: req.body.fields,
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: req.body.query,
                  analyze_wildcard: true,
                },
              },
            ],
            must_not: [],
          },
        },
      };
    },
  },
  getCaseWhitelistFields: {
    indexes: (req) => [
      req.app.get('config').Customer + '-' + 'ioas',
      req.app.get('config').Customer + '-' + 'raw-events*',
    ],
    fields: [
      'admin_state',
      'host_uuid',
      'case_detail',
      'src',
      'case_id',
      'certainty',
      'dest',
      'dest_host',
      'ioa',
      'case_summary',
      'event_category',
      'subcategory',
      'created_at',
      'entry_origin',
      'entry_source',
      'entry_type',
      'entry_uuid',
      'incident_info',
      'ioa_count',
      'last_modified',
      'policy_violation_info',
      'positive',
      'recommendation',
      'severity',
      'score',
      'timestamp',
      'victim_is_dest',
      'attacker_is_src',
      'subcategory',
      'victim_user_uuid',
      'victim_host_uuid',
      'victim_ip',
      'attacker_ip',
      'event_trigger',
      'event_attribute',
      'indicator',
      'indicator_type',
      'user_agent',
      'app',
      'app_info',
      'IncidentCaseEvents',
      'proto',
      'entry_origin',
      'ext_info',
      'event_actor',
      'event_targets',
    ],
    query: (req) => {
      return {
        size: 1,
        sort: [
          {
            timestamp: {
              order: 'desc',
              unmapped_type: 'boolean',
            },
          },
        ],
        _source: req.body.fields,
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: 'entry_uuid:' + req.params.query,
                },
              },
            ],
            must_not: [],
          },
        },
      };
    },
    postProcessFn: (response) => {
      let source = response.body.hits.hits;
      let result;
      if (source.length > 0) {
        result = getTablefields(source);
        return result;
      } else {
        return {
          source: '',
          allFields: [],
        };
      }
    },
  },
  addCaseWhitelistFields: {
    query: (req) => {
      return {
        timestamp: req.body.timestamp,
        expiry_date: req.body.expiry_date,
        entry_uuid: req.body.uid,
        reason: req.body.reason,
        incident_uuid: req.body.iuid,
        whitelist_rule: {
          bool: {
            must: req.body.query,
          },
        },
      };
    },
    postProcessFn: (response) => {
      let source = response.data.body;
      return source;
    },
  },
  caseSourceAndDestination: {
    fields: [
      'admin_state',
      'case_detail',
      'case_id',
      'certainty',
      'case_summary',
      'category',
      'subcategory',
      'created_at',
      'entry_origin',
      'entry_source',
      'entry_type',
      'entry_uuid',
      'incident_info',
      'ioa_count',
      'last_modified',
      'policy_violation_info',
      'positive',
      'recommendation',
      'severity',
      'score',
      'timestamp',
      'ioa',
      'victim_is_dest',
      'attacker_is_src',
      'subcategory',
      'victim_user_uuid',
      'victim_host_uuid',
      'victim_ip',
      'attacker_ip',
      'trigger',
      'entity_uuid',
      'actor',
      'targets',
      'main_event',
      'entity_type',
    ],
    query: (req) => {
      return {
        size: 1,
        sort: [
          {
            timestamp: {
              order: 'desc',
              unmapped_type: 'boolean',
            },
          },
        ],
        _source: req.body.fields,
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: req.body.query,
                  analyze_wildcard: true,
                },
              },
            ],
            must_not: [],
          },
        },
      };
    },
    postProcessFn: (response) => {
      let source = response.body.hits.hits;

      if (source.length > 0) {
        return getTablefields(source);
      } else {
        return {
          source: [],
          allFields: [],
        };
      }
    },
  },
  caseHostUserNetworkFields: {
    indexes: (req) => [req.app.get('config').Customer + '-' + req.body.index],
    query: (req) => {
      let queryString = '';
      let fields = [];
      if (req.params.type === 'host') {
        queryString = 'host_uuid:' + req.body.query;
        fields = [
          'host_name',
          'host_mac',
          'host_location',
          'host_uuid',
          'host_description',
          'host_os',
          'host_os_version',
          'host_os_service_pack',
          'host_critical',
          'host_watched',
          'host_dns_name',
          'host_score',
          'host_quarantined',
          'host_restricted',
        ];
      } else if (req.params.type === 'user') {
        queryString = 'user_uuid:' + req.body.query;
        fields = [
          'user_name',
          'user_title',
          'user_location',
          'user_uuid',
          'user_critical',
          'user_watched',
          'user_quarantined',
          'user_department',
          'user_email',
          'user_photo',
          'user_score',
          'restricted',
        ];
      }
      return {
        size: 500,
        sort: [
          {
            timestamp: {
              order: 'desc',
              unmapped_type: 'boolean',
            },
          },
        ],
        _source: fields,
        query: {
          bool: {
            must: [
              {
                query_string: {
                  query: queryString,
                  analyze_wildcard: true,
                },
              },
            ],
            must_not: [],
          },
        },
      };
    },
    postProcessFn: (req, results) => {
      let source = results.body.hits.hits;

      if (source.length > 0) {
        return getTablefields(source);
      } else {
        return {
          source: [],
          allFields: [],
        };
      }
    },
  },
};
