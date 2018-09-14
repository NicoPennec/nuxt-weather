import Vue from 'vue'
import { parse, format } from 'date-fns'

Vue.filter('formatDate', function (value, pattern) {
  if (value) {
    return format(parse(value), pattern)
  }
})

Vue.filter('round', function (value) {
  if (value) {
    return Math.round(value)
  }
})
