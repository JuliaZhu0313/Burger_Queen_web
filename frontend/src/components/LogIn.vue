<template>
    <div class="topnav" style="text-align:center;">
      <img src="@/assets/logo.png" alt="Burger Queen" width="120" height="80" id="logo">
      <div id = "Welcome"><h1><strong>WELCOME!</strong></h1></div>
      <div id = "Description"><h3>Log in with your Google account or Email</h3></div>
      <div id = "firebaseui-auth-container"></div>
    </div>
  </template>
  
  <script>
  import firebase from '@/uifire.js'
  import 'firebase/compat/auth';
  import * as firebaseui from 'firebaseui'
  import 'firebaseui/dist/firebaseui.css'
  
  export default {
      name:"LogIn",
  
      mounted() {
          //Calling the ui instance
          var ui = firebaseui.auth.AuthUI.getInstance();
          if (!ui){
              //We need to create the instance only one time
              // Initialize the FirebaseUI Widget using Firebase.
              ui = new firebaseui.auth.AuthUI(firebase.auth());
          }
  
          var uiConfig = {
              signInSuccessUrl: '/menu',
              signInOptions: [
                  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                  firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ]
          }
  
          ui.start("#firebaseui-auth-container", uiConfig)
      }
  }
  </script>
  
  <style scoped>
  #firebaseui-auth-container{
      margin-top: 50px;
      margin-bottom: 50px;
  }
  
  .topnav {
      overflow: auto;
      background-color:white;
      width: 500px;
      margin: auto;
      border: 1.5px solid rgb(46, 41, 41);
      border-radius: 50px;
      box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);
  }
  
  </style>