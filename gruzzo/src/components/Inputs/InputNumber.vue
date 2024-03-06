
<template>
  <div class="card-input flex justify-content-center">
    <InputNumber
      v-model="local"
      showButtons
      buttonLayout="vertical"
      style="width: 3rem"
      :min="0"
      :max="8"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import InputNumber from "primevue/inputnumber";

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