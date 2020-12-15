import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'
import NmapAttack from '../views/NmapAttack.vue'
import BruteForce from '../views/BruteForce.vue'
import SqlInjection from '../views/SqlInjection.vue'
import DDOS from '../views/DDOS.vue'
import RansomWare from '../views/RansomWare.vue'

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
        path: '/nmapattack',
        name: 'NmapAttack',
        component: NmapAttack,
      },
      {
        path: '/bruteforce',
        name: 'BruteForce',
        component: BruteForce,
      },
      {
        path: '/sqli',
        name: 'SqlInjection',
        component: SqlInjection,
      },
      {
        path: '/ddos',
        name: 'DDOS',
        component: DDOS,
      },
      {
        path: '/ransomware',
        name: 'RansomWare',
        component: RansomWare,
      }
    ],
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
