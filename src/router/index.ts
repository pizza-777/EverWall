import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/wall/:chatAddress',
    name: 'wall',
    component: () => import(/* webpackChunkName: "about" */ '../views/WallView.vue')
  
  },
  {
    path: '/message/:messageId',
    name: 'messageView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MessageView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
