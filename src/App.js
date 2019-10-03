import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Components/Home';
import LoginPage from './LoginPage';
import NotFound from './Components/NotFound';
import ViewRoom from './Components/ViewRoom';
import JoinRoom from './Components/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={ViewRoom} path="/view" exact />
        <Route component={JoinRoom} path="/joinroom" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
