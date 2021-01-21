import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Home.vue";
import BatterForm from "../components/mlbdata/BatterForm.vue";
import PitcherForm from "../components/mlbdata/PitcherForm.vue";
import BatterData from "../components/mlbdata/BatterData.vue";
import PitcherData from "../components/mlbdata/PitcherData.vue";

Vue.use(VueRouter);

export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/batting", name: "BatterForm", component: BatterForm },
  { path: "/pitching", name: "PitcherForm", component: PitcherForm },
  { path: "/batting/player*", name: "BatterData", component: BatterData },
  { path: "/pitching/player*", name: "PitcherData", component: PitcherData },
  { path: "*", redirect: "/" },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
