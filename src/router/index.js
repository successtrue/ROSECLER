import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/home'
import login from '@/components/page/login/login'
import account from '@/components/page/create_account/create_account'
import register_success from '@/components/page/register_success/register_success'
import bag from '@/components/page/bag/bag'
import shopping from '@/components/page/bag/shopping'
import serum from '@/components/page/serum/serum'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login/account',
      name: 'account',
      component: account
    },
    {
      path: '/login/account/register_success',
      name: 'register_success',
      component: register_success
    },
    {
      path: '/bag',
      name: 'bag',
      component: bag
    },
    {
      path:'/shopping',
      name:'shopping',
      component:shopping
    },
    {
      path:'/serum',
      name:'serum',
      component:serum
    },
// 		{
// 		  path: '*',
// 		  name: 'Home',
// 		  component: Home
// 		}
  ]
})
