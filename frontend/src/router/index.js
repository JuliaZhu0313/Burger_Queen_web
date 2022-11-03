import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/components/LogIn.vue'
import Menu from '@/views/Menu.vue'
import Cart from '@/views/BurgerCart.vue'
import LogOut from '@/components/LogOut.vue'
import PersonalCentre from '@/views/PersonalCentre.vue' 
import MyProfile from '@/views/MyProfile.vue'
import Settings from '@/views/Settings.vue'
import OrderRecords from '@/views/OrderRecords.vue'
import HelpCentre from '@/views/HelpCentre.vue'
import AboutUs from '@/views/AboutUs.vue'
import Payment from '@/components/Payment.vue'
import Order from '@/components/Order.vue'
import Arrived from '@/components/Arrived.vue'
import afterorder from '@/views/AfterOrder.vue'

const routes = [
    {
      path: "/",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart,

    },
    
    {
        path: '/payment',
        name: "Payment",
        component: Payment,
      },
    
    {
      
      path: '/order',
      name: "Order",
      component: Order,
    },

    {
     path: '/arrived',
     name:"Arrived",
     component: Arrived,
    },
    
    {
      path: '/afterorder',
      name: "AfterOrder",
      component: afterorder,
    },
    
    {
        path: '/LogOut',
        name: "LogOut",
        component: LogOut,
    },
    {
      path: '/PersonalCentre',
      name: "PersonalCentre",
      component: PersonalCentre,
  },
  {
      path:'/MyProfile',
      name:"MyProfile",
      component: MyProfile,
  },
  {
      path:'/Settings',
      name:"Settings",
      component: Settings,
  },
  {
      path:'/OrderRecords',
      name:"OrderRecords",
      component: OrderRecords,
  },
  {
      path:'/HelpCentre',
      name:"HelpCentre",
      component: HelpCentre,
  },
  {
      path:'/AboutUs',
      name:"AboutUs",
      component: AboutUs,
  }
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
