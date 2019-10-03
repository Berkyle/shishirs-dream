import React, {useContext, useEffect, useState} from 'react';

import {Form, Button} from 'react-bootstrap';

import { UserContext } from '../Contexts/UserContext';
import { RoomContext } from '../Contexts/RoomContext';

const MakeRoom = props => {

    const { user, setUser } = useContext(UserContext);
    const { room, dispatchToRoom } = useContext(RoomContext);
    const [accessToken, setAccessToken] = useState("");

    const [roomName, setRoomName] = useState("");
    const [roomPwd, setRoomPwd] = useState("");

    useEffect(() => {
        if(accessToken !== "" && window.location.href.includes("access_token")) {
            var access_token = window.location.href.split("=")[1].split("&")[0];
            setAccessToken(access_token);
        }
    })

    const makeRoom = (event) => {
        event.preventDefault();
        const room = {
            access_token: accessToken,
            roomId: roomName,
            roomPwd: roomPwd
        }
        dispatchToRoom({type: "CREATE", room })
    }

    return (
        <Form onSubmit={makeRoom}>
            <Form.Group controlId="roomName">
                <Form.Label>Room Name</Form.Label>
                <Form.Control type="name" onChange={(event) => setRoomName(event.target.value)} placeholder="Enter room name"/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(event) => setRoomPwd(event.target.value)} placeholder="Room password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Create Room
            </Button>
        </Form>
    )
}

export default MakeRoom;