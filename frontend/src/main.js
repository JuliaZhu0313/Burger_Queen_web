import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import vue3starRatings from "vue3-star-ratings";

createApp(App).component("vue3StarRatings", vue3starRatings).use(router).mount('#app')
