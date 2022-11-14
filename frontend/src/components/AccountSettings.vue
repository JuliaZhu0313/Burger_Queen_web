<template>
    <div class="setting" v-if="user">
        <div class="img">
            <img id = "settings_img" src="@/assets/settings_img.png" alt="Burger Queen">
        </div>
        <div class="text">
            <div class="imge-holder">
                <img src="@/assets/logo.png" alt="Burger Queen" width="200" height="140" id="logo">
            </div>
            <form action="">
                <h1>Account Settings</h1>
                <div id = "Description"><h3>Set your account to continue.</h3></div>
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
                    </button> <br>
                </div>
            </form>
        </div>
            
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
                this.email = user.email;
                this.name = user.displayName;
                this.uid = user.uid;
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

            console.log(this.email)

            try {
                const path = doc(db, "UserProfile", this.email)
                await setDoc(path, {
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
                this.$router.push("/Menu")
            } catch(error) {
                console.error("Error updating user profile", error);
            }

        }
      }
    }
  </script>
  
  <style scoped>
.setting {
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
    margin: 0.5% 0.5% 0% 0.5%;
}
#settings_img {
    width: 100%;
}
.text{
    float: right;
    width: 58%;
    text-align: center;
}
.form-group {
    font-size: 20px; 
}

.form-group input{
    width: 26%;
    padding: 10px 10px 10px 10px;
    font-size: 15px;
    border: 1px solid rgb(156, 156, 156);
    border-radius: 3px;
}

.form-group select{
    width: 26%;
    padding: 10px 10px 10px 10px;
    font-size: 15px;
    border: 1px solid rgb(156, 156, 156);
    border-radius: 3px; 
}


#btn{
    text-align: center;
    font-size: 20px;
    border-color: rgb(156, 156, 156);
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    padding: 10px 20px 10px;
}

#btn:hover{
    color: rgb(243,236,236);
    background-color: rgb(255,94,0);
}

#logo {
    width: 200px;
    height: 140px;
}
</style>