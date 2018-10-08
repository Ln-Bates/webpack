{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
import App from './App';
import VueAxios from 'vue-axios';
import Axios from 'axios';
{{#router}}
import router from './router';
{{/router}}

{{#vuex}}  //vuex为true的时候就会写入这些
import store from  './store';
{{/vuex}}

import './assets/css/app.scss';

Vue.use(VueAxios, Axios);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
});
