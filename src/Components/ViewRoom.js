import React from 'react';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';

class ViewRoom extends React.Component {
  render() {
    return(
      <div>
        <Row className="heading-color">
          <Col>
            <h1>
              View Playlist
            </h1>
          </Col>
        </Row>
        
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Title </th>
              <th>Artist</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ViewRoom;