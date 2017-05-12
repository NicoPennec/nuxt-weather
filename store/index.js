import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    ssr: null,
    city: null
  },
  mutations: {
    SET_RENDERER (state, value) {
      console.log('SET_RENDERER', value)
      state.ssr = value
    },
    SET_CITY (state, value) {
      console.log('SET_CITY', value)
      state.city = value
    }
  }
})

export default store
