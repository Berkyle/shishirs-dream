import React from 'react';
import Row from 'react-bootstrap/Row';
// eslint-disable-next-line
import Col from 'react-bootstrap/Col';
import '../App.css';

class ViewRoom extends React.Component {
  render() {
    return(
      <div>
        <Row className="heading-color">
          <h1>
            View Playlist
          </h1>
        </Row>
        
        <div className="body-color">
          <Row>
            <h2> 
              Hi
            </h2>
          </Row>
        </div>
      </div>
    )
  }
}

export default ViewRoom;