import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const JoinRoom = ({history}) => {

  const [roomId, setRoomId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setRoomId('')
    setPassword('')
    history.push("/view")
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="roomId">
          <Form.Label>Room ID</Form.Label>
          <Form.Control type="roomId"  placeholder="Enter RoomID" value={roomId} onChange={(event) => {
            setRoomId(event.target.value)
          }}/>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => {
            setPassword(event.target.value)
          }}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default JoinRoom;