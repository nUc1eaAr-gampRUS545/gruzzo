<template>
  <div class="card">
    <Dropdown
      v-model="local"
      :options="gazelle"
      optionLabel="name"
      placeholder="Select а track"
      class="w-full md:w-14rem"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import Dropdown from "primevue/dropdown";

const gazelle = ref([
  { name: "any GAZelle", code: 1000 },
  { name: "any GAZelle 4t", code: 2000 },
  { name: "Spacious", code: 1500 },
  { name: "any Van", code: 500 },
  { name: "any Van 4t", code: 750 },
]);
const props = defineProps({
    modelValue: {
      type: String,
    },
  });
  const emit = defineEmits(["update:modelValue"]);
  
  const local = ref(props.modelValue);
  
  watch(local, (newValue) => {
    emit("update:modelValue", {name:newValue.name, price:newValue.code});
  });
  
  watch(
    () => props.modelValue,
    (newValue) => {
      local.value = {name:newValue.name, price:newValue.code};
    }
  );
</script>
<style scoped>
.card {
  transform: scale(1.5);
}
</style>