import Vue from 'vue'
import Vuex from 'vuex'
import loadScript from 'load-script'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    gapiLoaded: false,
    isSignedIn: false,
    fileId: null
  },
  mutations: {
    gapiLoaded (state) {
      console.log('google api loaded!')
      state.gapiLoaded = true
    },

    updateSignInStatus (state, isSignedIn) {
      console.log('signinchange', isSignedIn)
      state.isSignedIn = isSignedIn
    }

  },
  actions: {
    signIn ({state}) {
      if (state.gapiLoaded) {
        return window.gapi.auth2.getAuthInstance().signIn()
      } else {
        return Promise.reject(new Error('missing gapi!'))
      }
    },
    signOut ({state}) {
      if (state.gapiLoaded) {
        return window.gapi.auth2.getAuthInstance().signOut()
      } else {
        return Promise.reject(new Error('missing gapi!'))
      }
    }
  }
})

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

export default store
