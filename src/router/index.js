import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/register.vue'
import Login from '../pages/login.vue'
import Edit from '../pages/edit.vue'
import Home from '../pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }
  ]
})
