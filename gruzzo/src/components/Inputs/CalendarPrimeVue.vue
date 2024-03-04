<template>
  <div class="card">
    <Calendar placeholder="Select date" v-model="local" />
  </div>
</template>
  
<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import Calendar from "primevue/calendar";

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
    console.log(props.modelValue)
    local.value = newValue;
  }
);
</script>

<style scoped>
.card {
  max-width: 50%;
  transform: scale(1.5);
  border: 1px #d9d9d9 solid;
  border-radius: 6px;
}
</style>