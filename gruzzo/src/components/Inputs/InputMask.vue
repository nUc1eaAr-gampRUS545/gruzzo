

<template>
    <div class="card p-fluid flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="phone" class="font-bold block mb-2">Phone</label>
            <InputMask id="phone" v-model="local" mask="(999) 999-9999" placeholder="(999) 999-9999" />
        </div>

    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import InputMask from 'primevue/inputmask';
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