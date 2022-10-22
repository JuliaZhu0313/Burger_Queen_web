import { initializeApp } from 'firbase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCVUzJNCZuJnYWi7FXZcEbcepBUV2x_KzI",
  authDomain: "group5bt3103-5e14b.firebaseapp.com",
  projectId: "group5bt3103-5e14b",
  storageBucket: "group5bt3103-5e14b.appspot.com",
  messagingSenderId: "895175588433",
  appId: "1:895175588433:web:302f431d79f222b9dc1670"
};
 
// Initialize Firebase
//const firebase = require('firebase')
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;