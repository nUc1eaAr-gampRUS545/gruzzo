
<template>
  <div className="register">
    <NavLink to="/">
      <div className="register__logo"></div>
    </NavLink>
    <div className="register__title">Добро пожаловать!</div>
    <form className="register__container" @submit.prevent="handleSubmit()">
      <input type="text" v-model="formData.name" name="name" placeholder="Имя" class="input" />

      <input type="text" v-model="formData.surname" name="surname" class="input" placeholder="Фамилия" />

      <input type="text" v-model="formData.avatar" name="avatar" class="input" placeholder="Фото" />
      <input type="email" v-model="formData.email" name="email" class="input" placeholder="Почта" />
      <input
        type="password"
        name="password"
        class="input"
        v-model="formData.password"
        placeholder="Пароль"
      />
      <button class="register__saved" type="submit">Зарегестрироваться</button>
    </form>
    <div className="register__info">
      <div className="register__span">
        Уже зарегистрированы?<router-link
          className="register__registr-link"
          to="/login"
        >
          Войти
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { registration } from "@/components/api/userApi";
const router = useRoute();
export default {
  name: "RegisterForm",
  data() {
    return {
      formData: {
        name: "",
        surname: "",
        avatar: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
   handleSubmit() {
     registration(this.formData)
        .then(() => {
          router.push("/login");
        })
        .catch(() => {
          console.log("Иди нахуй");
        });
    },
  },
};
</script>
<style>
@import url(./Auth.scss);
</style>