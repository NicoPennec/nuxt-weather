<template>
  <div class="container">
    <h2>{{ city.title }} 6-Day Forecast</h2>
    <table class="forecast">
      <tbody>
        <tr v-for="w in weather">
          <td>{{ w.applicable_date | formatDate('dddd') }}</td>
          <td>{{ w.weather_state_name }}</td>
          <td><img class="icon" :src="'/img/weather/' + w.weather_state_abbr + '.svg'"></td>
          <td>{{ w.the_temp | round }}°</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head: {
    title: 'Forecast of {{ city.title }}'
  },
  async asyncData ({ params, env, error, store }) {
    const citycode = env.CITIES.find((city) => city.toLowerCase() === params.citycode)
    if (!citycode) {
      return error({ message: 'City not found', statusCode: 404 })
    }

    store.commit('SET_CITY', citycode)
    // this.$store.commit('SET_CITY', citycode)

    axios.defaults.baseURL = env.API

    let { data } = await axios.get(`/api/location/search/?query=${params.citycode}`)
    let city = data[0]
    let { data: weather } = await axios.get(`/api/location/${city.woeid}/`)

    return {
      city: city,
      weather: weather.consolidated_weather
    }
  }
}
</script>

<style>
.icon {
  width: 32px;
}
.forecast {
  width: 100%;
  border-collapse: collapse;
}
.forecast tr:nth-child(odd) {
  background: #eee;
}
.forecast tr:last-child td {
  border-bottom: 1px solid #eee;
}
.forecast td {
  padding: 1px 5px;
}
</style>
