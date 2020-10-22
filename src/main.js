import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store1 from "./store/index";
import {BootstrapVue} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from "vuex";
Vue.use(BootstrapVue)
Vue.use(Vuex);
Vue.config.productionTip = false;
export const store = new Vuex.Store(
  store1
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
