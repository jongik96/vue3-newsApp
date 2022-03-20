<template>
  <div>
    <div>AskView</div>
    <div>
      <ul>
        <li v-for="(askItem, index) in state.ask" :key="index">
          <div>
            <p>
              {{ askItem.points || 0 }}
              {{ askItem.title }}
              <span> {{ askItem.user }} </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
import { fetchAsk } from "../api/index.js";
export default defineComponent({
  setup() {
    const state = reactive({
      ask: [],
    });

    onMounted(() => {
      fetchAsk()
        .then((res) => {
          console.log(res);
          state.ask = res.data;
        })
        .catch((err) => console.log(err));
    });

    return { state };
  },
});
</script>

<style></style>
