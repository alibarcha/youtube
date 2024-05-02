import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// prime vue 3
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
// prime flex
import 'primeflex/primeflex.css';
// tooltip
import Tooltip from 'primevue/tooltip';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.directive('tooltip', Tooltip);


app.mount('#app')
