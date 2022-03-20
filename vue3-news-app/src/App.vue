<template>
  <div>
    <progress-bar :loading="state.loading"></progress-bar>
    <ToolBar></ToolBar>
    <router-view
      @off:progress="offProgress"
      @on:progress="onProgress"
      v-slot="{ Component }"
    >
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { reactive } from "vue";
import ToolBar from "./components/ToolBar.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  components: { ToolBar, ProgressBar },

  setup() {
    const state = reactive({
      loading: false,
    });

    const onProgress = () => {
      state.loading = true;
    };

    const offProgress = () => {
      state.loading = false;
    };

    return { state, onProgress, offProgress };
  },
};
</script>

<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
