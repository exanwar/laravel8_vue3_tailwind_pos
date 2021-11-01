<template>
    <div
        class="
            fixed
            inset-0
            w-full
            h-screen
            flex
            items-center
            justify-center
            z-50
            bg-dashboard-modal
        "
    >
        <div class="relative" style="min-width: 30rem; max-width: 80rem">
            <div
                class="
                    bg-gray-200
                    rounded-xl
                    shadow-2xl shadow-child-nav-active
                    p-5
                    overflow-y-scroll
                    scrollbar
                    scrollbar-thin
                    scrollbar-thumb-rounded-full
                    scrollbar-track-rounded-full
                    scrollbar-thumb-dashboard-scroll-stick
                    scrollbar-track-gray-200
                "
                style="min-height: 35rem; max-height: 55rem"
            >
                <div class="grid grid-cols-1 gap-6">
                    <div class="bg-white rounded-lg overflow-hidden">
                        <div
                            class="
                                bg-gray-900
                                px-5
                                py-5
                                flex
                                justify-between
                                items-center
                            "
                        >
                            <h1
                                class="
                                    text-gray-200
                                    uppercase
                                    font-nunito
                                    tracking-wide
                                "
                            >
                                Edit Employee
                            </h1>
                        </div>
                        <div class="flex flex-col lg:flex-row">
                            <div class="flex w-full lg:w-80 flex-col space-y-4 px-3 py-3">
                                <div class="px-3 py-5 rounded-lg flex flex-1 flex-col">
                                    <div class="flex flex-col justify-center items-center">
                                        <div class="h-40 w-40">
                                            <img
                                                :src="image ? image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                alt="profile-pic"
                                                class="h-full w-full rounded-full "
                                            >
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Role :
                                            </h1>
                                            <VueMultiselect
                                                v-model="selectedRole"
                                                :options="roles"
                                                :multiple="false"
                                                :close-on-select="true"
                                                :clear-on-select="false"
                                                :preserve-search="true"
                                                openDirection="bottom"
                                                placeholder="Pick a role"
                                                label="title"
                                                track-by="id"
                                                :preselect-first="false">
                                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                                            </VueMultiselect>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Facebook Url :
                                            </h1>
                                            <input
                                                type="url"
                                                placeholder="Facebook Url"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="fb"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Twitter Url :
                                            </h1>
                                            <input
                                                type="url"
                                                placeholder="Twitter Url"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="twitter"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Linkedin Url :
                                            </h1>
                                            <input
                                                type="url"
                                                placeholder="Linkedin Url"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="linkedin"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-full lg:flex-1 w-ful flex-col space-y-4 px-3 py-3">
                                <div
                                    class="
                                px-3
                                lg:py-5
                                rounded-lg
                                flex flex-1 flex-col
                            "
                                >
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1 class="ml-2 text-gray-700 font-nunito text-lg">
                                                New Developer Information
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                First Name :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="f_name"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Last name :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Last name"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="l_name"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Street Address 1 :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Street Address 1"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="address_1"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Street Address 2 :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Street Address 2"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="address_2"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Town/City :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Town/City"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="city"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Pin Code :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Pin Code"
                                                min="4" max="5"
                                                class="
                                                    shadow
                                                    border
                                                    rounded-lg
                                                    w-full
                                                    py-4
                                                    px-5
                                                    text-gray-700
                                                    leading-tight
                                                    focus:outline-none
                                                    focus:border-blue-300
                                                "
                                                v-model="zip"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Mobile Number :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Mobile Number"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model.number="phone"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Emergency Contact :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Emergency Contact"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model.number="e_phone"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Email :
                                            </h1>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-600
                                        bg-gray-300
                                        cursor-not-allowed
                                        leading-tight
                                        focus:outline-none
                                    "
                                                v-model="email" readonly
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Username :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        leading-tight
                                        text-gray-600
                                        bg-gray-300
                                        cursor-not-allowed
                                        focus:outline-none
                                    "
                                                v-model="u_name"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                National ID :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="123 123 1234"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                min="10" max="17"
                                                v-model="nid"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="
                                pt-5
                                flex
                                justify-end
                                items-center
                                space-x-3
                            "
                                >
                                    <button
                                        class="
                                    bg-red-100
                                    text-red-600
                                    px-3
                                    py-2
                                    rounded-lg
                                    transform
                                    duration-700
                                    hover:bg-red-600 hover:text-red-100
                                "
                                        @click="handleClose"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        class="
                                    px-3
                                    py-2
                                    rounded-lg
                                    transform
                                    duration-700
                                    bg-green-100
                                    text-green-600
                                    hover:bg-green-600 hover:text-green-100
                                    disabled:opacity-50
                                "
                                        @click="update"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="
                    absolute
                    top-0
                    right-0
                    text-4xl
                    transform
                    -translate-y-2.5
                    translate-x-1.5
                    cursor-pointer
                    text-gray-900
                "
                @click.prevent="handleClose"
            >
                <div class="relative">
                    <div class="bg-gray-200 h-12 w-12 rounded-full"></div>
                    <div
                        class="
                            absolute
                            top-1/2
                            left-1/2
                            transform
                            -translate-x-1/2 -translate-y-1/2
                        "
                    >
                        <i class="far fa-times-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { useVueSweetAlert2 } from "../../../useVueSweetAlert2";
