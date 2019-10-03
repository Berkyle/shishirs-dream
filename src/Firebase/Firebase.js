import * as firebase from "firebase/app";
import 'firebase/firestore';
// import 'firebase/auth';

// Initialize Firebase with R51 Firebase configuration
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});

// DATABASE
const store = firebase.firestore();
const roomsCollection = store.collection('rooms');

// USERS & AUTHENTICATION
const auth = firebase.auth();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { 
  store,
  roomsCollection,
  auth,
  facebookProvider
};