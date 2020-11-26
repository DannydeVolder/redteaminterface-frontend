import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'
import Mock1 from '../views/Mock1.vue'
import Mock2 from '../views/Mock2.vue'
import Mock3 from '../views/Mock3.vue'
import SSHLoginAttempt from '../views/SSHLoginAttempt.vue'
import BufferOverflow from '../views/BufferOverflow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    children: [
      {
        path: '/',
        name: 'MainPage',
        component: MainPage,
      },
      {
        path: '/mock1',
        name: 'Mock1',
        component: Mock1,
      },
      {
        path: '/mock2',
        name: 'Mock2',
        component: Mock2,
      },
      {
        path: '/mock3',
        name: 'Mock3',
        component: Mock3,
      },
      {
        path: '/sshloginattempt',
        name: 'SSHLoginAttempt',
        component: SSHLoginAttempt,
      },
      {
        path: '/bufferoverflow',
        name: 'BufferOverflow',
        component: BufferOverflow,
      }
    ],
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
