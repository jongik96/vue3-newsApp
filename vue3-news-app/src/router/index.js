import { createRouter, createWebHistory } from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/news",
  },
  {
    path: "/news",
    name: "NewsView",
    component: NewsView,
    beforeEnter: (to, from, next) => {
      store.dispatch("FETCH_NEWS", to.name).then(() => {
        next();
      });
    },
  },
  {
    path: "/jobs",
    name: "JobsView",
    component: JobsView,
    beforeEnter: (to, from, next) => {
      store.dispatch("FETCH_JOBS", to.name).then(() => {
        next();
      });
    },
  },
  {
    path: "/ask",
    name: "AskView",
    component: AskView,
    beforeEnter: (to, from, next) => {
      store.dispatch("FETCH_ASK", to.name).then(() => {
        next();
      });
    },
  },
  {
    path: "/item/:id",
    name: "ItemView",
    component: ItemView,
  },
  {
    path: "/user/:id",
    name: "UserView",
    component: UserView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
