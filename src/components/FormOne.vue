<template>
  <div class="row">
    <div class="input-field col s12">
      <input
        autofocus="true"
        value=""
        id="full_name"
        type="text"
        class="validate"
      />
      <label for="full_name">ФИО</label>
    </div>
    <div class="input-field col s12">
      <input value="" id="birthday" type="text" class="validate" />
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

      <label for="textarea2">Textarea</label>
      <span class="character-counter">{{ description.length }}/100</span>
    </div>
  </div>
  <div class="btns">
    <a class="waves-effect waves-light btn-small">Сохранить</a>
    <RouterLink
      tag="a"
      to="/"
      class="waves-effect waves-light red darken-4 btn-small"
      >Отмена</RouterLink
    >
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      description: "",
    };
  },
};
</script>

<style lang="scss" scoped>
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
