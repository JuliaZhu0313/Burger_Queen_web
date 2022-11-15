<template>
  <NavBar />
  <div class="topnav">
    <h1>Help Centre</h1>
  </div>

  <div class="helplist1">
    <h2>Get help with my orders</h2>
  </div>

  <div class="helplist2">
    <h2>I am having trouble placing an order</h2>
  </div>

  <div class="helplist3">
    <h2>My support requests</h2>
  </div>

  <div class="helplist4">
    <h2>Dine in</h2>
  </div>

  <div class="helplist5">
    <h2>Safety Concerns</h2>
  </div>

  <div class="helplist6">
    <h2>Vouchers and Rewards</h2>
  </div>

  <div class="helplist7">
    <h2>FAQ:</h2>
  </div>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default{
    name:'Help Centre',
    mounted () {
    //
    },
    components:{
      NavBar,
      Footer
    }
}
</script>

<style scoped>
  .topnav {
  overflow: auto;
  background-color:#F4EDE5;
  align-content: center;
  }
  .helplist1 {
  position: relative;
  float: center;
  width: 57%;
  height: 2cm;
  left: 21%;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }   
  .helplist2 {
  position: relative;
  float: center;
  width: 57%;
  height: 2cm;
  left: 21%;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }    
  .helplist3 {
  position: relative;
  float: center;
  width: 57%;
  height: 2cm;
  left: 21%;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }     
  .helplist4 {
  position: relative;
  float: center;
  width: 57%;
  height: 2cm;
  left: 21%;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }     
  .helplist5 {
  position: relative;
  float: center;
  width: 57%;
  height: 2cm;
  left: 21%;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }     
  .helplist6 {
  position: relative;
  float: center;
  width: 57%;
  height: 2cm;
  left: 21%;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }      
  .helplist7 {
  position: relative;
  float: center;
  width: 57%;
  height: 2cm;
  left: 21%;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }     
</style>