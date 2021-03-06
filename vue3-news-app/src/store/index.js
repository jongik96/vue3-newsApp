import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions.js";

export default createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
  },
  mutations,
  actions,
});
