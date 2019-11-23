import Vue from 'vue'
import { parseISO, format } from 'date-fns'

Vue.filter('formatDate', function (value, pattern) {
  if (value) {
    return format(parseISO(value), pattern)
  }
})

Vue.filter('round', function (value) {
  if (value) {
    return Math.round(value)
  }
})
