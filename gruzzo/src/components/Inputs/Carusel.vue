<template>
  <div class="card">
    <Carousel
      :value="products"
      :numVisible="2"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
      style="width: 1300px; margin: 50px 0px"
    >
      <template #item="slotProps">
        <div class="p-1">
          <img
            :src="slotProps.data.image"
            :alt="slotProps.data.name"
            class="w-full border-round"
          />
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import { ref } from "vue";
import { ProductService } from "../../service/ProductService.js";

export default {
  name: "CaruselProject",
  components: {
    Carousel,
  },
  data() {
    return {
      products: ref(),
      responsiveOptions: ref([
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
      ]),
    };
  },
  methods: {
    
  },
  mounted() {
    ProductService.getProductsSmall().then(
      (data) => (this.products = data.slice(0, 9))
    );
  },
};
</script>
<style scoped>
</style>
