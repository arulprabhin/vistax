import express from 'express';
import Controller from '../Controllers/CommonControllerV1';

const router = express.Router();

router.get('/mitre-config', Controller.getMitreConfig);
router.get('/sites', Controller.getSiteList);
router.post('/saved-query', Controller.saveQuery);
router.get('/saved-query', Controller.retrieveQueries);
router.delete('/saved-query/:queryId', Controller.deleteQuery);
router.post('/query-history', Controller.saveQueryHistory);
router.get(['/query-history', '/query-history/:limit'], Controller.retrieveQueryHistory);
router.delete(['/query-history', '/query-history/:queryId'], Controller.deleteQueryHistory);
router.post('/query-history/search', Controller.searchQueryHistory);
router.post('/query-history/search/:limit', Controller.searchQueryHistory);

module.exports = router;
