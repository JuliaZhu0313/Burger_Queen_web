import { initializeApp } from 'firbase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA3YoZV6qofdpVd5c8NMDZtfQgymN7Hpts",
    authDomain: "democpp-80895.firebaseapp.com",
    projectId: "democpp-80895",
    storageBucket: "democpp-80895.appspot.com",
    messagingSenderId: "1007226650942",
    appId: "1:1007226650942:web:4cffa7287f88471d2bec6f"
  };
 
// Initialize Firebase
//const firebase = require('firebase')
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;