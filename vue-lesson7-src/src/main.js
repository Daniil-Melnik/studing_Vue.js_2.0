import Vue from 'vue';
import App from './App.vue';

import {store} from './store';

import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