import { useToast } from 'vue-toastification'
import { ref, inject, onMounted} from "vue";
import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
export default {
    props: ['employee'],
    components:{ VueMultiselect },
    setup(props) {
        const toast = useToast()
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");
        function getEmployee(){
            axios.get('/api/user/employees/' + props.employee)
            .then(({data}) => {
                console.log(data.data[0])
                const devData = data.data[0]
                image.value = devData.avatar
                fb.value = devData.fb
                twitter.value = devData.twitter
                linkedin.value = devData.linkedin
                f_name.value = devData.f_name
                l_name.value = devData.l_name
                address_1.value = devData.address_1
                address_2.value = devData.address_2
                phone.value = devData.phone
                e_phone.value = devData.e_phone
                city.value = devData.city
                zip.value = devData.zip
                email.value = devData.email
                u_name.value = devData.username
                nid.value = devData.nid
                selectedRole.value = devData.roles[0]
            })
        }

        const roles = ref([])
        function getRoles(){
            axios.get('/api/user/roles')
                .then(({data}) => {
                    roles.value = data.data
                })
        }
        const selectedRole = ref([])

        onMounted(() => {
            getEmployee()
            getRoles()
        })

        const image = ref(null)
        const fb = ref(null)
        const twitter = ref(null)
        const linkedin = ref(null)

        const f_name = ref(null)
        const l_name = ref(null)
        const address_1 = ref(null)
        const address_2 = ref(null)
        const phone = ref(null)
        const e_phone = ref(null)
        const city = ref(null)
        const zip = ref(null)

        const email = ref(null)
        const u_name = ref(null)
        const nid = ref(null)

        function successToast(message) {
            this.toast.success(message, {
                position: 'top-right',
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: 'button',
                icon: true,
                rtl: false,
            })
        }

        return {
            toast,
            image,
            fb,
            twitter,
            linkedin,
            f_name,
            l_name,
            address_1,
            address_2,
            phone,
            e_phone,
            city,
            zip,
            email,
            u_name,
            nid,
            InjectDirectly,
            successToast,
            roles,
            selectedRole
        }
    },
    data() {
        return {

        }
    },
    watch: {},
    methods: {
        update(){
            let data = {
                roles: this.selectedRole.id,
                facebook_url: this.fb,
                twitter_url: this.twitter,
                linkedin_url: this.linkedin,

                first_name: this.f_name,
                last_name: this.l_name,
                street_address_1: this.address_1,
                street_address_2: this.address_2,
                email: this.email,
                mobile_number: this.phone,
                emergency_contact: this.e_phone,
                pin_code: this.zip,
                city: this.city,
                nid_number: this.nid,

            }

            axios.put('/api/user/employees/' + this.employee, data)
                .then(response => {
                    this.handleClose();
                    this.handleReload();
                    this.successToast('Employee information has been updated!')
                })
                .catch(error => {
                    console.log(error.response)
                    this.InjectDirectly.fire({
                        icon: "error",
                        title: "Oops..",
                        text: 'Something went wrong!',
                        footer: ""
                    });
                })
        },
        handleClose() {
            this.$emit('close')
        },
        handleReload() {
            this.$emit('reloadEmployees')
        },
    },
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.choose_file {
    position: relative;
    display: inline-block;
    font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;
    color: #7f7f7f;
    margin-top: 2px;
    background: white
}
.choose_file input[type="file"]{
    -webkit-appearance:none;
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    width: 100%;
    height: 100%;
}
</style>


