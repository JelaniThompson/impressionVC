import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueSplash from 'vue-splash'

Vue.use(VueRouter)
Vue.use(VueSplash)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team.vue'),
    meta: { transition: 'zoom' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/investors',
    name: 'Investor Portal',
    component: () => import('../views/Password.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
