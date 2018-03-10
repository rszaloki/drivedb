import Vue from 'vue'
import Vuex from 'vuex'
import Automerge from 'automerge'
import uuidV4 from 'uuid/v4'
import { saveFile } from 'src/drive'

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
    people (state) {
      return state.doc && state.doc.people
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
      commit('updateFile', {
        name: 'Untitled.drivedb',
        editable: true,
        mimeType: 'application/json'
      })
    },
    renameFile ({commit, state, dispatch}, newName) {
      if (newName.length && state.file) {
        commit('updateFile', Object.assign({}, state.file, {name: newName}))
        if (!state.file.id) {
          dispatch('saveDoc').then(doc => saveFile(state.file, doc)).then(result => {
            commit('updateFile', Object.assign({}, state.file, result))
          })
        } else {
          // TODO: rename the file
        }
      }
    },
    initDoc ({commit, dispatch}) {
      const message = 'initialize doc'
      commit('updateDoc', Automerge.init())
      dispatch('changeDoc', doc => {
        doc.people = {}
      }, message)
      console.log(message)
    },
    changeDoc ({state, commit}, callback, message) {
      commit('updateDoc', Automerge.change(state.doc, message, callback))
    },
    loadDoc ({state, commit}, serializedDoc) {
      commit('updateDoc', Automerge.load(serializedDoc))
    },
    saveDoc ({state}) {
      return Automerge.save(state.doc)
    },
    createNewItem ({dispatch}) {
      const itemId = uuidV4()
      const message = `created new item ${itemId}`
      const item = {
        name: 'John Doe',
        title: 'untitled',
        created: Date.now(),
        id: itemId
      }
      dispatch('changeDoc', doc => {
        doc.people[itemId] = item
      }, message)
      console.log(message)
      return itemId
    },
    updateItem ({dispatch}, item) {
      const message = `update item ${item.id}`
      dispatch('changeDoc', doc => {
        doc.people[item.id] = item
      }, message)
      console.log(message)
    }
  }
})

export default store
