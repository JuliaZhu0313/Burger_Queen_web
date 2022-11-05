<template>
    <div class="topnav" style="text-align:center;" v-if="user">
        <div class="imge-holder">
            <img src="@/assets/logo.png" alt="Burger Queen" width="200" height="140" id="logo">
        </div>
        <form action="">
            <h1>Account Settings</h1>
            <div id = "Description"><h3>Please set your account to continue.</h3></div>
            <br>
            <div class="form-group">
                <label for="first_name">First Name:&nbsp;&nbsp;</label>
                <input id="first_name" type="text" placeholder="First Name" class="input" > <br><br>
            </div>
            <div class="form-group">
                <label for="last_name">Last Name:&nbsp;&nbsp;</label>
                <input id="last_name" type="text" placeholder="Last Name" class="input"> <br><br>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number:&nbsp;&nbsp;</label>
                <input id="phone" type="number" placeholder="Phone Number" class="input"> <br><br>
            </div>
            <div class="form-group">
                <label for="gender">Gender:&nbsp;&nbsp;</label>
                <select name="" id="gender" class="select">
                    <option value="" disabled selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select> <br><br>
            </div>
            <div class="form-group">
                <label for="postal_code">Postal Code:&nbsp;&nbsp;</label>
                <input id="postal_code" type="number" placeholder="Postal Code" class="input"> <br><br>
            </div>
            <div class="form-group">
                <label for="address_line_1">Address Line 1:&nbsp;&nbsp;</label>
                <input id="address_line_1" type="text" placeholder="Bldg no. and Street" class="input"> <br><br>
            </div>
            <div class="form-group">
                <label for="address_line_2">Address Line 2:&nbsp;&nbsp;</label>
                <input id="address_line_2" type="text" placeholder="Apartment or Suite" class="input"> <br><br>
            </div>
            <br>
            <div class="form-group">
                <button id="btn" type="button" v-on:click="savetofs()">
                    Update & Set
                </button> <br><br><br>
            </div>
        </form>
    </div>
</template>
  
<script>
  import firebaseApp from '../firebase.js';
  import 'firebase/compat/auth';
  import { getFirestore } from "firebase/firestore"
  import { doc, setDoc } from "firebase/firestore";
  import 'firebaseui/dist/firebaseui.css'
  import {getAuth, onAuthStateChanged} from 'firebase/auth';

  const db = getFirestore(firebaseApp);
  
  export default {
      name:"AccountSettings",

      data(){
        return{
            user: false,
            email: '',
            name: '',
            uid: 0,
        }
      },
  
      mounted() {
        const auth=getAuth();
        onAuthStateChanged(auth, (user)=>{
            if(user) {
                this.user=user;
            }
        })
      },

      methods: {
        async savetofs(){
            var phone = document.getElementById("phone").value
            var gender = document.getElementById("gender").value
            var first_name = document.getElementById("first_name").value
            var last_name = document.getElementById("last_name").value
            var postal_code = document.getElementById("postal_code").value
            var address_line_1 = document.getElementById("address_line_1").value
            var address_line_2 = document.getElementById("address_line_2").value

            alert("Updating & Setting User Profile")

            try {
                const auth=getAuth();
                onAuthStateChanged(auth, (user)=>{
                    if(user) {
                        this.email = user.email;
                        this.name = user.displayName;
                        this.uid = user.uid;
                    }
                })
                const docRef = await setDoc(doc(db, String("UserProfile") ,this.email), {
                    email: this.email,
                    full_name: this.name,
                    uid: this.uid,
                    first_name: first_name,
                    last_name: last_name,
                    phone: phone,
                    gender: gender,
                    address_line_1: address_line_1,
                    address_line_2: address_line_2,
                    postal_code: postal_code,
                    
                })
                console.log(docRef)
                this.$router.push("/Menu")
            } catch(error) {
                console.error("Error updating user profile", error);
            }

        }
      }
    }
  </script>
  
  <style scoped>
.topnav {
    overflow: auto;
    background-color:white;
    width: 600px;
    margin: auto;
    border: 1.5px solid rgb(46, 41, 41);
    border-radius: 50px;
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);
}
.form-group {
    font-size: 20px; 
}

.form-group input{
    width: 40%;
    padding: 10px 10px 10px 10px;
    font-size: 15px;
    border: 1.5px solid rgb(46, 41, 41);
    border-radius: 10px;
}

.form-group select{
    width: 40%;
    padding: 10px 10px 10px 10px;
    font-size: 15px;
    border: 1.5px solid rgb(46, 41, 41);
    border-radius: 10px; 
}


#btn{
    text-align: center;
    margin: auto;
    font-size: 20px;
    overflow: auto;
    border: 1.5px solid rgb(46, 41, 41);
    border-radius: 10px;
    padding: 10px 20px 10px;
}
#btn:hover{
    color: rgb(243,236,236);
    background-color: rgb(255,94,0);
}
</style>