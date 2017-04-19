import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/register.vue'
import Login from '../pages/login.vue'
import Home from '../pages/home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
