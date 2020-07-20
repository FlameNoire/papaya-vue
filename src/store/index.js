import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    activeScreen: 1
  },
  mutations: {
    menuToggle(state) {
      state.isMenuOpen = !state.isMenuOpen
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
    }
  },
  actions: {
  },
  modules: {
  }
})
