import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VuePageTransition from 'vue-page-transition'
import VueAgile from 'vue-agile'

Vue.use(VuePageTransition)
Vue.use(VueAgile)

// Cookie configuration for displaying the loading overlay
Vue.use(require('vue-cookies'))

Vue.$cookies.config('7d')
Vue.$cookies.set("loading-overlay", "firstVisit", "10s");

Vue.$cookies.isKey('loading-overlay')
console.log(Vue.$cookies.isKey('loading-overlay'))

// Trigger after a minute to see if the expiration worked
// setTimeout(() => {
//   console.log(Vue.$cookies.isKey('loading-overlay'))
// }, 70000);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
