import Vue from "vue";
import App from "./App.vue";
import VueClipboard from "vue-clipboard2";
import showToast from "./utils/toast/index";

Vue.config.productionTip = false;
Vue.use(VueClipboard);
Vue.use(showToast);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
