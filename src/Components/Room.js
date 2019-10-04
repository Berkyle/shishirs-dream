import React, { useState, useContext } from 'react';

import { RoomContext } from '../Contexts/RoomContext';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from '../Firebase/Firebase';
import store from '../Firebase/Firebase';

const JoinRoom = ({history}) => {

  const { dispatchToRoom } = useContext(RoomContext)

  const [roomId, setRoomId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    var rooms = store.collection('rooms');

    var query = rooms.where("roomId", "==", roomId);
    console.log(query);

    store.collection("rooms").where("roomId", "==", roomId)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data().roomPwd);
            if (doc.data().roomPwd === password) {
              const room = {
                access_token: doc.data().access_token,
                playlistId: doc.data().playlistId,
                roomId: doc.data().roomId,
                roomPwd: doc.data().roomPwd
              }
              dispatchToRoom({ type: 'JOIN', room })
              history.push('/view');
            } else {
              alert('Authentication failed');
            }
        });
    })


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