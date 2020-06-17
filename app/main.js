import VueDevtools from 'nativescript-vue-devtools'
import Vue from 'nativescript-vue'
import App from './components/App'
import axios from 'axios'

import store from './store'
import Footer from './components/shared/Footer.vue'

// import { Gif } from 'nativescript-gif';

Vue.use(VueDevtools, { host: '192.168.1.147' })
Vue.use(axios)

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('Gif', ()=> require('nativescript-gif').Gif)
Vue.component('Footer', Footer)

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
