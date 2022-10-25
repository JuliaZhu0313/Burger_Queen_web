<template>
    <div class="topnav">
      <h1>Personal Centre</h1>
    </div>

    <div class = "MyProfile">
      <button @click="MyProfile">My Profile</button>
    </div>

    <div class = "Settings">
      <button @click="Settings">Settings</button>
    </div>

    <div class = "OrderRecords">
      <button @click="OrderRecords">Order Records</button>
     </div>

    <div class = "HelpCentre">
      <button @click="HelpCentre">Help Centre</button>
    </div>

    <div class = "Aboutus">
      <button @click="Aboutus">About us</button>
    </div>

</template>

<script>
export default{
    name:'PersonalCentre',
    mounted () {
    //
  },

  methods: {
    MyProfile: function() {
      this.$router.push("/MyProfile")
    },
    
    Settings: function() {
      this.$router.push("/Settings")
    },

    OrderRecords: function() {
      this.$router.push("/OrderRecords")
    },

    HelpCentre: function() {
      this.$router.push("/HelpCentre")
    },

    Aboutus: function() {
      this.$router.push("/Aboutus")
    },
  }
}
</script>

<style>
  .topnav {
  overflow: auto;
  background-color:#F4EDE5;
  align-content: center;
  }
  .MyProfile {
  position: relative;
  float: center;
  width: 5cm;
  height: 2cm;
  left: 13cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }
  .MyProfile button {
  width: 5cm;
  height: 2cm;
  font-size: 30px;
  color:hsl(196, 87%, 15%);
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  }
  .Settings {
  position: relative;
  float: center;
  width: 5cm;
  height: 2cm;
  left: 13cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }
  .Settings button {
  width: 5cm;
  height: 2cm;
  font-size: 30px;
  color:hsl(196, 87%, 15%);
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  }      
  .OrderRecords {
  position: relative;
  float: center;
  width: 5cm;
  height: 2cm;
  left: 13cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }
  .OrderRecords button {
  width: 5cm;
  height: 2cm;
  font-size: 30px;
  color:hsl(196, 87%, 15%);
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  }   
  .HelpCentre {
  position: relative;
  float: center;
  width: 5cm;
  height: 2cm;
  left: 13cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  }
  .HelpCentre button {
  width: 5cm;
  height: 2cm;
  font-size: 30px;
  color:hsl(196, 87%, 15%);
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  }   
  .Aboutus {
  position: relative;
  float: center;
  width: 5cm;
  height: 2cm;
  left: 13cm;
  border-color: #F4EDE5;
  border-style: solid;
  border-width: 4px;
  border-radius: 10%;
  margin-top: 0.5cm;
  } 
  .Aboutus button {
  width: 5cm;
  height: 2cm;
  font-size: 30px;
  color:hsl(196, 87%, 15%);
  background: rgba(10, 52, 61, 0);
  border:rgba(0,0,0,0);
  }  
        
</style>
