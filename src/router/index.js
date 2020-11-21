import Vue from 'vue'
import VueRouter from 'vue-router'

//Layouts
import MainLayout from '@/layouts/Main'
import AuthLayout from '@/layouts/Auth'

//Views
import Auth from '@/views/Auth'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Main',
        component: Home
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Auth',
        component: Auth
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
