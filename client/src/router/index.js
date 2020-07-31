import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  Home,
  Auth,
  Profile,
  Users,
  Chat
} from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  // Mobile  Pages
  {
    path: '/chat/:id',

    name: 'Chat',
    component: Chat,
    beforeEnter: (to, from, next) => {
      console.log(window.innerWidth)
      if (window.innerWidth > 1100) {
        next('/')
      }
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
