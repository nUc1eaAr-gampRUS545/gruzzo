<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// Импортируем необходимые компоненты Vue Router
import { RouterView } from "vue-router";
import { useRouter } from "vue-router";
import { check } from "./api/userApi";
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
  },
  mounted() {
    check().then(() => {
      this.router.push("/")
    }).catch(()=>{
      this.router.push("/login")
    })
  },
};
</script>

<style>
/* Стили для вашего приложения */
</style>