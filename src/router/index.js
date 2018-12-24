import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/views/Layout";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta:{
        login_require:false,
      },
			component: resolve => require(['@/views/Login'], resolve)
    },
    {
      path: '/logout',
      name: 'Logout',
      meta:{
        login_require:false,
      },
			component: resolve => require(['@/views/Logout'], resolve)
    },
    {
      path: '/install',
      name: 'Install',
      meta:{
        login_require:false
      },
			component: resolve => require(['@/views/Install'], resolve)
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Layout,
      meta:{
        login_require:true
      },
      children:[
        {
          path: 'home',
          name: 'Home',
          meta:{
            login_require:true
          },
          component: () => import('@/views/Admin/Home')
        },
        {
          path:'/admin/menu/setting',
          name:'MenuSetting',
          meta:{
            login_require:true
          },
          component: () => import('@/views/Admin/Menu/Setting')
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: Layout,
      meta:{
        login_require:true
      },
      children:[
        {
          path: 'setting',
          name: 'Setting',
          meta:{
            login_require:true
          },
          component: () => import('@/views/User/Setting')
        },
      ]
    },
  ]
})
