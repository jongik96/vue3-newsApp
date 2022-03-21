<template>
  <div class="home">
    <section class="header-container">
      <UserProfile :user-info="askItem"></UserProfile>
    </section>
    <section>
      <h2>{{ askItem.title }}</h2>
      <div v-html="askItem.content" class="content"></div>
    </section>
    <section>
      <h3>Comments</h3>
      <div v-for="item in askItem.comments" :key="item.id" class="content">
        <UserProfile :user-info="item"></UserProfile>
        <div v-html="item.content"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import UserProfile from "../components/UserProfile.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

onMounted(() => {
  const itemId = route.params.id;
  store.dispatch("FETCH_ITEM", itemId);
});

const askItem = computed(() => {
  return store.state.item;
});
// export default defineComponent({
//   components: { UserProfile },
//   setup() {
// const store = useStore();
// const route = useRoute();
//     onMounted(() => {
//       const itemId = route.params.id;
//       store.dispatch("FETCH_ITEM", itemId);
//     });

//     const askItem = computed(() => {
//       return store.state.item;
//     });

//     return { askItem };
//   },
// });
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
