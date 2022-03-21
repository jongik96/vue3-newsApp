<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
// import { useStore } from "vuex";
import ListItem from "../components/ListItem.vue";
export default defineComponent({
  components: {
    ListItem,
  },
  setup() {
    const state = reactive({
      ask: [],
    });
    // const store = useStore();
    onMounted(() => {
      // store.dispatch("FETCH_ASK");
    });

    return { state };
  },
});
</script>

<style></style>
