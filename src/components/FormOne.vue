<template>
  <form @submit.prevent="formHandler">
    <div>
      <div class="input-field col s12">
        <input v-model="fullName" id="full_name" type="text" class="validate" />
        <label for="full_name">ФИО</label>
      </div>
      <div class="input-field col s12">
        <input v-model="birthDate" id="birthday" type="text" class="validate" />
        <label for="birthday">Дата рождения</label>
      </div>
      <div class="input-field col s12">
        <textarea
          v-if="description.length < 100"
          v-model="description"
          id="textarea2"
          class="materialize-textarea"
          data-length="100"
        ></textarea>
        <textarea
          v-else
          v-model="description"
          id="textarea2"
          class="materialize-textarea invalid"
          data-length="100"
        ></textarea>

        <label for="textarea2">Описание</label>
        <span class="character-counter">{{ description.length }}/100</span>
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
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      birthDate: "",
      description: "",
      validName: "",
      validBirth: null,
      show: false,
    };
  },
  computed: {
    validateBirth() {
      const reValidBirth = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
      return reValidBirth.test(String(this.birthDate));
    },
  },
  methods: {
    formHandler() {
      const name = this.fullName.trim().split(" ");
      this.validName = name.length > 1;
      if (!this.validName) {
        alert("Введите фамилию и имя");
        return false;
      }
      if (!this.validateBirth) {
        alert("Введите дату рождения в формате ГГГГ-ММ-ДД");
        return false;
      }
      const worker = {
        // id: Date.now(),
        firstName: name[1],
        lastName: name[0],
        middleName: name[2] || null,
        birthDate: this.birthDate,
        description: this.description || null,
      };
      console.log(worker.firstName);
      this.$store.dispatch("createQuestionary", worker);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: 70%;
  margin: 0 auto;
}

.character-counter {
  float: right;
  font-size: 12px;
}
.materialize-textarea .invalid {
  height: 40px;
}
.btns {
  display: flex;
  justify-content: center;
  .btn-small {
    margin: 0 25px;
    width: 140px;
  }
}
</style>
