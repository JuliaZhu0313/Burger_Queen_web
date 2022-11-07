<template>
    <div class="topnav">
      <h1>Order Details</h1>
    </div>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
export default{
    name:'OrderDetails',
    mounted () {
    //
    },
    components: {
      Footer
    }
}
</script>

<style>
  .topnav {
  overflow: auto;
  background-color:#F4EDE5;
  align-content: center;
  }
</style>