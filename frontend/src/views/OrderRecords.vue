<template>
    <div class="topnav">
      <h1>Order Records</h1>
    </div>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
export default{
    name:'OrderRecords',
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