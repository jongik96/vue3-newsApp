<template>
  <div>
    <div>JobsView</div>
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
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
import { fetchJobs } from "../api/index.js";
export default defineComponent({
  setup() {
    const state = reactive({
      jobs: [],
    });

    onMounted(() => {
      fetchJobs()
        .then((res) => {
          console.log(res);
          state.jobs = res.data;
        })
        .catch((err) => console.log(err));
    });

    return { state };
  },
});
</script>

<style></style>
