import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/components/LogIn.vue'
import MainMenu from '@/components/MainMenu.vue'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
