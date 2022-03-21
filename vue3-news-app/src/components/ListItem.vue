<template>
  <ul class="news-list">
    <li v-for="news in listItems" :key="news.id" class="post">
      <div class="points">
        {{ news.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">{{ news.title }}</a
            ><small class="link-text" v-if="news.domain"
              >({{ news.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link
            ><small
              ><a class="link-text" :href="news.domain" v-if="news.domain"
                >({{ news.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="news.user" class="link-text">
          by
          <router-link :to="`/user/${news.user}`" class="link-text">{{
            news.user
          }}</router-link>
        </small>
        <small v-if="news.time_ago" class="link-text">
          {{ news.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
// console.log("경로 : " + route.path);
const listItems = computed(() => {
  if (route.path === "/news") {
    return store.state.news;
  } else if (route.path === "/ask") {
    return store.state.ask;
  } else if (route.path === "/jobs") {
    return store.state.jobs;
  }
  // eslint return 에러 방지용
  else {
    return 0;
  }
});
// export default defineComponent({
//   setup() {
//     const store = useStore();
//     const route = useRoute();
//     // console.log("경로 : " + route.path);
//     const listItems = computed(() => {
//       if (route.path === "/news") {
//         return store.state.news;
//       } else if (route.path === "/ask") {
//         return store.state.ask;
//       } else if (route.path === "/jobs") {
//         return store.state.jobs;
//       }
//       // eslint return 에러 방지용
//       else {
//         return 0;
//       }
//     });
//     return { listItems };
//   },
// });
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
