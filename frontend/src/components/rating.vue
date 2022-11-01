<template>
    <h2>Please rate our service</h2>
    <vue3starRatings v-model="rating" />
    <button @click="Submit"> Submit </button>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import vue3starRatings from "vue3-star-ratings";
  
  export default 
    defineComponent({
    components: {
        vue3starRatings,
    },
    props: {
      step: {
      type: Number,
      default: 0.5,
    },},
    methods: {
    Submit() {
        alert("Your rating has been submitted successfully! :) ")
    }
  }
  });
  </script>