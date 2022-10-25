<template>
    <div class="topnav">
      <h1>My Profile</h1>
    </div>

    <div class="Email">
      <label for="Email">Email: </label>
      <input type="text" id="Email" required="" placeholder="=Enter your Email"><br><br>
    </div>

    <div class="Name">
      <label for="Name">Name: </label>
      <input type="text" id="Name" required="" placeholder="=Enter your Name"><br><br>
    </div>

    <div class="Number">
      <label for="Number">Contact Number: </label>
      <input type="text" id="Number" required="" placeholder="=Enter your Contact Number"><br><br>
    </div>

    <div class="Location">
      <label for="Location">Location: </label>
      <input type="text" id="Location" required="" placeholder="=Enter your Location"><br><br>
    </div>

    <div class = "submit">
      <button id="submit" type="button" v-on:click="savetofs()"> Submit </button>
    </div>
</template>

<script>
export default{
    name:'MyProfile',
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
  .Email{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 15cm;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }
  .Email label{
  width: 1cm;
  font-size: 30px;
  }
  .Email input{
  width: 7cm;
  height: 1cm;
  font-size: 20px;
  }

  .Name{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 15cm;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }
  .Name label{
  width: 1cm;
  font-size: 30px;
  }
  .Name input{
  width: 7cm;
  height: 1cm;
  font-size: 20px;
  }

  .Number{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 15cm;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }
  .Number label{
  width: 1cm;
  font-size: 30px;
  }
  .Number input{
  width: 7cm;
  height: 1cm;
  font-size: 20px;
  }

  .Location{
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 7px;
  border-radius: 10%;
  margin-top: 0.5cm;
  width: 15cm;
  height: 1.5cm;
  padding-top: 0.4cm;
  margin-left: 8cm;
  }
  .Location label{
  width: 1cm;
  font-size: 30px;
  }
  .Location input{
  width: 7cm;
  height: 1cm;
  font-size: 20px;
  }

  .submit {
  position: relative;
  float: center;
  width: 5cm;
  height: 0.5cm;
  left: 13cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  }
  .submit button {
  width: 5cm;
  height: 0.5cm;
  font-size: 30px;
  color:hsl(196, 87%, 15%);
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  }  
</style>