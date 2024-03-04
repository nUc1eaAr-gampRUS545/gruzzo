<template>
  <div class="card flex justify-content-center">
    <MultiSelect
      v-model="selectedCities"
      display="chip"
      :options="cities"
      optionLabel="name"
      placeholder="Select option"
      :maxSelectedLabels="3"
      class="w-full md:w-20rem"
    />
  </div>
</template>

<script >
import { ref } from "vue";
import MultiSelect from "primevue/multiselect";
export default {
  components: {
    MultiSelect,
  },
  name: "InputOption",
  data() {
    return {
      selectedCities: ref(),
      cities: ref([
        { name: "Сопровождающий", code: "NY" },
        { name: "Укажите синхронизирующую доставку", code: "RM" },
        { name: "Данные для пропуска", code: "LDN" },
        { name: "Обеспечить полную доставку с инкрементной информацией из", code: "IST" },
        { name: "Обеспечить инкрементную доставку из", code: "PRS" },
      ]),
    };
  },
};
</script>
<style scoped>
.card{
    transform: scale(1.5);
    padding: 0 0 0 65px;
   
}
</style>