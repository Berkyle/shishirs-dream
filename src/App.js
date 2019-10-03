import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';

import Routes from "./Components/Routes";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Jumbotron className="mb-0" style={{ borderRadius: 0, backgroundColor: "black" }}>
      <h1 id="title" style={{ color: "white" }} className="display-4 text-center">
        Shishir's Dream
      </h1>
    </Jumbotron>
    <Container fluid={true} className="vh-100 pt-5" id="shishirs_dream_container">
      <Routes />
    </Container>
  </Router>
);

export default App;
