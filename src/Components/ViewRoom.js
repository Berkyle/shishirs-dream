import React, { useEffect, useContext, useState } from 'react';

import { RoomContext } from '../Contexts/RoomContext'

import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const roomName = "View Playlist"
const ViewRoom = ({ history }) => {

  const { room } = useContext(RoomContext);

  const [tracks, setTracks] = useState([])
  const [url, setUrl] = useState('')
  const [trackID, setTrackID] = useState('')

  const goBack = (event) => {
    event.preventDefault()
    history.push("/")
  }

  useEffect(() => {
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
        artist: item.track.artists.reduce((str, artist) => str + artist.name + ', ', ''),
        album: item.track.album.name,
        id: item.track.id
      }));

      console.log(trackList);

      setTracks(trackList);
    }).catch(error => console.log(error))
  }, [room])

  const handleSubmit = (event) => {
    setTrackID("spotify:track:" + url.split('?')[0].split("/")[4]);
    alert("HI")
  }

  const getLyrics = (event) => {
    setTrackID("spotify:track:" + url.split('?')[0].split("/")[4]);
    history.push('/view/lyrics')
  }

  return (
    <Container>
      <div id="title">
        <h1 style={{ float: "center", position: "relative" }}>
          {roomName}
        </h1>
      </div>
      <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
        <MDBCol md="6">
          <MDBFormInline className="form-inline my-4" onSubmit={handleSubmit}>
            <Row>
              <Button size="sm" variant="dark"><MDBIcon icon="plus" onClick={handleSubmit} /></Button>
            </Row>
            <Col>
              <input className="form-control form-control-sm ml-3 w-100" type="text" placeholder="Add Spotify URL" aria-label="Search" onChange={event => setUrl(event.target.value)} value={url} />
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
            <tr key={track.id}>
              <td><Image src="public/logo192.png" thumbnail /></td>
              <td>{track.title}</td>
              <td>{track.artist}</td>
              <td>{track.album}</td>
            </tr>
          ))}

        </tbody>
      </Table>
      <Row className="justify-content-between">
        <Col xs="auto">
          <Button size="lg" className="mx-auto" onClick={goBack} variant="dark">
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </Button>
        </Col>
        <Col xs="auto">
          <Button size="lg" variant="dark" type="submit" onClick={getLyrics}>
            Get Lyrics
            </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ViewRoom;