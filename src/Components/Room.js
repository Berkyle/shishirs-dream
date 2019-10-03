import React from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const JoinRoom = () => {

  return (
    <Container>
      <Form>
        <Form.Group controlId="roomId">
          <Form.Label>Room ID</Form.Label>
          <Form.Control type="roomId" placeholder="Enter RoomID" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default JoinRoom;