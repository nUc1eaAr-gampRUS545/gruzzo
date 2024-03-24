<template>
  <div class="wrapper">
    <div class="button-wrapper">
      <span>&nbsp;&nbsp;&nbsp;Оформить заказ &nbsp;&nbsp;&nbsp;</span> <span>{{ priceShow()}}&nbsp;&nbsp;&nbsp;</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  price: {
    type: Number,
  },
});
const priceShow=()=>{
  let price = props.price.value.toString()
  if(price == null) {
    return ` `
  }
  if(isNaN(price)){
    return ` `
  }

  return ` ${price}₽`
}
</script>

<style>
.wrapper {
  position: relative;
  transform: translate(-50%, -50%);
  overflow: hidden; /* Добавлено свойство overflow для обрезания контента */
}

.button-wrapper {
  display: flex;
  cursor: pointer;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  line-height: 14px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  padding: 14px 0px;
  box-sizing: border-box;

}

.button-wrapper span {
  position: relative;
  z-index: 2;
}

.button-wrapper:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #77dd8d;
  transition: all 0.35s;
}

.button-wrapper:hover {
  color: #fff;
}

.button-wrapper:hover:after {
  width: 100%;
}
</style>
