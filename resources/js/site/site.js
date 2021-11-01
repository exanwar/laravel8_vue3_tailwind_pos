import BlankSite from "./BlankSite";
import { createApp } from "vue";
const app = createApp(BlankSite);

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

app.use(router).use(Toast, options)
app.mount("#app");
