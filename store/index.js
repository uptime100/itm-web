import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuOpened: false
    },
    mutations: {
      menuToggle (state) {
        state.menuOpened = !state.menuOpened
      },
      hideMenu(state){
        state.menuOpened = false
      }
    },
    actions: {
        toggleNav({commit}){
            commit('menuToggle')
        }
    }
  })
}

export default createStore