<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// Импортируем необходимые компоненты Vue Router
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
export default {
  name: "App",
  data() {
    return {
      router: useRouter(),
      isLogined: false,
    };
  },
  components: {
    RouterView,
  }
};
</script>

<style>
/* Стили для вашего приложения */
</style>