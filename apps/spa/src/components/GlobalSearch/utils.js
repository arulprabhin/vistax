export const DEFAULT_QUERIES = {
  INCIDENTS: {
    query:
      ' (admin_state:IncidentReported OR admin_state:IncidentInvestigation ) AND  -category:Test AND positive:true AND -whitelisted:true AND -(category:Policy*)',
    anomaly: 0,
    score: 0,
  },
  HUNT_ACTIVITY: { query: '*', anomaly: 0, score: 0, severity: 0 },
  HUNT_GEO_ACTIVITY: {
    query: '(_exists_:source.geo.location OR _exists_:destination.geo.location)',
    anomaly: 0,
    score: 0,
  },
  HUNT_MITRE: { query: 'event_extra_attributes:MITRE*', anomaly: 0, score: 0 },
  POLICY: { query: '(category:Policy*)', anomaly: 30, score: 3 },
  CASES: { query: '*', anomaly: 30, score: 3 },
};

export const getQueryPath = (type) => {
  const paths = {
    INCIDENTS: '/incidents',
    HUNT_GEO_ACTIVITY: '/hunt-geo-activity',
    HUNT_MITRE: '/hunt-mitre',
    CASES: '/cases',
    POLICY: '/policy',
    HUNT_ACTIVITY: '/hunt-activity',
  };
  return paths[type] ?? paths['HUNT_ACTIVITY'];
};
