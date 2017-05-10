<template>
  <section>
    <h2>Home Sweet Home!</h2>
    <div class="renderer">Renderer => {{ renderer }}</div>
  </section>
</template>

<script>
  export default {
    asyncData ({ isServer }) {
      return {
        renderer: isServer ? 'Server' : 'Client'
      }
    }
  }
</script>
