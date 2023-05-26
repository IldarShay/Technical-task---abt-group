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
      // let validName = name.length > 1;
      // let reValidBirth = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
      // let validBirth = reValidBirth.test(String(worker.birthDate));
      // if (!validName) {
      //   alert("Введите фамилию и имя");
      //   return false;
      // }
      // if (!validBirth) {
      //   alert("Введите корректную дату рождения в формате ГГГГ-ММ-ДД");
      //   this.$router.push(`/edit_form/${index}`);
      //   return false;
      // }
      // if (worker.description.length > 100) {
      //   alert("Описание должно содержать до 100 символов");
      //   return false;
      // }

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
    removeQuestionary(state, idx) {
      let workers = [...state.workers];
      workers.splice(idx, 1);
      state.workers = workers;
      localStorage.setItem("workers", JSON.stringify(state.workers));
    },
    cancelEdit(state) {},
  },
  actions: {
    createQuestionary({ commit }, worker) {
      commit("createQuestionary", worker);
    },
    editQuestionary({ commit }, worker) {
      commit("editQuestionary", worker);
    },
    removeQuestionary({ commit }, idx) {
      commit("removeQuestionary", idx);
    },
    cancelEdit({ commit }) {
      commit("cancelEdit");
    },
  },
  modules: {},
});
