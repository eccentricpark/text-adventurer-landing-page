import { createRouter, createWebHistory } from 'vue-router'
import LandingPageMainVue from "./Pages/LandingPageMain.vue";
import LandingPageMain2Vue from "./Pages/LandingPageMain2.vue";


const routes = [
  { path: '/', component: LandingPageMainVue },
  { path: '/2', component: LandingPageMain2Vue }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router