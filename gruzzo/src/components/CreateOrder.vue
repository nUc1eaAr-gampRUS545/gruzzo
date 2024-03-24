<script setup>
import { onMounted, ref, watch } from "vue";
import DropDownPrimeVue from "./Inputs/DropDown.vue";
import CalendarPrimeVue from "./Inputs/CalendarPrimeVue.vue";
import InputNumberPrimeVue from "./Inputs/InputNumber.vue";
//import CascadeSelectPrimeVue from "./Inputs/CascadeSelect.vue";
import CaruselProject from "./Inputs/Carusel.vue";
import inputStreet from "./Inputs/inputStreet.vue"
import InputPhone from "./Inputs/InputMask.vue";
import InputOption from "./Inputs/InputOptions.vue";
import ButtonSaved from "./Inputs/ButtonSaved.vue";
import { useStore } from "vuex";
import { createOrder } from "./api/apiTickets";
import SeccessMessage from "./Messages/SeccessMessage.vue";
import ErrorMessage from "./Messages/ErrorMessage.vue";
import { formData } from "@/constants/formTicket";
import { useRouter } from "vue-router";
const store = useStore();
let isSeccessMessageShow = ref(false);
let isErrorMessageShow = ref(false);
const router = useRouter();
const calculatePrice = () => {
  formData.price.value = Math.floor(
    formData.gazelle.price * (formData.niggers / 10) * formData.hours
  );
};

watch([formData.gazelle, formData.niggers, formData.hours], () => {
  calculatePrice();
});
onMounted(() => {
  const valueFromStore = store.state.info;
  formData.createdUserId = valueFromStore.id;
});
const handleSubmit = () => {
  if (store.state.isLoginedIn) {
    let orderOptions = "";
    formData.options.map((data) => {
      orderOptions += `${data.name}; `;
      return orderOptions;
    });
    const orderData = {
      createdUserId: formData.createdUserId,
      placeA: formData.placeA,
      placeB: formData.placeB,
      gazelle: formData.gazelle.name,
      date: formData.date,
      niggers: formData.niggers,
      hours: formData.hours,
      options: orderOptions,
      phone: formData.phone,
      price: formData.price.value,
    };

    createOrder(orderData)
      .then(() => {
        isSeccessMessageShow.value = true;
        return isSeccessMessageShow;
      })
      .catch(() => {
        isErrorMessageShow.value = true;
        return isErrorMessageShow;
      });
  } else {
    isErrorMessageShow.value = true;
    router.push("./login")
  }
};
</script>

<template>
  <div class="content">
    <CaruselProject />
    <form class="createorder" @submit.prevent="handleSubmit">
      <div class="container">
        <div class="container-item">
          <p>Пункт A</p>
          <inputStreet v-model="formData.placeA" />
         
        </div>
        <div class="container-item">
          <p>Пункт B</p>
          <inputStreet v-model="formData.placeB" />
        </div>
      </div>
      <div class="container">
        <div class="container-item">
          <p>Любая газель</p>
          <DropDownPrimeVue v-model="formData.gazelle" />
        </div>
        <div class="container-item">
          <p>Дата</p>
          <CalendarPrimeVue v-model="formData.date" />
        </div>
      </div>
      <div class="container">
        <p>Грузчики</p>
        <InputNumberPrimeVue v-model="formData.niggers" />

        <p>Время аренды</p>
        <InputNumberPrimeVue v-model="formData.hours" />
      </div>
      <div class="container-phone">
        <InputPhone v-model="formData.phone" />
      </div>
      <div class="container-option">
        <InputOption v-model="formData.options" />
      </div>
      <div class="container-save">
        <ButtonSaved @click="handleSubmit()" :price="formData.price" />
      </div>
    </form>
    <SeccessMessage :isMessageShow="isSeccessMessageShow" />
    <ErrorMessage :isMessageShow="isErrorMessageShow" />
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 50px;
}

.createorder {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 500px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  height: 750px;
}

.container {
  display: flex;
  width: 100%;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.container-phone {
  margin: 0px 50px 50px 35px;
}

.container-item {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}

.container-option {
  display: flex;
  align-items: flex-start;
}

.container-save {
  display: flex;
  margin: 70px 0px 50px 0px;
  align-items: center;
  justify-content: flex-end;
}

@media screen and (max-width: 1200px) {
  .content {
    flex-direction: column;
  }
}
</style>
