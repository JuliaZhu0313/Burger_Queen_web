<template>
<img src="@/assets/logo.png" alt="Burger Queen" width="120" height="80" id="logo">
<NavBar />
<br>
<br>
<div class="topnav" style="text-align:center;">
    <img src="@/assets/logo.png" alt="Burger Queen" width="120" height="80" id="logo">
    <div id = "Welcome"><h1 v-text="welcome"></h1></div>
    <div id = "Description"><h3>Are you sure that you are going to log out?</h3></div>
    <br>
    <button id="btn" @click="signOut()" v-if="user"> Logout </button>
    <br>
    <br>
    <button id="btn" @click="cancel()" v-if="user"> Cancel, back to Menu</button>
    <br>
    <br>
</div>
</template>
  
<script>
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import NavBar from '@/components/NavBar.vue'
export default {
    name: 'LogOut',
    components:{
        NavBar,
    },
    data(){
        return{
            user: false,
            welcome: ''
        }
    },
    mounted(){
        const auth=getAuth();
        onAuthStateChanged(auth, (user)=>{
            if(user) {
                this.user=user;
                this.welcome = "Hi, " + user.displayName + "!" 
            }
        })
    },
      methods: {
        signOut() {
            const auth = getAuth();
            const user = auth.currentUser;
            signOut(auth, user)
            this.$router.push({name:'LogIn'})
        },
        cancel() {
            this.$router.push("/Menu")
        }
    }
  
}
</script>
  
<style scoped>
.topnav {
    overflow: auto;
    background-color:white;
    width: 500px;
    margin: auto;
    border: 1.5px solid rgb(46, 41, 41);
    border-radius: 50px;
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);
}
#btn{
    text-align: center;
    margin: auto;
    font-size: 20px;
    overflow: auto;
}
#btn:hover{
    color: rgb(243,236,236);
    background-color: rgb(255,94,0);
    box-shadow: 3px 3px grey;
}
</style>