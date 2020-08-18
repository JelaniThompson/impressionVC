import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VuePageTransition from 'vue-page-transition';
import VueAgile from 'vue-agile';


Vue.use(VuePageTransition);
Vue.use(VueAgile);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
