import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'
import NmapAttack from '../views/NmapAttack.vue'
import BruteForce from '../views/BruteForce.vue'
import SqlInjection from '../views/SqlInjection.vue'
import DDOS from '../views/DDOS.vue'
import RansomWare from '../views/RansomWare.vue'
import Login from '../views/Login.vue'


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
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { disallowAuthed: true }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login',  '/404'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('isSignedIn');
  if(authRequired){
    if(!loggedIn){
      return next({ name: 'Login'});
    }

  }
  if (loggedIn && to.meta.disallowAuthed) {
    return router.push({ name: 'HomePage' })
  }


  next();
})

export default router
