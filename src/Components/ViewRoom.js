import React, { useEffect, useContext, useState } from 'react';

import {RoomContext} from '../Contexts/RoomContext'

import axios from 'axios';

import Player from "./Player";
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';



const ViewRoom = ({history}) => {

  const { room } = useContext(RoomContext);

  const [tracks, setTracks] = useState([])

  const goBack = (event) => {
    event.preventDefault()
    history.push("/makeRoom")
  }

  useEffect(() => {
    const id = room.playlistId;
    const token = room.access_token;
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/playists/${id}/tracks`,
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
    }).then(response => {
      const trackList = response.data.items.map(item => ({
        title: item.track.name,
        artist: item.track.artists.reduce((str, artist) => {
          return str + artist.name + ', '
        }, ''),
        album: item.album.name
      }));

      setTracks(trackList);
    }).catch(error => console.log(error))
  }, [room])

  return(
    <div>
      <Button onClick={goBack} variant="secondary">
      <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </Button>
      <h1>
        View Playlist
      </h1>
      
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