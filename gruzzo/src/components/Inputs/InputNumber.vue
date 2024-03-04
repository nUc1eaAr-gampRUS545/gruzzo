
<template>
    <div class="card-input flex justify-content-center">
        <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 3rem" :min="0" :max="8">
            <template #incrementbuttonicon>
                <span class="pi pi-plus" />
            </template>
            <template #decrementbuttonicon>
                <span class="pi pi-minus" />
            </template>
        </InputNumber>
    </div>
</template>

<script>
import { ref } from "vue";
import InputNumber from 'primevue/inputnumber';
export default {
    name: "InputNumberPrimeVue",
    components: {
        InputNumber,
    },
    data() {
        return {
            value:ref(0)
        };
    },

    methods: {

    },
}

</script>