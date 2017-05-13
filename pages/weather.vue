<template>
  <section class="row">

    <div class="col">
      <h2>Select Your City 🌍</h2>
      <ul class="cities">
        <li v-for="city in cities">
          <nuxt-link :to="'/weather/' + city.code">{{ city.label }}</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="col">
      <nuxt-child/>
    </div>

  </section>
</template>

<script>
  export default {
    asyncData ({ env }) {
      return {
        cities: env.CITIES.map((city) => ({
          code: city.toLowerCase(),
          label: city
        }))
      }
    },
    head: {
      title: 'Weather',
      meta: [
        { hid: 'description', name: 'description', content: 'Weather of your city' }
      ]
    }
  }
</script>

<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .row > .col {
    flex: 1 1 auto;
  }
</style>

