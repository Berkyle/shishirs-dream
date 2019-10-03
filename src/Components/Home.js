import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Row className="justify-content-center py-4">
          <Col xs={10}>
            <div>
              <a href="https://accounts.spotify.com/authorize?client_id=632c2f03a03546c69393513c76e4735a&scope=playlist-read-collaborative&response_type=token&redirect_uri=http://localhost:3000/makeRoom">
                <Button block size="lg" variant="success">
                  Make room
                </Button>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center py-4">
          <Col xs={10}>
            <Link to="/joinroom">
              <Button block size="lg" variant="info">
                Join room
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default Home;
