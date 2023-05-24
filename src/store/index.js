import { createStore } from "vuex";

export default createStore({
  state: {
    workers: JSON.parse(localStorage.getItem("workers")) || [],
  },
  getters: {},

  mutations: {
    createQuestionary(state, worker) {
      state.workers.push(worker);
      localStorage.setItem("workers", JSON.stringify(state.workers));
    },
  },
  actions: {
    createQuestionary({ commit }, worker) {
      commit("createQuestionary", worker);
    },
  },
  modules: {},
});
