<template>
<img src="@/assets/logo.png" alt="Burger Queen" width="100" height="100" id="logo">
<NavBar />
<Cart_new />
</template>
    
<script>
    import NavBar from '@/components/NavBar.vue'
    import Cart_new from '../components/Cart.vue';
    export default {
      name: 'Cart',
      components:{
            NavBar,
            Cart_new
        }
      }
</script>