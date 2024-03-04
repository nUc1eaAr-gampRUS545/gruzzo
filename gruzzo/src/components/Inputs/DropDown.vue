<template>
    <div class="card">
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select а track" class="w-full md:w-14rem" />
    </div>
</template>

<script >
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';

export default{
   name:"DropDownPrimeVue",
   components:{
    Dropdown,
   },
   data() {
    return {
        selectedCity: ref(),
        cities:ref([
    { name: 'any GAZelle', code: 'NY' },
    { name: 'any GAZelle 4t', code: 'RM' },
    { name: 'Spacious', code: 'LDN' },
    { name: 'any Van', code: 'IST' },
    { name: 'any Van 4t', code: 'PRS' },
]),
    };
  },

  methods: {
    
  },
}
</script>
<style scoped>
.card{
    transform: scale(1.5);

}
</style>