import * as $ from "jquery";
import Player from "./Player";
import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';



const ViewRoom = ({history}) => {

  const goBack = (event) => {
    event.preventDefault()
    history.push("/makeRoom")
  }

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
          <tr>
            <td><Image src="public/logo192.png" thumbnail /></td>
            <td>Mark</td>
            <td>Otto</td>
            <td>1</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default ViewRoom;