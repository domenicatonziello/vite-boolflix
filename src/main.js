import { createApp } from 'vue';
import App from './App.vue';
// importo font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
// importo icona
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-regular-svg-icons'
// importo componente
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar);

// inizializzazione
const app = createApp(App);

// registrazione componenti
app.component('font-awesome-icon', FontAwesomeIcon);

// monto app
app.mount('#app');
