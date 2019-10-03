import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const axios = require('axios');

const Lyrics = ({history}) => {

  const API_KEY = '4728f41d8867111a2af67f30b7134aa4'
  const [artist, setArtist] = useState('Famous Dex')
  const [trackName, setTrackName] = useState('Hoes Mad')
  const [trackId, setTrackId] = useState('')
  const [lyrics, setLyrics] = useState('')

  // useEffect(() => {
  //   axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  //   axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&q_track=${trackName}&apikey=${API_KEY}`)
  //     .then(res => getLyrics(res.data))
  //     .catch(err => console.log(err));
  // });

  const goBack = (event) => {
    event.preventDefault()
    history.push("/view")
  }

  // const getLyrics = (data) => {
  //   setTrackId(data.message.body.track_list[0].track['track_id'])
  //   axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=${API_KEY}`)
  //     .then(res => displayLyrics(res.data))
  //     .catch(err => console.log(err));
  // }

  // const displayLyrics = (data) => {
  //   setLyrics(data.message.body.lyrics.lyrics_body)
  //   console.log(lyrics)
  // }

  return (
    <Container>
      <Button onClick={goBack} variant="secondary">
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
       </Button>
      <pre>HOES MAD\r\nHOES MAD</pre>

    </Container>
  )
}

export default Lyrics;