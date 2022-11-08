<template>
  <NavBar />
  <div class="topnav">
    <h1>About us</h1>
  </div>
    
  <div class="introduceone">
    <button @click="privacy"><h1>User Protocol &</h1><h1>Privacy Security Protection</h1></button>
  </div>

  <div class="introducetwo">
    <h1>We are Burger Queen Team:</h1>
    <h1>Burger Queen Kids Club,</h1>
    <h1>I Love This Place!</h1>
  </div>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '../components/Footer.vue'
export default{
    name:'AboutUs',
    components:{
      NavBar,
      Footer
    },
    mounted () {
    //
    },
    methods: {
      privacy: function() {
        this.$router.push("/Privacy")
      }
    },
}
</script>

<style>
  .topnav {
  overflow: auto;
  background-color:#F4EDE5;
  align-content: center;
  }
  .introduceone {
  position: relative;
  float: center;
  width: 64%;
  height: 4cm;
  left: 8cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }  
  .introduceone button{
  width: 100%;
  height: 2cm;
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  font-size: 15.5px;
  color: #293b45;
  }
  .introducetwo {
  position: relative;
  float: center;
  width: 64%;
  height: 6cm;
  left: 8cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }    
</style>