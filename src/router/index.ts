import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Random from '../views/Random.vue'
import Sport from '../views/SportNews.vue'
import Technology from '../views/Technology.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/random',
    name: 'random',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "random" */ '../views/Random.vue')
  },
  {
    path: '/sport',
    name: 'sport',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "random" */ '../views/Sport.vue')
  },
  {
    path: '/technology',
    name: 'technology',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "random" */ '../views/Technology.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
