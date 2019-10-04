import React, { useContext, useEffect, useState } from 'react';

import { Form, Button } from 'react-bootstrap';

import { UserContext } from '../Contexts/UserContext';
import { RoomContext } from '../Contexts/RoomContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const MakeRoom = ({ history }, props) => {

    const { token, logUserIn } = useContext(UserContext);
    const { room, dispatchToRoom } = useContext(RoomContext);
    // const [accessToken, setAccessToken] = useState("");

    const [roomName, setRoomName] = useState("");
    const [roomPwd, setRoomPwd] = useState("");

    const goBack = (event) => {
        event.preventDefault()
        history.push("/")
    }

    useEffect(() => {
        if (window.location.href.includes("access_token")) {
            var access_token = window.location.href.split("=")[1].split("&")[0];
            logUserIn(access_token);
            window.history.pushState({ id: 'makeRoom' }, 'makeRoom', "/makeRoom");
        }
        else if (localStorage.getItem('spotify-auth') == null) {
            history.push('/')
        }
    })

    const makeRoom = (event) => {
        event.preventDefault();

        axios({
            method: "get",
            url: 'https://api.spotify.com/v1/me',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            const id = response.data.id;
            axios({
                method: "post",
                url: `https://api.spotify.com/v1/users/${id}/playlists`,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                data: {
                    "name": `_SHISH_${roomName}`,
                    "description": "somethin'",
                    "public": false
                }
            }).then(response => {
                const room = {
                    access_token: token,
                    playlistId: response.data.id,
                    roomId: roomName,
                    roomPwd: roomPwd
                }
                dispatchToRoom({ type: "CREATE", room })
                alert('Room created!');
                history.push('/view');
            }).catch(error => console.log(error));
        }).catch(error => console.log(error));
    }



    return (
        <Container>
            <Form onSubmit={makeRoom}>
                <Form.Group controlId="roomName">
                    <Form.Label style={{ color: 'white' }}><b>Room Name</b></Form.Label>
                    <Form.Control type="name" onChange={(event) => setRoomName(event.target.value)} placeholder="Enter room name" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label style={{ color: 'white' }}><b>Password</b></Form.Label>
                    <Form.Control type="password" onChange={(event) => setRoomPwd(event.target.value)} placeholder="Room password" />
                </Form.Group>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <Button size="lg" onClick={goBack} variant="dark">
                            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                        </Button>
                    </Col>
                    <Col xs="auto">
                        <Button size="lg" variant="dark" type="submit" className="ml-auto">
                            Create Room
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default MakeRoom;