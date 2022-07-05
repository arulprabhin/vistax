import { Buffer } from 'buffer';
const isLocalhost = Boolean(
  location.hostname === 'localhost' ||
    location.hostname === '[::1]' ||
    location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
const API_SERVER_BASE_URL = isLocalhost ? '//localhost:6010/api/' : location.protocol + '//' + location.host + '/api/';
const CLIENT_ID = '7bc1b8a57b1d4c9aa32c02461ed09646',
  CLIENT_SECRET = 'balAGjNdF9e7VZJT1S0wtC8YBx632uH5vf4imMUI';
const KEY_MAPPINGS = {
  oauth: {
    url: API_SERVER_BASE_URL + 'oauth/token',
    method: 'POST',
    auth: false,
    body: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'password',
    },
  },
  // Header==> Authorization Basic BASE64(clientId:clientSecret)
  // Content-Type: application/x-www-form-urlencoded
  // Body: grant_type:refresh_token, refresh_token: YOUR LAST REFRESH TOKEN
  oauthRefresh: {
    url: API_SERVER_BASE_URL + 'oauth/token',
    method: 'POST',
    auth: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')}`,
    },
    body: () => ({
      grant_type: 'refresh_token',
      refresh_token: JSON.parse(JSON.parse(sessionStorage.getItem('persist:root')).user).user.token.refresh,
    }),
  },
  userLogout: {
    url: API_SERVER_BASE_URL + 'logout',
    method: 'GET', // POST-will also work
    auth: true,
  },
  huntActivitySiteList: { url: API_SERVER_BASE_URL + 'common/v1/sites', method: 'GET', auth: true },
  saveSearchHistory: { url: API_SERVER_BASE_URL + 'common/v1/query-history', auth: true, method: 'POST' },
  getSearchHistory: { url: API_SERVER_BASE_URL + 'common/v1/query-history', auth: true },
  deleteSearchHistory: { url: API_SERVER_BASE_URL + 'common/v1/query-history', auth: true, method: 'DELETE' },
  saveQuery: { url: API_SERVER_BASE_URL + 'common/v1/query-history', auth: true, method: 'POST' },
  listSavedQuery: { url: API_SERVER_BASE_URL + 'common/v1/query-history', auth: true, method: 'GET' },
  deleteSavedQuery: { url: API_SERVER_BASE_URL + 'common/v1/saved-query', auth: true, method: 'DELETE' },
  huntActivitySaveQuery: {
    url: API_SERVER_BASE_URL + 'common/v1/saved-query',
    auth: true,
  },
  huntActivityQueryHistory: {
    url: API_SERVER_BASE_URL + 'common/v1/query-history',
    auth: true,
  },
  mitreConfig: {
    url: API_SERVER_BASE_URL + 'common/v1/mitre-config',
    method: 'GET',
    auth: true,
  },
  /////////////////////////
  dashboardGeoMapData: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/geo-map-data',
    method: 'GET',
    auth: true,
  },
  dashboardActivityChart: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/activity-chart-data',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    auth: true,
  },
  dashboardAnomalyChart: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/anomaly-chart-data',
    method: 'GET',
    auth: true,
  },
  caseIncidentAndViolationCount: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/case-type-count',
    method: 'GET',
    auth: true,
  },
  dashboardDataProcessedByNode: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/data-processed-by-node',
    method: 'GET',
    auth: true,
  },
  dashboardNotableHostList: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/notable-item/hosts',
    method: 'GET',
    auth: true,
  },
  dashboardNotableUserList: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/notable-item/users',
    method: 'GET',
    auth: true,
  },
  dashboardNotableChangesList: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/notable-item/changes',
    method: 'GET',
    auth: true,
  },
  dashboardMitreCasesByTactics: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/summary-by-mitre-tactics/case',
    method: 'GET',
    auth: true,
  },
  dashboardMitreIncidentsByTactics: {
    url: API_SERVER_BASE_URL + 'dashboard/v1/summary-by-mitre-tactics/incident',
    method: 'GET',
    auth: true,
  },
  /////////////////////////////////////
  huntGeoMapData: {
    url: API_SERVER_BASE_URL + 'case/v1/geo-location-data',
    method: 'POST',
    auth: true,
    body: {
      query: 'event_certainty:>=0 AND event_severity:>=0',
      gte: 6000,
      lte: 1643900010260,
      size: 1000,
    },
  },
  huntGraphData: {
    url: API_SERVER_BASE_URL + 'case/v1/activity-graph-data',
    method: 'POST',
    auth: true,
    headers: { 'Content-Type': 'application/json' },
    body: {},
  },
  huntTableData: {
    url: API_SERVER_BASE_URL + 'case/v1/activity-table-data',
    method: 'POST',
    auth: true,
    body: {
      query: '*',
      gte: 'now-1h',
      lte: 'now',
      size: 1000,
    },
  },
  caseIncidentPolicyList: {
    url: API_SERVER_BASE_URL + 'case/v1/case-list',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  },
  huntJSonData: {
    url: API_SERVER_BASE_URL + 'case/v1/activity-json-data',
    method: 'POST',
    auth: true,
    body: {},
  },
  topCases: {
    url: API_SERVER_BASE_URL + 'case/v1/top-cases',
    method: 'GET',
    auth: true,
  },
  worstOffenders: {
    url: API_SERVER_BASE_URL + 'case/v1/worst-offenders',
    method: 'GET',
    auth: true,
  },
  caseAggregation: {
    url: API_SERVER_BASE_URL + 'case/v1/case-aggregation',
    method: 'GET',
    auth: true,
  },
  incidentHistoricalGraph: {
    url: API_SERVER_BASE_URL + 'case/v1/incident-history-graph',
    method: 'GET',
    auth: true,
  },
  selectedEmail: {
    url: API_SERVER_BASE_URL + 'case/v1/email',
    method: 'GET',
    auth: true,
  },
  caseActivity: {
    url: API_SERVER_BASE_URL + 'case/v1/case-activity',
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    auth: true,
  },
  getCaseSummaryByType: {
    url: API_SERVER_BASE_URL + 'case/v1/case-category-summary',
    method: 'GET',
    auth: true,
  },
  getCaseSummaryByQuery: {
    url: API_SERVER_BASE_URL + 'case/v1/case-category-summary',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
    auth: true,
  },
  getCaseSourceAndDestinationByQuery: {
    url: API_SERVER_BASE_URL + 'case/v1/cases-source-destination',
    method: 'POST',
    auth: true,
    body: {},
  },
  getCaseHostUserNetworkByQuery: {
    url: API_SERVER_BASE_URL + 'case/v1/cases-host-user-network',
    method: 'POST',
    auth: true,
    body: {},
  },
  listUsers: {
    url: API_SERVER_BASE_URL + 'settings/v1/user',
    method: 'GET',
    auth: true,
  },
  addUpdateUser: {
    // path param ==> id for update
    url: API_SERVER_BASE_URL + 'settings/v1/user',
    method: 'POST',
    auth: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  deleteUser: {
    // path param ==> id
    url: API_SERVER_BASE_URL + 'settings/v1/user',
    method: 'DELETE',
    auth: true,
  },
  listEmailPref: {
    url: API_SERVER_BASE_URL + 'settings/v1/email-alert',
    method: 'GET',
    auth: true,
  },
  addUpdateEmailPref: {
    // path param ==> id for update
    url: API_SERVER_BASE_URL + 'settings/v1/email-alert',
    method: 'POST',
    auth: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  deleteEmailPref: {
    // path param ==> id
    url: API_SERVER_BASE_URL + 'settings/v1/email-alert',
    method: 'DELETE',
    auth: true,
  },

  retriveCaseWhitelist: {
    url: API_SERVER_BASE_URL + 'case/v1/case-whitelist',
    method: 'GET',
    auth: true,
  },
  addCaseWhitelist: {
    url: API_SERVER_BASE_URL + 'case/v1/case-whitelist',
    method: 'POST',
    auth: true,
  },
  getOkta: {
    // path param ==> id
    url: API_SERVER_BASE_URL + 'settings/v1/okta',
    method: 'GET',
    auth: true,
  },
  saveOkta: {
    url: API_SERVER_BASE_URL + 'settings/v1/okta',
    method: 'POST',
    auth: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  syslogAddConfig: {
    url: API_SERVER_BASE_URL + 'settings/v1/syslog',
    method: 'GET',
    auth: true,
  },
  syslogSaveConfig: {
    url: API_SERVER_BASE_URL + 'settings/v1/syslog',
    method: 'POST',
    auth: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  syslognotificationAddConfig: {
    url: API_SERVER_BASE_URL + 'settings/v1/syslog-notification',
    method: 'GET',
    auth: true,
  },
  syslognotificationSaveConfig: {
    url: API_SERVER_BASE_URL + 'settings/v1/syslog-notification',
    method: 'POST',
    auth: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  caseBookmark: {
    list: {
      url: API_SERVER_BASE_URL + 'case/v1/bookmark/list',
      method: 'POST',
      auth: true,
    },
    add: {
      url: API_SERVER_BASE_URL + 'case/v1/bookmark',
      method: 'POST',
      auth: true,
    },
    remove: {
      url: API_SERVER_BASE_URL + 'case/v1/bookmark',
      method: 'DELETE',
      auth: true,
    },
    isBookmarked: {
      url: API_SERVER_BASE_URL + 'case/v1/bookmark',
      auth: true,
    },
  },
  shodanConfig: {
    fetch: {
      url: API_SERVER_BASE_URL + 'settings/v1/shodan-config',
      method: 'GET',
      auth: true,
    },
    save: {
      url: API_SERVER_BASE_URL + 'settings/v1/shodan-config',
      method: 'POST',
      auth: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  },
  sophosConfig: {
    fetch: {
      url: API_SERVER_BASE_URL + 'settings/v1/sophos-config',
      method: 'GET',
      auth: true,
    },
    save: {
      url: API_SERVER_BASE_URL + 'settings/v1/sophos-config',
      method: 'POST',
      auth: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  },
};

export default KEY_MAPPINGS;
