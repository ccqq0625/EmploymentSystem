import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './assets/css/reset.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import htmlToPdf from './utils/htmlToPdf'//页面转PDF
Vue.use(htmlToPdf)

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
