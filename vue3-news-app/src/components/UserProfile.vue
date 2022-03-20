<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user-circle"></i>
    </div>
    <div class="user-description">
      <slot name="userName"></slot>
      <router-link :to="'/user/' + userInfo.user">{{
        userInfo.user
      }}</router-link>
      <div class="time">
        {{ userInfo.time_ago || "Joined " + userInfo.created + "," }}
        <span v-if="userInfo.points">, {{ userInfo.points }} points</span>
        <slot name="userKarma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import { useStore } from "vuex";
export default defineComponent({
  props: {
    userInfo: {
      type: Object,
    },
  },
  setup() {
    // const store = useStore();
  },
});
</script>

<style scoped>
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
  color: #828282;
}
</style>
