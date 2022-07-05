const GO_API_BASE_URL = 'http://10.3.18.237:6021/api/';
const PY_API_BASE_URL = '';

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const API_CONFIG = {
  case: {
    test: {
      dbUrlKey: 'admin_state_path', // either this or the next two
      baseUrl: GO_API_BASE_URL,
      url: 'v1/case/state',
      method: 'POST', // may be omitted if method is get
      headers: {}, // optional
      body: {}, // optional
      pathParams: [], // optional
      responseType: 'json', // optional
    },
    state: {
      dbUrlKey: 'admin_state_path',
      method: 'POST',
    },
  },
};

module.exports = {
  API_CONFIG: API_CONFIG,
  DEFAULT_HEADERS: DEFAULT_HEADERS,
};
