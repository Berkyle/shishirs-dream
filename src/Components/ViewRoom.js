import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';

class ViewRoom extends React.Component {
  render() {
    return(
      <Container>
        <Row className="justify-content-center">
          <h1>
            View Playlist
          </h1>
        </Row>
      </Container>
    )
  }
}

export default ViewRoom;