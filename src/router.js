import Vue from 'vue'
import Router from 'vue-router'
import Home from 'src/views/Home'
import About from 'src/views/About'
import Empty from 'src/views/Empty'
import Spinner from 'src/views/Spinner'
import Login from 'src/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        chkinit: true,
        chkauth: true,
        chkempty: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        chkinit: false,
        chkauth: false,
        chkempty: false
      }
    },
    {
      path: '/empty',
      name: 'empty',
      component: Empty,
      meta: {
        chkinit: true,
        chkauth: true,
        chkempty: false
      }
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: Spinner,
      meta: {
        chkinit: false,
        chkauth: false,
        chkempty: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        chkinit: true,
        chkauth: false,
        chkempty: false
      }
    }
  ]
})
