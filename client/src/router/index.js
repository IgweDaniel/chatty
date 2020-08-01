import Vue from 'vue'
import VueRouter from 'vue-router'

import { Home, Auth, UserProfile, Users, Chat, MyProfile } from '../views'

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
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/me',
    name: 'Me',
    component: MyProfile
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    meta: { toTransitionName: 'slide', fromTransitionName: 'back' },
    component: UserProfile
  },

  {
    path: '/chat',
    name: 'Chat',
    meta: { toTransitionName: 'slide', fromTransitionName: 'back' },
    component: Chat,
    beforeEnter: (to, from, next) => {
      if (window.innerWidth > 1200) {
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
