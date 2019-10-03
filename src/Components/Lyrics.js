import React from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

const Lyrics = ({history}) => {

  const goBack = (event) => {
    event.preventDefault()
    history.push("/view")
  }

  const ACCESS_TOKEN = ''
  const id = ''
  const config = {
    url: '/search',
    method: 'get',
    baseURL: 'https://api.genius.com',
    data: {'q': "Hoes Mad" + ' ' + "Famous Dex"},
    headers: {'Authorization': 'Bearer ' + access_token}
  }

  const requestLyrics = (event) => {
    response = axios(config)
  }

  return (
    <Container>
      <Button onClick={goBack} variant="secondary">
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
       </Button>


    </Container>
  )
}

export default Lyrics;