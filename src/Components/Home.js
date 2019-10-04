import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

export const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "58216d6dbbb34c9c978c4e37204558ee";
const redirectUri = "http://localhost:3000/makeRoom";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];
const url = 'https://accounts.spotify.com/en/logout'                                                                                                                                                                                                                                                                               

const Home = () => {

  const logOut = (event) => {
    window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')
  }

  return (
    <Fragment>
      <div>
        <h1>
          Home
        </h1>
        <Row className="justify-content-center py-4">
          <Col xs={10}>
            <div>
              <a href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token`}>
                <Button block size="lg" variant="success">
                  Make room
                </Button>
              </a>
              <Button block size="lg" variant="success" onClick={logOut}>
                  Logout
                </Button>
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
