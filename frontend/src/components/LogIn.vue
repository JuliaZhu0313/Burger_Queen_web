<template>
    <div class="login">
        <div class="img">
            <img id = "login_img" src="@/assets/login_img.png" alt="Burger Queen">
        </div>
        <div class="text">
            <img id = "logo" src="@/assets/logo.png" alt="Burger Queen">
            <div id = "Welcome"><h1><strong>WELCOME!</strong></h1></div>
            <div id = "Description"><h3>Log in with your Google account or Email</h3></div>
            <div id = "firebaseui-auth-container"></div>
            <a id="AboutBQ" v-on:click="AboutBQ">About Burger Queen</a>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <a id="Privacy" v-on:click="Privacy">Privacy Policy</a><br>
        </div>
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
              signInSuccessUrl: '/AccountSettings',
              signInOptions: [
                  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                  firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ],
              privacyPolicyUrl: '/Privacy'
          }
  
          ui.start("#firebaseui-auth-container", uiConfig)
      },

      methods: {
        Privacy: function() {
            this.$router.push("/Privacy")
        },
        AboutBQ: function() {
            this.$router.push("/AboutUs")
        }
    }
  }
  </script>
  
<style scoped>
#firebaseui-auth-container{
    margin-top: 50px;
    margin-bottom: 50px;
}

.login {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color:white;
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid rgb(197, 197, 197);
    box-shadow: -5px 12px 15px rgba(0, 0, 0, 0.2), 5px -5px 15px rgba(0, 0, 0, 0.19);

}
.img{
    width: 48%;
    float: left;
}
#login_img {
    margin: 1% 1% 0% 1%;
    width: 100%;
    height: 500%;
}
.text{
    float: right;
    width: 48%;
    text-align: center;
}

#firebaseui-auth-container {
    text-align: left;
}

#logo {
    width: 200px;
    height: 140px;
}

.text a:visited {
  color: blue;
}

/* mouse over link */
.text a:hover {
  color: rgb(255,94,0);
}

/* selected link */
.text a:active {
  color: rgba(238, 119, 1, 0.5);
}
</style>