import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    activeScreen: 1,
    scrollHash: [],
    isVisited: false,
    showRequestForm: false
  },
  mutations: {
    menuToggle(state) {
      state.isMenuOpen = !state.isMenuOpen
    },
    menuClose(state) {
      state.isMenuOpen = false
    },
    activeScreenIncr(state) {
      if (state.activeScreen < 5)
        state.activeScreen++
    },
    activeScreenDecr(state) {
      if (state.activeScreen > 1)
        state.activeScreen--
    },
    activeScreenSetter(state, value) {
      state.activeScreen = value
    },
    scrollHashPush(state, value) {
      state.scrollHash.push(value)
    },
    visitedHandler(state) {
      state.isVisited = !state.isVisited 
    },
    showRequestFormToggler(state) {
      state.showRequestForm = !state.showRequestForm
    }
  },
  actions: {
  },
  modules: {
  }
})
