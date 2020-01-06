import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

import AOS from 'aos'

Vue.config.productionTip = false

new Vue({
  vuetify,
  created() {
    AOS.init({ disable: 'phone' })
  },
  render: h => h(App)
}).$mount('#app')
