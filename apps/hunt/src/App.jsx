import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HuntActivity from './pages/Activity';
import HuntGeoActivity from './pages/GeoActivity';
import HuntMitre from './pages/Mitre';

export default function App() {
  return (
    <Switch>
      <Route exact path="/hunt-activity" render={() => <HuntActivity />} />
      <Route exact path="/hunt-geo-activity" render={() => <HuntGeoActivity />} />
      <Route exact path="/hunt-mitre" render={() => <HuntMitre />} />
    </Switch>
  );
}
