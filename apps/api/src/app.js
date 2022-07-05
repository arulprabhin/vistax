import appController from './Controllers/AppController';
import commonRouteV1 from './Routes/CommonRoutesV1';
import dashboardRouteV1 from './Routes/DashboardRoutesV1';
import caseRouterV1 from './Routes/CaseRoutesV1';
import settingsRoutesV1 from './Routes/SettingsRoutesV1';

const app = appController.initServer([
  { path: '/api/common/v1', router: commonRouteV1, validate: true },
  { path: '/api/dashboard/v1', router: dashboardRouteV1, validate: true },
  { path: '/api/case/v1', router: caseRouterV1, validate: true },
  { path: '/api/settings/v1', router: settingsRoutesV1, validate: true },
]);
