<template>
  <NavBar />
  <div class="topnav">
    <h1>Settings</h1>
  </div>

  <div class="New">
    <label for="New">New Password: </label>
    <input type="text" id="New" required="" placeholder="=Enter your New Password"><br><br>
  </div>

  <div class="Repeat">
    <label for="Repeat">Repeat Password: </label>
    <input type="text" id="Repeat" required="" placeholder="=Enter your Password Again"><br><br>
  </div>

  <div class = "submit">
    <button id="submit" type="button" v-on:click="update()"> Submit </button>
  </div>

  <Teleport to="body">
      <modal :show="showModal" :title="msg" @close="showModal = false"></modal>
  </Teleport>
  <Footer />
</template>

<script>
import 'firebase/compat/auth';
import 'firebaseui/dist/firebaseui.css'
import { getAuth, updatePassword } from "firebase/auth";
// import router from '../router';
import Modal from '../components/Modal.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default{
    name:'Settings',
    components: {
      Modal,
      NavBar,
      Footer
    },
    data() {
        return {
            showModal: false,
            msg: ""
        }
    },
    mounted () {
    //
    },
    
    methods:{
      update(){
      const auth = getAuth();

      const user = auth.currentUser;
      const newPassword = document.getElementById("New").value;
      const repeatPassword = document.getElementById("Repeat").value;
    
      if (repeatPassword === newPassword){
        updatePassword(user, newPassword).then(() => {
        // Update successful.
            this.msg = "You have changed the password successfully."
            this.showModal = true
        }).catch((error) => {
            // An error ocurred
            console.log(error.message)
            this.msg = error.message
            this.showModal = true
        })}
        else{
            this.msg = "Wrong Repeat Password!"
            this.showModal = true
        }

    }
  }
}
</script>

<style>
  .topnav {
  overflow: auto;
  background-color:#F4EDE5;
  align-content: center;
  }

  .New{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 10px;
  border-radius: 10%;
  margin-top: 1.5cm;
  width: 62%;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }
  .New label{
  width: 1cm;
  font-size: 30px;
  }
  .New input{
  width: 7.5cm;
  height: 1cm;
  font-size: 20px;
  }

  .Repeat{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 10px;
  border-radius: 10%;
  margin-top: 1.5cm;
  width: 62%;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }
  .Repeat label{
  width: 1cm;
  font-size: 30px;
  }
  .Repeat input{
  width: 7.5cm;
  height: 1cm;
  font-size: 20px;
  }

  .submit {
  position: relative;
  float: center;
  width: 39%;
  height: 2cm;
  left: 13cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 1.5cm;
  }
  .submit button {
  width: 5cm;
  height: 2cm;
  font-size: 30px;
  color:hsl(196, 87%, 15%);
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  }  
</style>