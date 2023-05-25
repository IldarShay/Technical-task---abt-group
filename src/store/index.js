import { createStore } from "vuex";

export default createStore({
  state: {
    workers: JSON.parse(localStorage.getItem("workers")) || [],
  },
  getters: {
    workerByIndex(state) {
      return (index) => state.workers[index - 1];
    },
  },

  mutations: {
    createQuestionary(state, worker) {
      state.workers.push(worker);
      localStorage.setItem("workers", JSON.stringify(state.workers));
    },
    editQuestionary(state, worker) {
      let workers = [...state.workers];
      let name = worker.fullName.trim().split(" ");
      let index = workers.findIndex((w) => w.id === worker.id);

      workers[index] = {
        firstName: name[1],
        lastName: name[0],
        middleName: name[2] || null,
        birthDate: worker.birthDate,
        description: worker.description,
        id: worker.id,
      };
      state.workers = workers;
      localStorage.setItem("workers", JSON.stringify(state.workers));
    },
    removeQuestionary(state, name) {
      console.log(name);
    },
  },
  actions: {
    createQuestionary({ commit }, worker) {
      commit("createQuestionary", worker);
    },
    editQuestionary({ commit }, worker) {
      commit("editQuestionary", worker);
    },
    removeQuestionary({ commit }, name) {
      commit("removeQuestionary", name);
    },
  },
  modules: {},
});
