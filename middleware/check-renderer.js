export default function ({ store, isServer }) {
  if (store.state.ssr === isServer) {
    return
  }
  store.commit('SET_RENDERER', isServer)
}
