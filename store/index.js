import persistedstate from 'vuex-persistedstate'

export const plugins = [persistedstate({
  key: 'nuxtweather'
})]

export const state = () => ({
  ssr: null,
  city: null,
  cities: [
    'Ajaccio',
    'Bordeaux',
    'Lille',
    'Lyon',
    'Marseille',
    'Nice',
    'Paris',
    'Toulouse'
  ]
})

export const mutations = {
  SET_RENDERER (state, value) {
    console.log('SET_RENDERER', value)
    state.ssr = value
  },
  SET_CITY (state, value) {
    console.log('SET_CITY', value)
    state.city = value
  }
}
