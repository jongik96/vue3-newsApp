<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user-circle"></i>
    </div>
    <div class="user-description">
      <slot name="userName"></slot>
      <router-link :to="'/user/' + props.userInfo.user">{{
        props.userInfo.user
      }}</router-link>
      <div class="time">
        {{
          props.userInfo.time_ago || "Joined " + props.userInfo.created + ","
        }}
        <span v-if="props.userInfo.points"
          >, {{ props.userInfo.points }} points</span
        >
        <slot name="userKarma"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  userInfo: {
    type: Object,
  },
});

// import { defineComponent } from "vue";
// export default defineComponent({
//   props: {
//     userInfo: {
//       type: Object,
//     },
//   },
// });
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
