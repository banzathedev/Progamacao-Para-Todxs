import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/views/home.vue";
import Credit from "../components/views/credit.vue"
import About from "../components/views/About.vue"
import Proposal from "../components/views/Proposal.vue"
import Buy from "../components/views/Buying.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Início",
    component: Home,
  },
  {
    path: "/Credito-Pessoal",
    name: "Emprestimos",
    component: Credit,
  },
  {
    path: "/Sobre",
    name: "Sobre",
    component: About,
  },
  {
    path: "/Propostas",
    name: "Propostas",
    component: Proposal,
  },
  {
    path: "/Contratacao-Form",
    name: "Contratação",
    component: Buy
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
