import apiUtil from '../Utils';
import dashboardQueries from '../ElasticQueries/Dashboard';

const lte_global = new Date().getTime() - 0;

const keyExistsInBucket = (buckets, key) => {
    return buckets.filter((val) => val.key === key).length > 0;
  },
  updateBuckets = (isExisting, buckets, key, docCount, subItem) => {
    for (let idx in buckets) {
      if (buckets[idx].key === key) {
        buckets[idx].doc_count = (isExisting ? buckets[idx].doc_count : 0) + docCount;
        buckets[idx].NAME.buckets.push(subItem);
        break;
      }
    }
  },
  filterMitre = (data) => {
    let buck = [];
    data.forEach(function (item) {
      let split_key = item.key.split(':');
      if (split_key[0] === 'MITRE') {
        let mitre = split_key[1].split('/');
        if (mitre[0].length > 0 && mitre[1].length > 0) {
          let sub_item = { key: mitre[1], doc_count: item.doc_count };
          if (!keyExistsInBucket(buck, mitre[0])) {
            buck.push({ key: mitre[0], doc_count: item.doc_count, NAME: { buckets: [] } });
            updateBuckets(false, buck, mitre[0], item.doc_count, sub_item);
          } else {
            updateBuckets(true, buck, mitre[0], item.doc_count, sub_item);
          }
        }
      }
    });
    return buck;
  },
  getMitreSubItem = (data, subItem) => {
    let array_list = [];
    for (let i = 0; i < data.length; i++) {
      let sub_buc = data[i].NAME.buckets;
      let doc_count = 0;
      for (let j = 0; j < sub_buc.length; j++) {
        if (subItem === sub_buc[j].key) {
          doc_count = sub_buc[j].doc_count;
        }
      }
      const res = {};
      res[data[i].key] = doc_count;
      array_list.push(res);
    }
    return array_list;
  },
  populateMitreSeriesList = (data, technique_list) => {
    let series_list = [];
    for (let i = 0; i < technique_list.length; i++) {
      let tmpdata = {};
      tmpdata.technique = technique_list[i];
      tmpdata.cases = getMitreSubItem(data, technique_list[i]);
      series_list.push(tmpdata);
    }
    return series_list;
  },
  reformatMitreChartDataForChartJs = (mitreData) => {
    var chartData = { labels: [], datasets: [] };
    mitreData.forEach((val) => {
      chartData.labels.push(val.technique);
      val.cases.forEach((cse) => {
        let doesExists = false;
        chartData.datasets.forEach((datas) => {
          if (datas.label == Object.keys(cse)[0]) {
            datas.data.push(Object.values(cse)[0]);
            doesExists = true;
          }
        });
        if (!doesExists) chartData.datasets.push({ label: Object.keys(cse)[0], data: [Object.values(cse)[0]] });
      });
    });
    return chartData;
  },
  formatAnomalyGraph = (buck) => {
    let array = [];
    let total = {};
    buck.forEach((val) => {
      let tmpData = {
        timestamp: val['key_as_string'],
        severity: {
          pct0: val.severity.min,
          pct50: parseInt(val.severity.avg),
          pct100: val.severity.max,
        },
        certanity: {
          pct0: val.certainty.min,
          pct50: parseInt(val.certainty.avg),
          pct100: val.certainty.max,
        },
      };
      array.push(tmpData);
    });
    total.interval = '4 Hours';
    total.dataArry = array;
    return total;
  },
  fillZeroAnomalyGraph = (gte, lte) => {
    let array = [];
    let total = {};
    for (let i = gte; i < lte; i = i + 4 * 3600 * 1000) {
      let tmpData = {
        timestamp: i,
        severity: {
          pct0: 0,
          pct50: 0,
          pct100: 0,
        },
        certanity: {
          pct0: 0,
          pct50: 0,
          pct100: 0,
        },
      };
      array.push(tmpData);
    }
    total.interval = '4 Hours';
    total.dataArry = array;
    return total;
  };

module.exports = {
  getGeoMapData: async (req, res, next) => {
    apiUtil.elasticQuery(req, res, req.app.get('config').EsIndexIoas, dashboardQueries.geoMap.query, (results) =>
      apiUtil.getUniqueResults(results, '$..geo')
    );
  },
  getActivityChartData: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexRawLogs,
      dashboardQueries.activityGraph.query,
      dashboardQueries.activityGraph.postProcessFn,
      true
    );
  },
  getAnomalyChartData: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexRawEvents,
      dashboardQueries.anomalyChart.query,
      (data) => {
        let anomalyBuckets = data.body.aggregations.name.buckets;
        if (anomalyBuckets.length != 0) {
          return formatAnomalyGraph(anomalyBuckets);
        } else {
          return fillZeroAnomalyGraph(lte_global - 2 * 24 * 60 * 60 * 1000, lte_global);
        }
      },
      true
    );
  },
  getIncidentAndPolicyViolationPercentage: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      dashboardQueries.incidentAndViolationPercentageGraph.query(req),
      dashboardQueries.incidentAndViolationPercentageGraph.postProcessFn,
      true
    );
  },
  getDataProcessedByNode: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexRawLogs,
      dashboardQueries.dataTransmittedReceivedGraph.query,
      null,
      true,
      (response) => {
        if (response.status === 'err') {
          apiUtil.sendErrBody(res, response);
        } else {
          const trans = apiUtil.formatBytes(response.body.body.aggregations.transmitted.value);
          const rec = apiUtil.formatBytes(response.body.body.aggregations.received.value);
          apiUtil.sendResponse(res, {
            body: { trans: trans, rec: rec },
          });
        }
      }
    );
  },
  getNotableItemDetails: async (req, res, next) => {
    let index = req.app.get('config')['EsIndexWorkLogs']; // changes
    if (req.params.type === 'hosts') index = req.app.get('config')['EsIndexEntityHosts'];
    else if (req.params.type === 'users') index = req.app.get('config')['EsIndexEntityUsers'];
    apiUtil.elasticQuery(
      req,
      res,
      index,
      dashboardQueries.notableItemsList.query(req, dashboardQueries.notableItemsList.fields(req)),
      null,
      false,
      dashboardQueries.notableItemsList.callbackFn
    );
  },
  getMitreTacticsSummary: async (req, res, next) => {
    apiUtil.elasticQuery(
      req,
      res,
      req.app.get('config').EsIndexCases,
      dashboardQueries.mitreTacticsSummary.query(req),
      (response) => {
        let mitreBuckets = response.body.aggregations.NAME.buckets;
        mitreBuckets = filterMitre(mitreBuckets);
        let technique_list = [];
        mitreBuckets.forEach(function (item) {
          item.NAME.buckets.forEach(function (subItem) {
            if (technique_list.indexOf(subItem.key) === -1) {
              technique_list.push(subItem.key);
            }
          });
        });
        return reformatMitreChartDataForChartJs(populateMitreSeriesList(mitreBuckets, technique_list));
      },
      true
    );
  },
};
