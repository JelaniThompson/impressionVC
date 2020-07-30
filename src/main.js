import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VuePageTransition from 'vue-page-transition';
import VueCarousel from 'vue-carousel';


Vue.use(VuePageTransition);
Vue.use(VueCarousel); // This will make <carousel> and <slide> available to all components within your Vue app

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
