import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';

class ViewRoom extends React.Component {
  render() {
    return(
      <div>
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
}

export default ViewRoom;