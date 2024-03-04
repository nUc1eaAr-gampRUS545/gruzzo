<script>
import {ref} from "vue"
import DropDownPrimeVue from "./Inputs/DropDown.vue";
import CalendarPrimeVue from "./Inputs/CalendarPrimeVue.vue";
import InputNumberPrimeVue from "./Inputs/InputNumber.vue";
import CascadeSelectPrimeVue from "./Inputs/CascadeSelect.vue";
import CaruselProject from "./Inputs/Carusel.vue";
import InputPhone from "./Inputs/InputMask.vue";
import InputOption from "./Inputs/InputOptions.vue";
export default {
  
  components: {
    DropDownPrimeVue,
    CalendarPrimeVue,
    InputNumberPrimeVue,
    CascadeSelectPrimeVue,
    CaruselProject,
    InputPhone,
    InputOption,
  },
  setup() {
    const formData = {
      placeA: "",
      placeB: "",
      gazelle: "",
      date: ref(""),
      niggers: 0,
      hours: 0,
      options: "",
      phone: "",
      price: "",
    };

    return { formData };
  },
  name: "CreateOffer",
};
</script>
<template>
  <div class="content">
    <CaruselProject />
    <div class="createorder">
      <div class="container">
        <div class="container-item">
          <p>Пункт A</p>
          <CascadeSelectPrimeVue v-model="formData.placeA" />
        </div>
        <div class="container-item">
          <p>Пункт B</p>
          <CascadeSelectPrimeVue v-model="formData.placeB" />
        </div>
      </div>
      <div class="container">
        <div class="container-item">
          <p>Любая газель</p>
          <DropDownPrimeVue v-model="formData.gazelle" />
        </div>
        <div class="container-item">
          <p>Дата</p>
          <CalendarPrimeVue
          v-model="formData.date"
          />
        </div>
      </div>
      <div class="container">
        <p>Грузчики</p>
        <InputNumberPrimeVue v-model="formData.niggers" />

        <p>Время аренды</p>
        <InputNumberPrimeVue v-model="formData.hours" />
      </div>
      <div class="container-phone">
        <InputPhone v-model="formData.hours" />
      </div>
      <div class="container-option">
        <InputOption v-model="formData.options" />
      </div>
    </div>
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
  height: 600px;
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

@media screen and (max-width: 1200px) {
  .content {
    flex-direction: column;
  }
}
</style>
