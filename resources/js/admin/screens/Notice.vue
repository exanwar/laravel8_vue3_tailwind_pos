<template>
    <div class="flex flex-col justify-center items-center h-full">
        <div
            class="
                max-w-3xl
                bg-white
                px-10
                md:px-20
                py-10
                shadow-child-nav-active
                rounded-xl
            "
        >
            <div class="flex justify-end">
                <div class="cursor-pointer" @click="logout">
                    <i class="fa fa-power-off fa-2x md:fa-3x text-red-600"></i>
                </div>
            </div>
            <div class="text-center">
                <div class="flex flex-col justify-center items-center">
                    <MailIcon class="h-12 w-16 md:h-20 md:w-20 text-gray-800" />
                    <h1
                        class="
                            mt-1
                            font-nunito
                            tracking-wide
                            text-gray-700
                            font-semibold
                            text-xl
                        "
                    >
                        Create Your Shop From Here
                    </h1>
                    <h1 class="mt-3 font-nunito text-sm text-gray-500">
                        The address we currently have for your account is
                    </h1>
                    <h1
                        class="
                            mt-1
                            font-nunito
                            leading-none
                            tracking-wide
                            text-gray-600
                            font-semibold
                            text-md
                        "
                    >
                        {{ userInfo.email }}
                    </h1>
                    <div class="h-0.5 w-full bg-gray-300 my-5"></div>
                    <p class="font-nunito text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad beatae doloribus dolorum et ex fuga in, laudantium numquam odit praesentium quia sed sint sunt!
                    </p>
                    <div class="flex mt-3">
                        <button
                            class="
                                bg-blue-600
                                text-gray-200
                                px-10
                                py-1.5
                                rounded-3xl
                                transform
                                duration-700
                                font-semibold
                                tracking-wide
                                hover:bg-blue-800
                                disabled:opacity-50
                            "
                            @click.prevent="addShopVisibility = true"
                        >
                            Create Shop
                        </button>
                    </div>
                    <p class="mt-5 font-nunito text-gray-500 text-sm">
                        TO complete your POS setup please create one from the
                        <span
                            class="text-blue-600 font-semibold cursor-pointer"
                            @click.prevent="addShopVisibility = true"
                        >
                            Create Shop
                        </span>
                        button
                    </p>
                </div>
            </div>
        </div>
    </div>
    <AddNewShopModal v-if="addShopVisibility" @close="addShopVisibility = false" />
</template>

<script>
import AddNewShopModal from "./shop/AddNewShopModal";
import { MailIcon } from '@heroicons/vue/outline'
import {ref} from "vue";
import axios from 'axios'
export default {
    props:[
        'userInfo'
    ],
    components:{
        MailIcon,
        AddNewShopModal
    },
    setup(){
        function logout(){
            axios.post('/logout')
                .then(() => {
                    location.reload();
                })
        }
        const addShopVisibility = ref(false)

        return{
            addShopVisibility,
            logout,
        }
    },
}
</script>

<style scoped>
.content{
    height: 100vh;
    width: 100vw;
}
</style>
