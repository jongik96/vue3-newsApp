import { createStore } from "vuex";
import getters from "./getters.js";
import mutations from "./mutations";
import actions from "./actions.js";

export default createStore({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters,
  mutations,
  actions,
});
