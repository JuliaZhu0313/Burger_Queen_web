<template>
    <div id="logged" v-if="user">
      <div id="nav">
        <router-link to="/Menu"> Menu</router-link> | 
        <router-link to="/Cart"> Cart</router-link> 
        <br>
        <button @click="personalCentre">Personal Centre</button>
        <br>
        <button @click="logOut">Log Out</button>
    </div>
  </div>
</template>

<script>
import {getAuth, onAuthStateChanged} from "firebase/auth";
export default {
    name: 'NavBar',

    data() {
        return {
            user: false,
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            if(user) {
                this.user = user;
            }
        })
    },

    methods: {
        personalCentre: function() {
            this.$router.push("/PersonalCentre")
        },
        logOut: function(){
            this.$router.push("/LogOut")
        }
    }

}
</script>

<style scoped>
#nav{
    padding: 30px;
    font-size: 30px;
    text-align: center;
    background-color: #F4EDE5;
}
#nav a{
    font-weight: bold;
    color: #2c3e50;
}
#nav a.router-link-exact-active {
    color: #42b983;
}

#nav button{
    background-color: coral;
    float: right;
    font-size: 17px;
    text-align: right;
    border-radius: 10px; 
}

#nav button:hover{
    background-color: #F4EDE5;
}

</style>