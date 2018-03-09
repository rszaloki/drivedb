import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to.matched)
  if (!store.state.gapiLoaded && to.matched.some(record => record.meta.chkinit)) {
    next({name: 'spinner', replace: true})
    return
  }

  if (!store.state.isSignedIn && to.matched.some(record => record.meta.chkauth)) {
    next({name: 'login', replace: true})
    return
  }

  if (!store.state.fileId && to.matched.some(record => record.meta.chkempty)) {
    next({name: 'empty', replace: true})
    return
  }

  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
