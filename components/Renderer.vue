<template>
  <div class="renderer" :class="[ ssr ? 'renderer--ssr' : 'renderer--csr' ]">
    <span v-if="ssr">Server-Side Rendering</span>
    <span v-else>Client-Side Rendering</span>
  </div>
</template>

<script>
  export default {
    props: ['ssr']
  }
</script>

<style scoped>
  .renderer {
    opacity: .75;
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    border-radius: 15px;
    color: white;
    font-weight: bold;
  }
  .renderer--ssr {
    background-color: #113f6d;
  }
  .renderer--csr {
    background-color: #3b8070;
  }
</style>
