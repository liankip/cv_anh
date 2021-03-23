import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //import router.js into main.js
require("@/assets/main.scss");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
