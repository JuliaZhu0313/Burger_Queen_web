<template>
  <h3>Give us a rating of your ordering experience :) </h3>
  <star-rating :increment="0.5" id="star"></star-rating>
  <div class="btn1">
  <button @click="Submit"> Submit </button></div>
  <div class="btn2">
    <button
          @click="this.$router.push('/menu')" 
          class="button"><h3>Go back to Menu</h3>
    </button>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating
  },
  methods: {
    Submit() {
        alert("Your rating has been submitted successfully! :) ")
    }
  },

}
</script>

<style>
#star{
  text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.btn1 button {
  background-color: #c77414;
	color: white;
  border-radius: 12px;
	font-weight: bold;
  font-size: 15px;
  padding: 15px;
  width: 20%;
  margin-bottom: 5px;
  margin: auto;
  }
  .btn2 button {
  background-color: #c77414;
	color: white;
  border-radius: 12px;
	font-weight: bold;
  font-size: 15px;
  padding: 15px;
  width: 20%;
  margin-bottom: 5px;
  margin: auto;
  }
</style>