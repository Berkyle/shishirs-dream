import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from './Home';
import NotFound from './NotFound';
import ViewRoom from './ViewRoom';
import JoinRoom from './Room';
import MakeRoom from './MakeRoom';

const Routes = () => (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={ViewRoom} path="/view" exact />
    <Route component={JoinRoom} path="/joinroom" exact />
    <Route component={MakeRoom} path="/makeRoom" exact/>
    <Route component={NotFound} />
  </Switch>
)

export default Routes;