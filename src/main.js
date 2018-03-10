import Vue from 'vue'
import App from 'src/App.vue'
import router from 'src/router'
import store from 'src/store'
import 'src/google'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!store.state.gapiLoaded && to.matched.some(record => record.meta.chkinit)) {
    next({name: 'spinner', replace: true})
    return
  }

  if (!store.state.isSignedIn && to.matched.some(record => record.meta.chkauth)) {
    next({name: 'login', replace: true})
    return
  }

  if (!store.state.doc && to.matched.some(record => record.meta.chkempty)) {
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
