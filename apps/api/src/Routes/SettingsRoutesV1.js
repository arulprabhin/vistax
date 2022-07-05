import express from 'express';
import Controller from '../Controllers/SettingsControllerV1';
import apiUtil, { validateRequestParameters } from '../Utils';
const router = express.Router();

router.get('/user', Controller.listUsers);
router.post(
  ['/user', '/user/:id'],
  validateRequestParameters(Controller.saveUser.validationRules),
  Controller.saveUser.action
);
router.delete('/user/:id', Controller.deleteUser);

router.post('/user-certificate', Controller.generateCertificate);
router.get('/user-certificate', Controller.downloadCertificate);

router.get('/email-alert', Controller.listEmailAlert);
router.post(['/email-alert', '/email-alert/:id'], Controller.saveEmailAlert);
router.delete('/email-alert/:id', Controller.deleteEmailAlert);

router.get('/okta', Controller.getOktaConfig);
router.post('/okta', Controller.saveOktaConfig);

router.get('/Syslog', Controller.getSyslogConfig);
router.post('/Syslog', Controller.saveSyslogConfig);

router.get('/Syslog-notification', Controller.getSyslogNotificationConfig);
router.post('/Syslog-notification', Controller.saveSyslogNotificationConfig);

router.get('/shodan-config', Controller.getShodanConfig);
router.post('/shodan-config', Controller.saveShodanConfig);

router.get('/sophos-config', Controller.getSophosConfig);
router.post('/sophos-config', Controller.saveSophosConfig);

module.exports = router;
