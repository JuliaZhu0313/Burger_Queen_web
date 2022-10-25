import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// import About from '@/views/About.vue'
// import OnlyProfit from '@/views/OnlyProfit.vue'
import PersonalCentre from '@/views/PersonalCentre.vue' 
import MyProfile from '@/views/MyProfile.vue'
import Settings from '@/views/Settings.vue'
import OrderRecords from '@/views/OrderRecords.vue'
import HelpCentre from '@/views/HelpCentre.vue'
import Aboutus from '@/views/Aboutus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
}, 
// {
//     path: '/about',
//     name: 'About',
//     component: About
// }
// ,
// {
//     path: '/profit',
//     name: 'OnlyProfit',
//     component: OnlyProfit
// } 
// ,
{
    path: '/PersonalCentre',
    name: "PersonalCentre",
    component: PersonalCentre
},
{
    path:'/MyProfile',
    name:"MyProfile",
    component: MyProfile
},
{
    path:'/Settings',
    name:"Settings",
    component: Settings
},
{
    path:'/OrderRecords',
    name:"OrderRecords",
    component: OrderRecords
},
{
    path:'/HelpCentre',
    name:"HelpCentre",
    component: HelpCentre
},
{
    path:'/Aboutus',
    name:"Aboutus",
    component: Aboutus
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router