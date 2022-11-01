<template>
    <img src="@/assets/logo.png" alt="Burger Queen" width="130" height="100" id="logo">
    <NavBar />
    <MainMenu />
    </template>
    
    <script>
    import NavBar from '@/components/NavBar.vue'
    import MainMenu from '../components/MainMenu.vue';
    export default {
      name: 'Menu',
      components:{
            NavBar,
            MainMenu
        }
      }
    </script>