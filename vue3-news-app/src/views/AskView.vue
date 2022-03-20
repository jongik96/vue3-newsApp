<template>
  <div>
    <!-- <div>AskView</div>
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
      ask: [],
    });
    const store = useStore();
    onMounted(() => {
      context.emit("on:progress");
      store.dispatch("FETCH_ASK");
      context.emit("off:progress");
      //   state.ask = store.state.ask;
    });

    return { state };
  },
});
</script>

<style></style>
