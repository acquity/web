import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from 'routes/main';
import Navbar from 'components/navbar';

const AuthenticatedApp = () => {
  return (
    <Router>
      <div className="app">
        <Navbar isAuthenticated />
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AuthenticatedApp;
