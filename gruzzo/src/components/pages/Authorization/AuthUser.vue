<template>
  <div class="register">
    <NavLink to="/">
      <div class="register__logo"></div>
    </NavLink>
    <div class="register__title">Рады вас видеть!</div>
    <form class="register__container" @submit.prevent="handleSubmit">
      <input
        v-model="formData.email"
        type="email"
        name="email"
        class="input"
        placeholder="Почта"
      />
      <input
        v-model="formData.password"
        type="password"
        name="password"
        class="input"
        placeholder="Пароль"
      />
      <button class="register__saved" type="submit">Войти</button>
    </form>
    <div class="register__info">
      <div class="register__span">
        Еще не зарегистрированы?<router-link
          class="register__registr-link"
          to="/register"
        >
          Зарегистрируйтесь
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { login } from "@/components/api/userApi";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const formData = {
  email: "",
  password: "",
};

const handleSubmit = async () => {
  try {
    await login(formData);
    router.push("/");
    store.commit("logined", true);
  } catch (error) {
    console.error("Ошибка при входе:", error);
  }
};
</script>

<style>
@import url(./Auth.scss);
</style>