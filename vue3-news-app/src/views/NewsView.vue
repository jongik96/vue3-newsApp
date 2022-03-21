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
    // vuex 사용하기 위해 호출해야함
    // const store = useStore();

    // store-actions 의 api 실행
    onMounted(() => {
      // store.dispatch("FETCH_NEWS");
    });
    const state = reactive({
      news: [],
    });

    return { state };
  },
});
</script>

<style></style>
