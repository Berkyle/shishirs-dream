import React, { Fragment } from 'react'

import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

const Home = () => (
  <Fragment>
    <div>
      <Row className="justify-content-center py-4">
        <Col xs={10}>
          <Link to="/joinroom">
            <Button block size="lg" variant="success">Make room</Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center py-4">
        <Col xs={10}>
          <Link to="/login">
            <Button block size="lg" variant="info">Join room</Button>
          </Link>
        </Col>
      </Row>
    </div>
  </Fragment>
)

export default Home;