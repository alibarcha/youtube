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

// auth0
import { createAuth0 } from '@auth0/auth0-vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
// auth0
app.use(
    createAuth0({
        domain: "dev-35a1k4fcjrhrloxq.us.auth0.com",
        clientId: "kCNrw1xDOjnHH8IAYj69UeIeOmDhexn6",
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    })
);

app.directive('tooltip', Tooltip);


app.mount('#app')
