import BlankDash from "./BlankDash"
import { createApp } from "vue"
const app = createApp(BlankDash)

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

import moment from "moment"
import numeral from "numeral"
app.config.globalProperties.$filters = {
    formatDate(value) {
        return moment().subtract(10, 'days').calendar()
    },

    limitProductDetailsCard(text) {
        return text.slice(0, 150) + '....';
    },

    formatNumber(value) {
        return numeral(value).format("0,0.00"); // displaying other groupings/separators is possible, look at the docs
    }

}

import store from './store'



import { abilitiesPlugin } from '@casl/vue'
import ability from "./ability"

import VueSweetalert2 from "vue-sweetalert2"

import CKEditor from '@ckeditor/ckeditor5-vue'

app.use(abilitiesPlugin, ability, {useGlobalProperties: true}).use(router).use(Toast, options).use(VueSweetalert2).use(CKEditor).use(store)
app.mount("#app")


