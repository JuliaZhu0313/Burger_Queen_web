<template>
    <img src="@/assets/logo.png" alt="Burger Queen" width="130" height="100" id="logo">
    <NavBar />
    <MainMenu />
    <Footer />
</template>
    
    <script>
    import NavBar from '@/components/NavBar.vue'
    import MainMenu from '../components/MainMenu.vue'
    import Footer from '../components/Footer.vue'
    export default {
      name: 'Menu',
      components:{
            NavBar,
            MainMenu,
            Footer
        }
      }
    </script>