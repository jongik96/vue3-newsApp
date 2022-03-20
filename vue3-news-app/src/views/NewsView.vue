<template>
  <div>
    <!-- <div>NewsView</div>
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
      news: [],
    });

    // vuex 사용하기 위해 호출해야함
    const store = useStore();

    // store-actions 의 api 실행
    onMounted(() => {
      context.emit("on:progress");
      store.dispatch("FETCH_NEWS");
      context.emit("off:progress");
      //   state.news = store.state.news;
    });

    return { state };
  },
});
</script>

<style></style>
