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
                style="min-height: 35vh; max-height: 85vh"
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
                                Create Your Shop
                            </h1>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex w-full lg:flex-1 w-ful flex-col space-y-4 px-3 py-3">
                                <div
                                    class="
                                px-3
                                lg:py-5
                                rounded-lg
                                flex flex-1 flex-col
                            "
                                >
                                    <div class="flex flex-col justify-center items-center">
                                        <div class="relative">
                                            <div class="flex flex-col">
                                                <div class="h-40 w-40">
                                                    <img
                                                        :src="image ? image : 'https://img.freepik.com/free-vector/online-shopping-logo-design-template_130382-9.jpg?size=338&ext=jpg'"
                                                        alt="profile-pic"
                                                        class="h-full w-full rounded-full "
                                                    >
                                                </div>
                                                <input type="hidden" :value="image ? image : 'https://img.freepik.com/free-vector/online-shopping-logo-design-template_130382-9.jpg?size=338&ext=jpg'">
                                            </div>
                                            <div class="absolute right-5 bottom-1">
                                                <div class="bg-gray-400 border border-gray-100 rounded-full p-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="absolute left-0 top-0">
                                                <input type="file" accept=".jpeg, .png, .jpg" class="absolute h-40 w-40" style="opacity: 0;" @change="uploadShopLogo">
                                            </div>

                                        </div>
                                        <div class="img-extension mt-3 text-gray-400 font-nunito italic">
                                            <div class="d-inline-block align-items-center">
                                                <span>Only</span>
                                                <span>.jpg</span>
                                                <span>.png</span>
                                                <span>.jpeg</span>
                                                <span> allowed</span>
                                            </div>
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
                                                Name :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Shop Name"
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
                                                v-model="name"
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
                                                Shop No :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Shop No#"
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
                                                v-model="shop_no"
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
                                                Road No :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Roar No#"
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
                                                v-model="road_no"
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
                                                Area Name :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Area Name"
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
                                                v-model="area_name"
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
                                                City :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="City"
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
                                                District :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="District"
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
                                                v-model="district"
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
                                                Division :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Division"
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
                                                v-model="division"
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
                                                Zip :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Zip"
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
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Tax in percentage :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Tax"
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
                                                v-model="tax"
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
                                        @click="submit"
                                    >
                                        Submit
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
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import {ref, inject} from "vue";
export default {
    setup(){
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const image = ref(null)
        function uploadShopLogo(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            if (file["size"] < 2111775) {
                reader.onloadend = file => {
                    image.value = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                InjectDirectly.fire({
                    icon: "error",
                    title: "Oops..",
                    text: "You are uploading a large image",
                    footer: ""
                });
            }
        }
        const name = ref(null)
        const shop_no = ref(null)
        const road_no = ref(null)
        const area_name = ref(null)
        const city = ref(null)
        const district = ref(null)
        const division = ref(null)
        const zip = ref(null)
        const tax = ref(null)

        return {
            InjectDirectly,
            image,
            uploadShopLogo,
            name,
            shop_no,
            road_no,
            area_name,
            city,
            district,
            division,
            zip,
            tax
        }
    },
    methods:{
        submit(){
            let data = {
                avatar: this.image,
                name: this.name,
                shop: this.shop_no,
                road: this.road_no,
                area: this.area_name,
                city: this.city,
                dist: this.district,
                div: this.division,
                postCode: this.zip,
                tax: this.tax
            }
            axios.post('/api/user/shop', data)
            .then(response => {
                this.handleClose()
                this.InjectDirectly.fire({
                    title: 'Are you sure?Congratulations',
                    text: "Your shop has been created",
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonText: 'Reload',
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.redirectToLogin()
                    }
                });
            })
            .catch(e => {
                let message = e.response.data.message
                this.InjectDirectly.fire({
                    icon: "error",
                    title: "Oops..",
                    text: message,
                    footer: ""
                });
            })
        },
        handleClose() {
            this.$emit('close')
        },
        redirectToLogin(){
            location.reload();
        }
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


