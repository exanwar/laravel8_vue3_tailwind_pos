import BlankDash from "./BlankDash";
import { createApp } from "vue";
const app = createApp(BlankDash);

//Remix Icons
import 'remixicon/fonts/remixicon.css'


//Vue-Router
import router from './router/index.js'


//Toast Notifications
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
const options = {
    transition: 'Vue-Toastification__slideBlurred',
    maxToasts: 20,
    newestOnTop: true,
}

import moment from "moment";
app.config.globalProperties.$filters = {
    formatDate(value) {
        return moment().subtract(10, 'days').calendar();
    }
}


import { abilitiesPlugin } from '@casl/vue'
import ability from "./ability";

import VueSweetalert2 from "vue-sweetalert2";

app.use(abilitiesPlugin, ability, {useGlobalProperties: true}).use(router).use(Toast, options).use(VueSweetalert2);
app.mount("#app");


