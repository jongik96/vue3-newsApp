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
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const state = reactive({
      ask: [],
    });
    const store = useStore();
    onMounted(() => {
      store.dispatch("FETCH_ASK");
      state.ask = store.state.ask;
    });

    return { state };
  },
});
</script>

<style></style>
