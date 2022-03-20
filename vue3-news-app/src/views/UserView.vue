<template>
  <div>UserView</div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { fetchNews } from "../api/index.js";
export default defineComponent({
  setup() {
    onMounted(() => {
      fetchNews()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });

    return {};
  },
});
</script>

<style></style>
