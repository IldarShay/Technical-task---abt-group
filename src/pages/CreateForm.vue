<template>
  <div class="create_form">
    <FormOne></FormOne>
  </div>
</template>

<script>
import FormOne from "@/components/FormOne.vue";

// @ is an alias to /src

export default {
  components: { FormOne },
};
</script>

<style lang="scss" scoped>
.create_form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}
</style>
