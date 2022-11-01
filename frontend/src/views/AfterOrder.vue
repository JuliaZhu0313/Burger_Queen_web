<template>
    <img src="@/assets/logo.png" alt="Burger Queen" width="100" height="100" id="logo">
    <NavBar />
    <rating v-model="rating"/>
  </template>
  
  <script>
  import rating from '@/components/rating.vue'
  import NavBar from '@/components/NavBar.vue'
  
  export default {
    name: 'AfterOrder',
    components: {
      rating,
      NavBar,
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>