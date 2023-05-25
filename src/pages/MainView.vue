<template>
  <div class="main">
    <div class="btns">
      <RouterLink to="/create_form" class="waves-effect waves-light btn-small"
        >Добавить запись</RouterLink
      >
    </div>
    <table class="highlight">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Отчество</th>
          <th>Дата рождения</th>
          <th>Описание</th>
          <th class="th_action">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(worker, i) in $store.state.workers" :key="i + 1" ref="key">
          <td>{{ worker.firstName }}</td>
          <td>{{ worker.lastName }}</td>
          <td>{{ worker.middleName }}</td>
          <td>{{ worker.birthDate }}</td>
          <td>{{ worker.description }}</td>
          <td class="td_icons">
            <RouterLink tag="button" :to="'/edit_form/' + (i + 1)">
              <i title="Редактировать" class="tiny material-icons">edit</i>
            </RouterLink>
            <a href="#" class="removeIcon" @click="handler">
              <i
                title="Удалить"
                class="tiny material-icons modal-trigger"
                href="#modal1"
                ref="modal"
              >
                delete
              </i>
            </a>
          </td>
        </tr>
        <!-- <div id="modal1" class="modal">
          <div class="modal-content">
            <h6>Запись будет удалена. Уверены ?</h6>
          </div>
          <div class="modal-footer">
            <button
              href="#!"
              class="modal-close waves-effect waves-green btn-flat"
              @click="console.log(document.querySelector('.removeIcon'))"
            >
              Ок
            </button>
            <a href="#!" class="modal-close waves-effect waves-green btn-flat"
              >Отмена
            </a>
          </div>
        </div> -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    handler(event) {
      let tr = event.target.closest("tr");
      let fullName =
        tr.children[1].textContent +
          tr.children[0].textContent +
          tr.children[2].textContent || "";
      if (confirm("Запись будет удалена. Уверены?")) {
        this.$store.dispatch("removeQuestionary", fullName);
      } else return false;
    },
  },
  mounted() {
    // M.Modal.init(modal1);
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btns {
  margin: auto;
  padding: 25px 0;
  .btn {
    margin: 0 25px;
  }
}
table {
  margin: auto;
  width: 80%;
  th {
    text-align: center;
  }
  td {
    max-width: 320px;
    overflow-wrap: break-word;
  }
}
.td_icons {
  display: flex;
  justify-content: space-around;
  .material-icons {
    cursor: pointer;
  }
}
</style>
