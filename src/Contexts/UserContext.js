import React, { useState, createContext, useEffect } from 'react';

// import { auth } from '../Firebase/firebase';
// import UserReducer from '../Reducers/User.Reducer';

export const UserContext = createContext();

export const UserProvider = props => {

  const [token, setToken] = useState(null);

  const spotifyAuth = 'spotify-auth';

  useEffect(() => {
    const tokenCheck = localStorage.getItem(spotifyAuth)
    if (tokenCheck != null) {
      setToken(tokenCheck);
    }
  }, [])

  const logUserIn = (token) => {
    setToken(token);
    localStorage.setItem(spotifyAuth, token);
  }

  const logUserOut = () => {
    setToken(null);
    localStorage.removeItem(spotifyAuth);
  }

  return (
    <UserContext.Provider value={{ token, logUserIn, logUserOut }}>
      {props.children}
    </UserContext.Provider>
  )
};