import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loadScript from 'load-script'

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

loadScript('https://apis.google.com/js/api.js', () => {
  window.gapi.load('client:auth2', function () {
    window.gapi.client.init({
      apiKey: 'AIzaSyAjK1mi8amRdHYTQbeZIdGUlCH7mahevxg',
      clientId: '960214299334-4nc7ad24u3cenam0j1bo4d3t5cbh5akg.apps.googleusercontent.com',
      scope: 'profile https://www.googleapis.com/auth/drive.file'
    }).then(function () {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(status => store.commit('updateSignInStatus', status))

      const status = window.gapi.auth2.getAuthInstance().isSignedIn.get()
      store.commit('updateSignInStatus', status)
      store.commit('gapiLoaded')
    }).catch(e => console.error(e))
  })
})
