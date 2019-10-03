import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

const Home = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="success"></Button>
        </Col>
        <Col>
          <Button variant="info"></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;