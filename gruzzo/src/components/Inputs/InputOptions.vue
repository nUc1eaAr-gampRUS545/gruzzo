<template>
  <div class="card flex justify-content-center">
    <MultiSelect
      v-model="local"
      display="chip"
      :options="options"
      optionLabel="name"
      placeholder="Select option"
      :maxSelectedLabels="3"
      class="w-full md:w-20rem"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import MultiSelect from "primevue/multiselect";
const options = ref([
  { name: "Сопровождающий" },
  { name: "Укажите синхронизирующую доставку" },
  { name: "Данные для пропуска" },
  {
    name: "Обеспечить полную доставку с инкрементной информацией из",
    code: "IST",
  },
  { name: "Обеспечить инкрементную доставку из" },
]);
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
    console.log(props.modelValue);
    local.value = newValue;
  }
);
</script>
<style scoped>
.card {
  transform: scale(1.5);
  padding: 0 0 0 65px;
}
</style>