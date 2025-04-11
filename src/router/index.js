import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Login from '../views/Login.vue'
import { state } from '../config/msalConfig'

const requireAuth = (to, from, next) => {
  let user = state.user
  if (user) {
    next()
    return
  }
  next({name: 'login'})
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/posts/:id',
      name: 'details',
      component: Details,
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
})

export default router
