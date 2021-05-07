import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyACGHMPBIbop9eFCpGLCBvfoqva0mgnXxo",
    authDomain: "e-commerce-66e56.firebaseapp.com",
    projectId: "e-commerce-66e56",
    storageBucket: "e-commerce-66e56.appspot.com",
    messagingSenderId: "1049882008736",
    appId: "1:1049882008736:web:e78a3ba3aba5d7941abdc5",
    measurementId: "G-0WR30PWBZ1"
  };

const db=firebaseApp.firestore();
const auth= firebase.auth();
const storage =firebase.storage();

