import Vue from 'vue'
import Router from 'vue-router'
import Register from '../pages/register.vue'
import Login from '../pages/login.vue'
import Edit from '../pages/edit.vue'
import Home from '../pages/home.vue'
import Person from '../pages/home/person.vue'
import FileManage from '../pages/home/fileManage.vue'
import MediaManage from '../pages/home/mediaManage.vue'
import SysManage from '../pages/home/sysManage.vue'
import MainHome from '../pages/home/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          component: MainHome
        },
        {
          // 当 /home/:id/Person 匹配成功，
          // Person 会被渲染在 User 的 <router-view> 中
          path: 'person',
          component: Person
        },
        {
          path: 'fileManage',
          component: FileManage
        },
        {
          path: 'mediaManage',
          component: MediaManage
        },
        {
          path: 'sysManage',
          component: SysManage
        }
      ]
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
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    }
  ]
})
