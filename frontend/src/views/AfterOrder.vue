<template>
    <img src="@/assets/logo.png" alt="Burger Queen" width="100" height="100" id="logo">
    <NavBar />
    <rating v-model="rating"/>
    <Footer />
  </template>
  
  <script>
  import rating from '@/components/rating.vue'
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'
  
  export default {
    name: 'AfterOrder',
    components: {
      rating,
      NavBar,
      Footer,
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