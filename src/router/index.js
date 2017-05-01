import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import * as types from '../vuex/type'


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


const routes = [
  {
    path: '/',
    name: '',
    component: Login
  },
  {
    path: '/home/:id',
    name: 'home',
    component: Home,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
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
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    component: Edit
  }
];


// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      console.log(store.state.token);
      next();
    }
    else {
      console.log("null");
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})

export default router;
