import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB5tdTP8AtQkfQNc7VonsfCvQJFh4XRMbw",
    authDomain: "numeric-cinema-277601.firebaseapp.com",
    databaseURL: "https://numeric-cinema-277601.firebaseio.com",
    projectId: "numeric-cinema-277601",
    storageBucket: "numeric-cinema-277601.appspot.com",
    messagingSenderId: "557409555151",
    appId: "1:557409555151:web:6d47d0f563f39109e89dba",
    measurementId: "G-028VN1EHLX"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebase.auth();
  export const firestore = firebase.firestore();

  export default firebase;
