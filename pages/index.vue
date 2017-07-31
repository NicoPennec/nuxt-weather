<template>
  <section>
    <h2>Check My State 💥</h2>
    <pre>state = {{ $store.state }}</pre>
  </section>
</template>

<script>
  import Renderer from '@/components/Renderer'

  export default {
    components: {
      Renderer
    },
    head: {
      title: 'Home'
    }
  }
</script>
