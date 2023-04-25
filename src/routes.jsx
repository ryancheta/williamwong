import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sunovion from './components/Work/Sunovion';
import App from './App';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/sunovion" component={Sunovion} />
      </Switch>
    </Router>
  );
};

export default Routes;
