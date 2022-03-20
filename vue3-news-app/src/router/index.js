import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import ItemView from "../views/ItemView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: NewsView,
  },
  {
    path: "/news",
    name: "NewsView",
    component: NewsView,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/jobs",
    name: "JobsView",
    component: JobsView,
  },
  {
    path: "/ask",
    name: "AskView",
    component: AskView,
  },
  {
    path: "/item",
    name: "ItemView",
    component: ItemView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
