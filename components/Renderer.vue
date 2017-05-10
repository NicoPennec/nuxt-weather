<template>
  <div class="renderer">Renderer => {{ renderer }}</div>
</template>

<script>
  export default {
    data (data) {
      console.log(data)
      return {
        renderer: true // isClient ? 'Server' : 'Client'
      }
    }

    // asyncData ({ req }) {
    //   console.log(req)
    //   return {
    //     renderer: req ? 'Server' : 'Client'
    //   }
    // }
  }
</script>
