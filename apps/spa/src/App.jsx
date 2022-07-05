import React, { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from '@mui/material/styles';
import ReactLoading from 'react-loading';
import Search from './pages/Search';
import TopCases from './pages/TopCases';
import Layout from './components/Layout';
import CaseIncidentPolicyPage from './pages/CaseIncidentPolicyPage';
import { history } from './store';
import { darkTheme, lightTheme } from './themes';
import CaseDataTable from './pages/CaseTable';
import PolicyDataTable from './pages/PolicyTable';
import CaseHistory from './components/CaseHistory';
import EmailSettings from './pages/EmailSettings';
import Operator from './pages/Operator';
import Syslog from './pages/Syslog';
import Okta from './components/Okta';
import SophosConfig from './pages/SophosConfig';
import ShodanConfig from './pages/ShodanConfig';


const DashboardRoute = lazy(() => import('@logrhythm/dashboard/route'));
const HuntRoute = lazy(() => import('@logrhythm/hunt/route'));
const Login = lazy(() => import('@logrhythm/auth/login'));
const PrivateRoute = lazy(() => import('@logrhythm/shared/PrivateRoute'));
const LoggedOutRoute = lazy(() => import('@logrhythm/shared/LoggedOutRoute'));

const IncidentPage = () => <CaseIncidentPolicyPage tableType={'incident'} />;
const PolicyPage = () => <CaseIncidentPolicyPage tableType={'policy'} />;
const CasePage = () => <CaseIncidentPolicyPage tableType={'case'} />;

function App() {
  const { theme } = useSelector((state) => state.user);
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Suspense fallback={<ReactLoading type={'bubbles'} color="crimson" />}>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <LoggedOutRoute path="/login" component={Login} />
            <Layout>
              <Switch>
                <PrivateRoute path="/dashboard" component={DashboardRoute} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path="/system-cases" component={CaseDataTable} />
                <PrivateRoute path="/network-compliance" component={PolicyDataTable} />
                <PrivateRoute path="/incidents" component={IncidentPage} />
                <PrivateRoute path="/policy" component={PolicyPage} />
                <PrivateRoute path="/cases" component={CasePage} />
                <PrivateRoute path="/top-cases" component={TopCases} />
                <PrivateRoute path="/hunt-activity" component={HuntRoute} />
                <PrivateRoute path="/hunt-mitre" component={HuntRoute} />
                <PrivateRoute path="/hunt-geo-activity" component={HuntRoute} />
                <PrivateRoute path="/case-history" component={CaseHistory} />
                <PrivateRoute path="/settings-siem-syslog-config" component={Syslog} />
                <PrivateRoute path="/settings-operational-email-notifications" component={EmailSettings} />
                <PrivateRoute path="/settings-operational-operators" component={Operator} />
                <PrivateRoute path="/settings-siem-okta" component={Okta} />
                <PrivateRoute path="/settings-endpoint-shodan" component={ShodanConfig} />
                <PrivateRoute path="/settings-endpoint-sophos" component={SophosConfig} />
              </Switch>
            </Layout>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </ConnectedRouter>
  );
}

export default App;
