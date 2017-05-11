import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    ssr: null
  },
  mutations: {
    SET_RENDERER (state, value) {
      console.log('SET_RENDERER', value)
      state.ssr = value
    }
  }
})

export default store
