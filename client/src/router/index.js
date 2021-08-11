import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vaccinations from '../views/Vaccinations.vue'
import Antiqua from '../views/Antiqua.vue'
import Solarbuddhica from '../views/Solarbuddhica.vue'
import Zerpfy from '../views/Zerpfy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vaccinations',
    name: 'Vaccinations',
    component: Vaccinations
  },
  {
    path: '/antiqua',
    name: 'Antiqua',
    component: Antiqua
  },
  {
    path: '/solarbuddhica',
    name: 'Solarbuddhica',
    component: Solarbuddhica
  },
  {
    path: '/zerpfy',
    name: 'Zerpfy',
    component: Zerpfy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
