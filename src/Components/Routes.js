import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from './Home';
import LoginPage from '../LoginPage';
import NotFound from './NotFound';
import ViewRoom from './ViewRoom';
import JoinRoom from './Room';

const Routes = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={LoginPage} path="/login" exact />
    <Route component={ViewRoom} path="/view" exact />
    <Route component={JoinRoom} path="/joinroom" exact />
    <Route component={NotFound} />
  </Switch>
)

export default Routes;