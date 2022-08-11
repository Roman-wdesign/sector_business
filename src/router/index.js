import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import StartPage from "@/views/StartPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/start",
    name: "start",
    component: StartPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
