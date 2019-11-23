<template>
  <div class="container">
    <h2>{{ city.title }} 6-Day Weather Forecast</h2>
    <table class="forecast">
      <tbody>
        <tr v-for="w in weather" :key="w.id">
          <td>{{ w.applicable_date | formatDate('eeee') }}</td>
          <td>{{ w.weather_state_name }}</td>
          <td><img class="icon" :src="`/img/weather/${w.weather_state_abbr}.svg`" :alt="w.weather_state_name"></td>
          <td>{{ w.the_temp | round }}°</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: `Forecast of ${this.city.title}`
    }
  },
  async asyncData ({ app, error, params, store }) {
    const citycode = store.state.cities.find((city) => city.toLowerCase() === params.citycode)
    if (!citycode) {
      return error({ customMessage: `City « ${params.citycode} » not found...`, statusCode: 404 })
    }

    store.commit('SET_CITY', citycode.toLowerCase())

    const cities = await app.$axios.$get(`/api/location/search/?query=${citycode}`)
    const city = cities[0]
    const weather = await app.$axios.$get(`/api/location/${city.woeid}/`)

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
