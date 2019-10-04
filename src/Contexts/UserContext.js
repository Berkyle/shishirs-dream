import React, { useState, createContext } from 'react';

// import { auth } from '../Firebase/firebase';
// import UserReducer from '../Reducers/User.Reducer';

export const UserContext = createContext();

export const UserProvider = props => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');

//   auth.onAuthStateChanged((user) => {
//     console.log('yoooo!')
//     console.log(user);
//     if (user) dispatchToEvents({ type: 'LOGIN', user })
//     else dispatchToEvents({ type: 'LOGIN' })
//   });

  return (
    <UserContext.Provider value={{loggedIn, setLoggedIn, token, setToken }}>
      {props.children}
    </UserContext.Provider>
  )
};