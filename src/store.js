import Vue from 'vue'
import Vuex from 'vuex'

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

export default store
