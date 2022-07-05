import express from 'express';
import Controller from '../Controllers/DashboardControllerV1';

const router = express.Router();

router.get('/geo-map-data', Controller.getGeoMapData);
router.get('/activity-chart-data', Controller.getActivityChartData);
router.get('/anomaly-chart-data', Controller.getAnomalyChartData);
router.get('/case-type-count/:gte/:lte', Controller.getIncidentAndPolicyViolationPercentage);
router.get('/data-processed-by-node', Controller.getDataProcessedByNode);

router.get('/notable-item/:type/:site/:gte/:lte/:limit', Controller.getNotableItemDetails);

router.get('/summary-by-mitre-tactics/:type', Controller.getMitreTacticsSummary);

module.exports = router;
