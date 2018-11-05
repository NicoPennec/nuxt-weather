<template>
  <div class="container">
    <h3 v-if="error.customMessage">{{ error.customMessage }}</h3>
    <h3 v-else-if="error.statusCode === 404">Page not found...</h3>
    <h3 v-else>Sorry, an error occurred :-(</h3>
    <nuxt-link to="/">Back to the home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
h3 {
  padding: 10px 0 40px;
}
</style>
