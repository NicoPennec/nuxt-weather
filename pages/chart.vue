<template>
  <section>
    <h2>{{ city.title }}</h2>
    <canvas id="chart" width="300" height="200"></canvas>
  </section>
</template>

<script>

import axios from 'axios'

export default {
  head: {
    title: 'Chart'
  },
  async asyncData ({ env, error, isDev, params, store }) {
    if (!store.state.city) {
      store.state.city = store.state.cities[0]
    }

    const citycode = store.state.city.toLowerCase()

    store.commit('SET_CITY', citycode)

    axios.defaults.baseURL = isDev ? env.DEV_API : env.PROD_API

    let { data } = await axios.get(`/api/location/search/?query=${citycode}`)
    let city = data[0]
    let { data: weather } = await axios.get(`/api/location/${city.woeid}/`)

    return {
      city: city,
      weather: weather.consolidated_weather
    }
  },
  async mounted () {
    let ctx = document.getElementById('chart')

    let labels = this.weather.map(w => this.$options.filters.formatDate(w.applicable_date, 'dddd'))
    let data = this.weather.map(w => w.the_temp)

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
