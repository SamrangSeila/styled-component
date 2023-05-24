import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyDIbDxyfQ4yv08DhKq7PZBp9xJOHABbPdg",
  authDomain: "hospital-pharmacy-53d7b.firebaseapp.com",
  projectId: "hospital-pharmacy-53d7b",
  storageBucket: "hospital-pharmacy-53d7b.appspot.com",
  messagingSenderId: "874835525184",
  appId: "1:874835525184:web:d4c37f8fae17734bc929a5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp;