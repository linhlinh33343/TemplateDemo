import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../components/AboutUs.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../components/Sevices.vue')
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: () => import('../components/Blog.vue')
  },
  {
    path: '/our-team',
    name: 'OurTeam',
    component: () => import('../components/OurTeam.vue')
  },
  {
    path: '/Slutions',
    name: 'slutions',
    component: () => import('../components/Slutions.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
