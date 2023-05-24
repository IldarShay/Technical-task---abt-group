<template>
  <div class="edit_form">
    <FormOne></FormOne>
  </div>
</template>

<script>
import FormOne from "@/components/FormOne.vue";

export default {
  components: { FormOne },
};
</script>

<style lang="scss" scoped>
.edit_form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}
</style>
