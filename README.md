# VueJS 3 ) HackerRank NewsWebApp 제작을 통한 Composition API 학습

#### 전체코드는 아래 링크를 통해 Github 에서 확인하실 수 있습니다.

[Github 바로가기](https://github.com/jongik96/vue3-newsApp)

## 실행화면

Vue 2 로 제작한 NewsWebApp 과 동일합니다.

![](https://images.velog.io/images/pji3504/post/e46f42c0-60ad-447c-b5db-41639ec84a5e/ezgif.com-gif-maker%20(5).gif)

## 학습 내용

### Router - transition

Vue 3 에서도 라우터 트랜지션을 활용할 수 있습니다.

#### Vue 2

```
<transition name="routing-fade" mode="out-in">
      <router-view></router-view>
</transition>
<!-- css 생략 -->
```

Vue2 에서는 위와 같이 transition 태그 안에 router-view 태그가 들어있는 형식이었습니다.  
하지만 Vue3 부터는 `v-slot` 과 함께 아래와 같은 형식으로 쓰입니다.

#### Vue 3

```
<router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>

<!-- css 생략 -->
```

### Router 속성 이용하기

User 페이지 구현을 위해 Route 의 params 속성을 이용해야 했습니다.  
Vue2 에서는 `this.$route.params` 를 이용해 params 속성을 바로 가져올 수 있었습니다.

하지만 Composition API 에서는 방식이 달랐습니다.

-   UserView.vue

```
import { useRoute } from "vue-router";
export default {
  setup(){
     const route = useRoute();
    onMounted(() => {
      console.log("params : " + route.params);
      console.log("name : " + route.name);
      console.log("path : " + route.path);
      const userId = route.params.id;
      store.dispatch("FETCH_USER", userId);
    });
  }
}
```

![](https://images.velog.io/images/pji3504/post/6a5b4be5-adea-42d7-8406-daae876eb442/image.png)

vue-router 의 useRoute 속성을 import 한 뒤 router 의 여러 속성들을 가져올 수 있습니다.

---

### store 의 사용

기존에 `this.$store.~` 를 이용해 store 속성을 사용한것처럼 Composition API 에서도 store 속성을 사용하려면 route 와 마찬가지로 useStore 속성을 import 해야합니다.

-   store/index.js

```
import { createStore } from "vuex";
export default createStore({
  state: {
    user: {},
  },
})
```

-   UserView.vue

```
import { useStore } from "vuex";
export default {
  setup(){
     const store = useStore();
    const fetchedUser = computed(() => {
      return store.state.user;
    });
    return { fetchedUser };
  }
}
```

---

#### 참고자료

장기효님의 "Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념" (인프런) 강의를 바탕으로 제작한 HackerRank NewsWebApp 을 Vue 3 버전으로 composition API 를 활용해 다시 제작해보았습니다.

이 외에 Vue3 공식 가이드를 참고했습니다.
