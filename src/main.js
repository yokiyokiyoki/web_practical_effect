import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import VueFullPage from "vue-fullpage.js";

Vue.use(VueFullPage);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
