

<template>
    <div class="card p-fluid flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="phone" class="font-bold block mb-2">Phone</label>
            <InputMask id="phone" v-model="value" mask="(999) 999-9999" placeholder="(999) 999-9999" />
        </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import InputMask from 'primevue/inputmask';
export default{
    components:{
        InputMask
    },
    name:"InputPhone",
    data(){
        return{
            value:ref('')
        }
        
    }
}


</script>