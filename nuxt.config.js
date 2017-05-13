module.exports = {
  cache: true,
  router: {
    middleware: 'check-renderer'
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Nuxt Weather',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Weather, just yet another Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/filters'],
  env: {
    DEV_API: 'https://www.metaweather.com',
    PROD_API: '/proxy',
    CITIES: [
      'Ajaccio',
      'Bordeaux',
      'Lille',
      'Lyon',
      'Marseille',
      'Nice',
      'Paris',
      'Toulouse'
    ]
  }
}
