import Vue from 'vue'
import Vuex from 'vuex'
import Automerge from 'automerge'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    gapiLoaded: false,
    isSignedIn: false,
    file: null,
    doc: null
  },
  mutations: {
    gapiLoaded (state) {
      console.log('google api loaded!')
      state.gapiLoaded = true
    },

    updateSignInStatus (state, isSignedIn) {
      console.log('signinchange', isSignedIn)
      state.isSignedIn = isSignedIn
    },

    updateDoc (state, newDoc) {
      state.doc = newDoc
    },

    updateFile (state, file) {
      state.file = Object.freeze(file)
    }

  },
  getters: {
    saveDoc (state) {
      return Automerge.save(state.doc)
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
    },
    initFile ({commit}) {
      commit('updateFile', {name: 'Untitled'})
    },
    renameFile ({commit, state}, newName) {
      if (newName.length) {
        if (!state.file || !state.file.saved) {

        }
        commit('updateFile', Object.assign({}, state.file, {name: newName}))
      }
    },
    initDoc ({commit}) {
      commit('updateDoc', Automerge.init())
    },
    changeDoc ({state, commit}, callback, message) {
      commit('updateDoc', Automerge.change(state.doc, message, callback))
    },
    loadDoc ({state, commit}, serializedDoc) {
      commit('updateDoc', Automerge.load(serializedDoc))
    }
  }
})

export default store
