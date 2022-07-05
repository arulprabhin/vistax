import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VistaDashboardGrid from './pages/VistaDashboardGrid';

function App() {
  return (
    <Switch>
      <Route exact path="/dashboard" render={() => <VistaDashboardGrid />} />
    </Switch>
  );
}

export default App;
