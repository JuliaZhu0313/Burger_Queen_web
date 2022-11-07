<template>
    <h2>Please rate our service</h2>
    <vue3starRatings v-model="rating" />
    <button @click="Submit"> Submit </button>
    <button
          @click="this.$router.push('/menu')" 
          class="button"><h3>Go back to Menu</h3>
    </button>
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

  <style scoped>
  button {
  background-color: #c77414;
	color: white;
  display:block;
  border-radius: 12px;
	font-weight: bold;
  font-size: 15px;
  padding: 15px;
  width: 40%;
  margin: auto;
  margin-bottom: 5px;
  }
  </style>