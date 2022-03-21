import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
} from "../api/index.js";
export default {
  FETCH_NEWS({ commit }) {
    return fetchNews().then((response) => commit("SET_NEWS", response.data));
  },
  // FETCH_NEWS({ commit }) {
  //   fetchNews()
  //     .then((response) => {
  //       commit("SET_NEWS", response.data);
  //     })
  //     .catch((err) => console.log(err));
  // },
  FETCH_ASK({ commit }) {
    return fetchAsk().then((response) => commit("SET_ASK", response.data));
  },

  // async-await
  async FETCH_JOBS({ commit }) {
    const response = await fetchJobs();
    commit("SET_JOBS", response.data);
    return response;
    // return fetchJobs().then((response) => commit("SET_JOBS", response.data));
  },
  FETCH_USER({ commit }, userId) {
    return fetchUser(userId).then((res) => commit("SET_USER", res.data));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId).then((res) => commit("SET_ITEM", res.data));
  },
};
