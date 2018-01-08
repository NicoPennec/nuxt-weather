export default function ({ store }) {
  if (store.state.ssr === process.server) {
    return
  }
  store.commit('SET_RENDERER', process.server)
}
