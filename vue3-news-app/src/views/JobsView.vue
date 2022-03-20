<template>
  <div>
    <!-- <div>JobsView</div>
    <div>
      <ul>
        <li v-for="(jobsItem, index) in state.jobs" :key="index">
          <div v-if="jobsItem.points">{{ jobsItem.points || 0 }}</div>
          <p>
            {{ jobsItem.title }}
            <span> {{ jobsItem.domain }} {{ jobsItem.user }} </span>
          </p>
        </li>
      </ul>
    </div> -->
    <list-item></list-item>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import ListItem from "../components/ListItem.vue";
export default defineComponent({
  components: {
    ListItem,
  },
  setup(props, context) {
    const state = reactive({
      jobs: [],
    });
    const store = useStore();
    onMounted(() => {
      context.emit("on:progress");
      store.dispatch("FETCH_JOBS");
      context.emit("off:progress");
      //   state.jobs = store.state.jobs;
    });

    return { state };
  },
});
</script>

<style></style>
