<script>
  export default {
    asyncData ({ redirect, store }) {
      // if city redirect
      if (store.state.city) {
        redirect(`/weather/${store.state.city}`)
      }
      return {}
    }
  }
</script>
