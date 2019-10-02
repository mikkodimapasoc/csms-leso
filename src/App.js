import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation/index';
import AdminHomepage from './pages/Admin/AdminHomepage/AdminHomepage';
import LoginPage from './pages/Login/LoginPage';
import { withAuthentication } from './components/Session';
import * as ROUTES from './constants/routes';

// fix routes here. Go to routes component then add them here. No need for lazy routing. Fuck SE;
const App = () => {
  return (
    <Router>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LoginPage} />
      <Route exact path={ROUTES.ADMIN_HOME} component={AdminHomepage} />
    </Router>
  );
};

export default withAuthentication(App);
