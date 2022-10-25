<template>
    <div class="topnav">
      <h1>Settings</h1>
    </div>

    <div class="Current">
      <label for="Current">Current Password: </label>
      <input type="text" id="Current" required="" placeholder="=Enter your Current Password"><br><br>
      
    </div>

    <div class="New">
      <label for="New">New Password: </label>
      <input type="text" id="New" required="" placeholder="=Enter your New Password"><br><br>
    </div>

    <div class = "submit">
      <button id="submit" type="button" v-on:click="savetofs()"> Submit </button>
    </div>
</template>

<script>
export default{
    name:'Settings',
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

  .Current{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 10px;
  border-radius: 10%;
  margin-top: 1.5cm;
  width: 15cm;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }
  .Current label{
  width: 1cm;
  font-size: 30px;
  }
  .Current input{
  width: 7.5cm;
  height: 1cm;
  font-size: 20px;
  }

  .New{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 10px;
  border-radius: 10%;
  margin-top: 1.5cm;
  width: 15cm;
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

  .submit {
  position: relative;
  float: center;
  width: 5cm;
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