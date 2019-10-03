import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Components/Home';
import LoginPage from './LoginPage';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={LoginPage} path="/login" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
