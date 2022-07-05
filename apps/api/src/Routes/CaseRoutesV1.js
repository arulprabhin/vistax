import express from 'express';
import Controller from '../Controllers/CaseControllerV1';

const router = express.Router();

router.post('/geo-location-data', Controller.getGeoLocationData);
router.get('/table-fields', Controller.getTableFields);
router.post('/activity-table-data', Controller.getHuntTableData);
router.post(['/activity-graph-data', '/activity-graph-data/:gte/:lte'], Controller.getHuntGraphData);
router.post('/activity-json-data', Controller.getHuntData);
router.post('/case-activity', Controller.getCaseActivity);
router.get(['/incident-history-graph/:gte/:lte'], Controller.getIncidentHistoryGraph);
router.get('/table-field-config/:type', Controller.getTableFieldConfig);
router.get(['/top-cases/:type/:topBy/:limit', '/top-cases/:type/:topBy/:gte/:lte/:limit'], Controller.getTopCases);
router.get(
  ['/worst-offenders/:type/:topBy/:gte/:lte/:limit', '/worst-offenders/:type/:topBy/:limit'],
  Controller.getWorstOffenders
);
router.get('/case-aggregation/:type/:aggBy/:gte/:lte', Controller.getCaseAggregation);
router.post('/case-category-summary/:aggBy/:site/:gte/:lte/:certainty/:score', Controller.getCaseAndCategorySummary);
router.get(
  '/case-category-summary/:type/:aggBy/:site/:gte/:lte/:certainty/:score',
  Controller.getCaseAndCategorySummary
);
router.get('/email', Controller.retrieveEmails);
router.post('/bookmark/list', Controller.listCaseBookmarks);
router.post('/bookmark', Controller.addCaseBookmark);
router.get('/bookmark/:uuid', Controller.isBookmarked);
router.delete('/bookmark/:uuid', Controller.deleteFavoriteCase);
router.post('/case-list/:site/:gte/:lte/:certainty/:score', Controller.getCaseTableData);
router.post('/cases-source-destination', Controller.getCaseSourceAndDestination);
router.post('/cases-host-user-network/:type', Controller.getCaseHostUserNetwork);
router.get('/case-whitelist/:query', Controller.getCaseWhitelist);
router.post('/case-whitelist', Controller.addCaseWhitelist);
router.post('/update-state', Controller.updateState);

module.exports = router;
