<template>
  <div>
    <div>NewsView</div>
    <div>
      <ul>
        <li v-for="(newsItem, index) in state.news" :key="index">
          <div>
            <p>
              {{ newsItem.points || 0 }}
              {{ newsItem.title }}
              <span> {{ newsItem.domain }} {{ newsItem.user }} </span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";
import { fetchNews } from "../api/index.js";
export default defineComponent({
  setup() {
    const state = reactive({
      news: [],
    });

    onMounted(() => {
      fetchNews()
        .then((res) => {
          console.log(res);
          state.news = res.data;
        })
        .catch((err) => console.log(err));
    });

    return { state };
  },
});
</script>

<style></style>
