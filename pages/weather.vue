<template>
  <section class="row">

    <div class="col">
      <h2>Select Your City 🌍</h2>
      <ul class="cities">
        <li v-for="(city, index) in cities" :key="index">
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
    asyncData ({ store }) {
      return {
        cities: store.state.cities.map((city) => ({
          code: city.toLowerCase(),
          label: city
        }))
      }
    },
    head: {
      title: 'Weather',
      meta: [
        { hid: 'description', name: 'description', content: 'Weather of your city' }
      ],
      link: [
        { rel: 'prefetch', href: '/img/weather/c.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/h.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/hc.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/hr.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/lc.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/lr.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/s.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/sl.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/sn.svg', as: 'image' },
        { rel: 'prefetch', href: '/img/weather/t.svg', as: 'image' }
      ]
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .col {
      flex: 1 1 auto;
    }
  }
</style>

