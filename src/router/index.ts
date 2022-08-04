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
    component: () => import('../views/WallView.vue')
  
  },
  {
    path: '/post/:postId',
    name: 'postView',    
    component: () => import('../views/PostView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
