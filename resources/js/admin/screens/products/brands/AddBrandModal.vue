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
        <div class="relative" style="min-width: 30rem; max-width: 55rem">
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
                                Add new brand
                            </h1>
                        </div>
                        <div class="w-full px-2 mt-10">
                            <div class="flex flex-col justify-center items-center">
                                <div class="relative">
                                    <div class="flex flex-col">
                                        <div class="h-40 w-40">
                                            <img
                                                :src="image ? image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                alt="profile-pic"
                                                class="h-full w-full rounded-full "
                                            >
                                        </div>
                                        <input type="hidden" :value="image ? image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'">
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
                                        <input type="file" accept=".jpeg, .png, .jpg" class="absolute h-40 w-40" style="opacity: 0;" @change="uploadBrandPhoto">
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
                                        Brand Name :
                                    </h1>
                                    <input
                                        type="url"
                                        placeholder="name"
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
                            <div
                                class="
                                py-5
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
                                    v-show="$can('create_brands')"
                                    @click="submit"
                                >
                                    Publish
                                </button>
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
import { inject, ref, computed, onMounted } from "vue";
import { useVueSweetAlert2 } from "../../../useVueSweetAlert2";
import { useToast } from 'vue-toastification'
export default {
    setup() {
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const name = ref(null)
        const image = ref(null)
        function uploadBrandPhoto(e){
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

        const toast = useToast()
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
        function errorToast(message) {
            this.toast.error(message, {
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
            errorToast,
            successToast,
            InjectDirectly,
            uploadBrandPhoto,
            name,
            image,
        }
    },
    data() {
        return {
            devs: []
        }
    },
    watch: {},
    methods: {
        submit(){
            let data = {
                name: this.name,
                brand_logo: this.image
            }
            axios.post('/api/user/product_brands', data)
                .then( response => {
                    this.handleReload()
                    this.handleClose()
                    this.successToast('A new brand has been added')
                })
        },
        handleClose() {
            this.$emit('close')
        },
        handleReload(){
            this.$emit('reload')
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


