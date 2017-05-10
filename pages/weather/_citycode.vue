<template>
  <div class="container">
    <h2>{{ city.title }}</h2>
    <table class="forecast">
      <tbody>
        <tr v-for="w in weather">
          <td>{{ w.applicable_date | formatDate('dddd') }}</td>
          <td>{{ w.weather_state_name }}</td>
          <td><img class="icon" :src="'/img/weather/' + w.weather_state_abbr + '.svg'"></td>
        </tr>
      </tbody>
    </table>
    <!--<pre>{{ weather }}</pre>-->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /*
  validate ({ params }) {
    console.log(params)
    return true
    // return !isNaN(+params.id)
  },
  */
  async asyncData ({ params, env, error }) {
    const citycode = env.cities.find((city) => city.toLowerCase() === params.citycode)
    if (!citycode) {
      return error({ message: 'City not found', statusCode: 404 })
    }

    // let { data: city } = await axios.get(`https://www.metaweather.com/api/location/search/?query=${params.citycode}`)
    let { data } = await axios.get(`https://www.metaweather.com/api/location/search/?query=${params.citycode}`)
    let city = data[0]
    let weather = await axios.get(`https://www.metaweather.com/api/location/${city.woeid}`)

    return {
      city: city,
      weather: weather.data.consolidated_weather
    }
  }
}
</script>

<style>
.icon {
  width: 32px;
}
.forecast {
  min-width: 400px;
}
.forecast tr + tr td {
  border-top: 1px dotted #ccc;
}
</style>
