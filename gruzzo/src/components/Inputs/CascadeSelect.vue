
<template>
    <div class="card-scale flex justify-content-center">
        <CascadeSelect v-model="local" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a adress" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import { streets } from "../../constants/cards.js";
import CascadeSelect from "primevue/cascadeselect";
const props = defineProps({
    modelValue: {
      type: String,
    },
  });
  const countries = ref(streets);
  const emit = defineEmits(["update:modelValue"]);
  
  const local = ref(props.modelValue);
  
  watch(local, (newValue) => {
    emit("update:modelValue", newValue.cname);
  });
  
  watch(
    () => props.modelValue,
    (newValue) => {
      local.value = newValue;
    }
  );
</script>
<style>
.card-scale{
    width: 50%;
    position: relative;
    box-sizing: border-box;
    transform: scale(1.5);

}
</style>
