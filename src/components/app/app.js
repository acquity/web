import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from 'routes/main';
import Login from 'routes/login';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
