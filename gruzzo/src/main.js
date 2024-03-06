import { createApp } from 'vue'
import App from "@/components/App.vue";
import PrimeVue from 'primevue/config';
import router from './components/routes/routes'
import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import "./flags.css";
import store from './store/store.js';
const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(store);
app.mount('#app');


