<template>
  <div class="edit_form">
    <form @submit.prevent="editFormHandler">
      <div>
        <div class="input-field col s12">
          <input
            v-model="worker.fullName"
            id="full_name"
            type="text"
            class="validate"
          />
          <label for="full_name"></label>
        </div>
        <div class="input-field col s12">
          <input
            v-model="worker.birthDate"
            id="birthday"
            type="text"
            class="validate"
          />
          <label for="birthday">Дата рождения</label>
        </div>
        <div class="input-field col s12">
          <textarea
            v-if="worker.description.length < 100"
            v-model="worker.description"
            id="textarea2"
            class="materialize-textarea"
            data-length="100"
          ></textarea>
          <textarea
            v-else
            v-model="worker.description"
            id="textarea2"
            class="materialize-textarea invalid"
            data-length="100"
          ></textarea>

          <label for="textarea2">Описание</label>
          <span class="character-counter"
            >{{ worker.description.length }}/100</span
          >
        </div>
      </div>
      <div class="btns">
        <button type="submit" class="waves-effect waves-light btn-small">
          Сохранить
        </button>
        <RouterLink
          tag="a"
          to="/"
          class="waves-effect waves-light red darken-4 btn-small"
          >Отмена</RouterLink
        >
      </div>
    </form>
  </div>
</template>

<script>
import FormOne from "@/components/FormOne.vue";

export default {
  data() {
    return {};
  },
  computed: {
    workerByIndex() {
      return this.$store.getters.workerByIndex(+this.$route.params.index);
    },
    worker() {
      const worker = {
        fullName: `${this.workerByIndex.lastName} ${
          this.workerByIndex.firstName
        } ${this.workerByIndex.middleName || ""}`,
        birthDate: this.workerByIndex.birthDate,
        description: this.workerByIndex.description,
        id: this.workerByIndex.id,
      };
      return worker;
    },
    validateBirth() {
      const reValidBirth = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
      return reValidBirth.test(String(this.worker.birthDate));
    },
  },
  methods: {
    editFormHandler() {
      this.$store.dispatch("editQuestionary", {
        fullName: this.worker.fullName,
        birthDate: this.worker.birthDate,
        description: this.worker.description,
        id: this.worker.id,
      });
      this.$router.push("/");
    },
  },
  mounted() {
    M.updateTextFields();
  },
  components: { FormOne },
};
</script>

<style lang="scss" scoped>
.edit_form {
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
}
.character-counter {
  float: right;
  font-size: 12px;
}
.btns {
  display: flex;
  justify-content: center;
  .btn-small {
    margin: 0 25px;
    width: 140px;
  }
}

.materialize-textarea {
  height: fit-content;
}
</style>
