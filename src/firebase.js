// import firebase from 'firebase/app';
import  'firebase/database';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAFwXHzvvQgJooL2cTzJT3lMogztYe1JpM",
    authDomain: "timerapp-66d2a.firebaseapp.com",
    databaseURL: "https://timerapp-66d2a-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "timerapp-66d2a",
    storageBucket: "timerapp-66d2a.appspot.com",
    messagingSenderId: "855639987901",
    appId: "1:855639987901:web:7e1f1f7a5e2b5a479109d4",
    measurementId: "G-GZDK4TP4DF"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  export { db };
  
