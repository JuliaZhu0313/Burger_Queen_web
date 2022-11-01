<template>
    <div class="topnav">
      <h1>About us</h1>
    </div>
      
    <div class="introduceone">
      <h1>User Protocol &</h1>
      <h1>User Privacy Security Protection</h1>
    </div>

    <div class="introducetwo">
      <h1>We are Burger Queen Team:</h1>
      <h1>Burger Queen Kids Club,</h1>
      <h1>I Love This Place!</h1>
    </div>
</template>

<script>
export default{
    name:'AboutUs',
    mounted () {
    //
  }
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
  width: 15cm;
  height: 4cm;
  left: 8cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }  
  .introducetwo {
  position: relative;
  float: center;
  width: 15cm;
  height: 6cm;
  left: 8cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }    
</style>