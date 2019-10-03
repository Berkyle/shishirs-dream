import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

const Home = () => {

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Button variant="success">Make room (not working)</Button>
        </Col>
        <Col xs={6}>
          <Button variant="info">Join room  (not working)</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;