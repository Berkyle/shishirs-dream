import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase with R51 Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyAR-UPyzx-McojsDHgcBWcIwC_GBpTB7M0",
  authDomain: "shishirs-dream-51381.firebaseapp.com",
  databaseURL: "https://shishirs-dream-51381.firebaseio.com",
  projectId: "shishirs-dream-51381",
  storageBucket: "",
  messagingSenderId: "139439801958",
  appId: "1:139439801958:web:c5dbac957ad5d8aafc0fa7",
  measurementId: "G-WW1KE2TSY3"
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