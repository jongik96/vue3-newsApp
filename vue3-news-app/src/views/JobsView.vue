<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
// import { useStore } from "vuex";
import ListItem from "../components/ListItem.vue";
// import bus from "../utils/bus.js";
export default defineComponent({
  components: {
    ListItem,
  },
  setup() {
    const state = reactive({
      jobs: [],
    });
    // const store = useStore();
    onMounted(() => {
      // store.dispatch("FETCH_JOBS");
      //   state.jobs = store.state.jobs;
    });

    return { state };
  },
});
</script>

<style></style>
