<template>
  <div class="app">
    <renderer :ssr="$store.state.ssr"/>
    <header>
      <h1>
        <img src="/img/weather/lc.svg" alt="Logo Nuxt Weather" style="width: 32px; margin-right: 10px;">
        Nuxt Weather
      </h1>
    </header>
    <navigation/>
    <section class="main">
      <nuxt/>
    </section>
    <footer>
      Powered by <a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a> & <a href="https://www.metaweather.com" target="_blank" rel="noopener">MetaWeather</a>
    </footer>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue'
  import Renderer from '@/components/Renderer'

  export default {
    components: {
      Navigation,
      Renderer
    }
  }
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 5px 20px;
}
.button--green:hover,
.button--green.nuxt-link-active:not(:first-child),
nav .nuxt-link-exact-active
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 5px 20px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}

.app {
  max-width: 768px;
  margin: 10px auto;
}

header h1 {
  margin: 20px 0;
  letter-spacing: -2.5px;
  text-shadow: 0 0 1px #c88c32;
}

nav {
  display: block;
  margin: 20px 0;
}

nav a + a {
  margin-left: 10px;
}

pre {
  background: #eee;
  padding: 10px;
  border-radius: 10px;
}

h2 {
  margin: 10px 0;
}

footer {
  border-top: 1px dotted #ccc;
  margin: 50px 0 20px;
}
</style>
