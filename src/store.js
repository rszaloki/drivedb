import Vue from 'vue'
import Vuex from 'vuex'
import loadScript from 'load-script'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    gapiLoaded: false,
    isSignedIn: false
  },
  mutations: {
    gapiLoaded (state) {
      console.log('google api loaded!')
      state.gapiLoaded = true
    },

    updateSignInStatus (state, isSignedIn) {
      store.isSignedIn = isSignedIn
    }

  },
  actions: {
    signIn ({state}) {
      if (state.gapiLoaded) {
        window.gapi.auth2.getAuthInstance().signIn()
      }
    },
    signOut ({state}) {
      if (state.gapiLoaded) {
        window.gapi.auth2.getAuthInstance().signOut()
      }
    }
  }
})

loadScript('https://apis.google.com/js/api.js', () => {
  window.gapi.load('client:auth2', function () {
    window.gapi.client.init({
      apiKey: 'AIzaSyAjK1mi8amRdHYTQbeZIdGUlCH7mahevxg',
      clientId: '960214299334-4nc7ad24u3cenam0j1bo4d3t5cbh5akg.apps.googleusercontent.com',
      scope: 'profile'
    }).then(function () {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(status => store.commit('updateSignInStatus', status))

      // Handle the initial sign-in state.
      store.commit('updateSignInStatus',
        window.gapi.auth2.getAuthInstance().isSignedIn.get())
      store.commit('gapiLoaded')
    })
  })
})

export default store
