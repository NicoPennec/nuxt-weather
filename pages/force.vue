<template>
  <section>
    <h2>Force <abbr title="Server-Side Rendering">SSR</abbr> ⚙️</h2>
    <p>This page is always rendering from server!</p>
    <p>But the current menu navigation is lost...</p>
    <!--<p>&lt;nuxt-link "ssr=false"&gt; should be ready for Nuxt.js v1.0</p>-->
  </section>
</template>

<script>
  export default {
    head: {
      title: 'Force Server-Side Rendering'
    }
  }
</script>
