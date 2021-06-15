import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//import Home from "./components/views/home.vue"
import Header from "./components/template/header.vue"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  components: { Header},
  render: (h) => h(App),
}).$mount("#app");
