import React, { useEffect, useContext, useState } from 'react';

import { RoomContext } from '../Contexts/RoomContext'

import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const roomName = "BIGPLAY"
const ViewRoom = ({ history }) => {

  const { room } = useContext(RoomContext);

  const [tracks, setTracks] = useState([])

  const goBack = (event) => {
    event.preventDefault()
    history.push("/makeRoom")
  }

  console.log(room);
  const id = room.playlistId;
  const token = room.access_token;

  axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }).then(response => {
    console.log(response);
    const trackList = response.data.items.map(item => ({
      title: item.track.name,
      artist: item.track.artists.reduce((str, artist) => {
        return str + artist.name + ', '
      }, ''),
      album: item.album.name
    }));

    setTracks(trackList);
  }).catch(error => console.log(error))

  // useEffect(() => {

  // }, [room])

  const handleSubmit = (event) => {
    alert("HI")
  }
  return (
    <div>
      <div id="title">
        <h1 style={{ float: "center", position: "relative" }}>
          <Button style={{ float: "left", position: "relative", top: "5px" }} onClick={goBack} variant="secondary">
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </Button>
          {roomName}
        </h1>
      </div>
      <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
        <MDBCol md="6">
          <MDBFormInline className="form-inline my-4" onSubmit={handleSubmit}>
            <Row>
              <MDBIcon icon="search" />
            </Row>
            <Col>
              <input className="form-control form-control-sm ml-3 w-100" type="text" placeholder="Search" aria-label="Search" />
            </Col>
          </MDBFormInline>
        </MDBCol>
      </div>
      <Table responsive striped borderless hover variant="dark">
        <thead>
          <tr>
            <th>&#128247;</th>
            <th>Title </th>
            <th>Artist</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map(track => (
            <tr>
              <td><Image src="public/logo192.png" thumbnail /></td>
              <td>{track.title}</td>
              <td>{track.artist}</td>
              <td>{track.album}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    </div>
  )
}

export default ViewRoom;