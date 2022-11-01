import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyAAcGizBmVy0pTelPh5c9-aw-DNUF165XE",
    authDomain: "bt3103-10098.firebaseapp.com",
    projectId: "bt3103-10098",
    storageBucket: "bt3103-10098.appspot.com",
    messagingSenderId: "1055197170592",
    appId: "1:1055197170592:web:cae220ce87a86d7bd6f2c5"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;