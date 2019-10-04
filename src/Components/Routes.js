import React, { useContext, Fragment } from "react";

import { UserContext } from '../Contexts/UserContext';

import { Switch, Route } from "react-router-dom";

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import Home from './Home';
import NotFound from './NotFound';
import ViewRoom from './ViewRoom';
import JoinRoom from './Room';
import MakeRoom from './MakeRoom';
import Lyrics from './Lyrics';

const Routes = () => {

  const { loggedIn, setLoggedIn, token, setToken } = useContext(UserContext);
  const url = 'https://accounts.spotify.com/en/logout'  

  const logOut = (event) => {
    setLoggedIn(false)
    setToken('')
    window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')
  }

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        {loggedIn && <Navbar.Brand>Some User Name</Navbar.Brand>}
        <Form inline>
          {loggedIn && <Button variant="outline-info" onClick={logOut}>Log out</Button>}
        </Form>
      </Navbar>
      <Container fluid={true} className="vh-100 pt-5" id="shishirs_dream_container">
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={ViewRoom} path="/view" exact />
          <Route component={Lyrics} path="/view/lyrics" exact />
          <Route component={JoinRoom} path="/joinroom" exact />
          <Route component={MakeRoom} path="/makeRoom" exact />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Fragment>
  )
}

export default Routes;