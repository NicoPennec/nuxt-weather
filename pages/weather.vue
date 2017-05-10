<template>
  <section class="container">

    <h2><nuxt-link to="/weather/">Cities</nuxt-link></h2>

    <ul class="cities">
      <li v-for="city in cities">
        <!--<nuxt-link :to="`/weather/${city | lowercase}`">{{ city }}</nuxt-link>-->
        <nuxt-link :to="'/weather/' + city.code">{{ city.label }}</nuxt-link>
      </li>
    </ul>

    <nuxt-child/>

  </section>
</template>

<script>

  export default {
    asyncData ({ env }) {
      return {
        cities: env.cities.map((city) => {
          return {
            code: city.toLowerCase(),
            label: city
          }
        })
      }
    },
    head: {
      title: 'Weather',
      meta: [
        { hid: 'description', name: 'description', content: 'Weather page description' }
      ]
    }

  }
</script>

<style>
  .container {
    /*
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    */
  }
</style>

