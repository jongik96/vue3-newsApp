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
  setup() {
    const state = reactive({
      jobs: [],
    });
    const store = useStore();
    onMounted(() => {
      store.dispatch("FETCH_JOBS");
      state.jobs = store.state.jobs;
    });

    return { state };
  },
});
</script>

<style></style>
