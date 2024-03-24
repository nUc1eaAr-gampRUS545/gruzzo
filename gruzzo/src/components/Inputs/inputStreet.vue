<template>
    <v-autocomplete
      style="width: 200px;"
      label="Улица"
      :items="['Гагарина','Кирова', 'Плеханова','Рылеева','Ленина','Суворова','Луначарского','Генерала Попова', 'Cпартака', 'Комфортная','Минская']"
      v-model="local"
      variant="solo"
    ></v-autocomplete>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref, watch } from "vue";
  
  const props = defineProps({
    modelValue: {
      type: String,
    },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const local = ref(props.modelValue);
  
  watch(local, (newValue) => {
    emit("update:modelValue", newValue);
  });
  
  watch(
    () => props.modelValue,
    (newValue) => {
      local.value = newValue;
    }
  );
  </script>
  
  <style>
  /* Ваши стили здесь */
  </style>
  