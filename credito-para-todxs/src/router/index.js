import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/views/home.vue";
import Credit from "../components/views/credit.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Credito-Pessoal",
    name: "Emprestimos",
    component: Credit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
