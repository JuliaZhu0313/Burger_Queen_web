import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/components/LogIn.vue'
import MainMenu from '@/components/MainMenu.vue'
import LogOut from '@/components/LogOut.vue'
//import ViewMyCart from '@/components/ViewMyCart.vue'
//import ViewMyOrder from '@/components/ViewMyOrder.vue'

const routes = [
    {
      path: "/",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: '/menu',
      name: 'MainMenu',
      component: MainMenu,
    },
    //{
    //  path: '/cart',
    //  name: "ViewMyCart",
    //  component: ViewMyCart,
    //},
    //{
    //  path: '/order',
    //  name: "ViewMyOrder",
    //  component: ViewMyOrder,
    //},
    {
      path: '/logout',
      name: "LogOut",
      component: LogOut,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
