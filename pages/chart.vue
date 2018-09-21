<template>
  <section>
    <h2>{{ city.title }}</h2>
    <canvas id="chart" width="300" height="200"></canvas>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Chart'
  },
  async asyncData ({ app, error, params, store }) {
    if (!store.state.city) {
      store.state.city = store.state.cities[0]
    }

    const citycode = store.state.city.toLowerCase()

    store.commit('SET_CITY', citycode)

    const cities = await app.$axios.$get(`/api/location/search/?query=${citycode}`)
    const city = cities[0]
    const weather = await app.$axios.$get(`/api/location/${city.woeid}/`)

    return {
      city: city,
      weather: weather.consolidated_weather
    }
  },
  async mounted () {
    const ctx = document.getElementById('chart')

    const labels = this.weather.map(w => this.$options.filters.formatDate(w.applicable_date, 'dddd'))
    const data = this.weather.map(w => w.the_temp)

    const Chart = await import(/* webpackChunkName: "chart" */ 'chart.js')

    Chart.Line(ctx, {
      data: {
        labels: labels,
        datasets: [{
          label: 'Temp (°C)',
          data: data,
          backgroundColor: 'rgba(255,255,102, 0.2)'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
}
</script>
