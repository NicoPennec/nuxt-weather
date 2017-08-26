<template>
</template>

<script>
  export default {
    fetch ({ redirect, store }) {
      // if city set, redirect to its weather page
      if (store.state.city) {
        redirect(`/weather/${store.state.city}`)
      }
    }
  }
</script>
