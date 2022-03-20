<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :userInfo="fetchedUser">
      <template v-slot:userName>
        <div>{{ fetchedUser.id }}</div>
      </template>
      <template v-slot:userKarma
        ><span>{{ fetchedUser.karma }}</span> karma</template
      >
    </user-profile>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed } from "vue";
import UserProfile from "../components/UserProfile.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    UserProfile,
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    onMounted(() => {
      const userId = route.params.id;
      store.dispatch("FETCH_USER", userId);
    });

    const fetchedUser = computed(() => {
      return store.state.user;
    });

    return { fetchedUser };
  },
});
</script>

<style></style>
