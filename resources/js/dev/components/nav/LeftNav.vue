<template>
    <div
        class="
            flex-none
            max-h-screen
            h-screen
            bg-white
            pt-4
            flex flex-col
            overflow-hidden
            transform
            duration-200
        "
        :class="[navbarOpen ? 'w-68' : 'w-20', navbarFocused ? 'w-68' : 'w-20']"
        @mouseover="navbarFocused = true"
        @mouseout="navbarFocused = false"
    >
        <div class="flex-none flex justify-between items-center px-5">
            <div class="flex items-center space-x-3">
                <img
                    src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
                    class="h-12 w-12"
                />
                <h1
                    class="
                        font-montserrat font-medium
                        text-2xl
                        tracking-wide
                        text-dashboard-blue
                    "
                >
                    Vuexy
                </h1>
            </div>
            <XCircleIcon
                v-if="navbarOpen"
                class="nav-toggle"
                @click="navbarOpen = false"
            />
            <StopIcon v-else class="nav-toggle" @click="navbarOpen = true" />
        </div>
        <div
            class="
                mt-5
                flex-1 flex flex-col
                space-y-7
                overflow-y-auto
                scrollbar
                scrollbar-thin
                scrollbar-thumb-rounded-full
                scrollbar-track-rounded-full
                pb-4
                px-5
            "
            :class="
                navbarFocused
                    ? 'scrollbar-thumb-dashboard-scroll-stick scrollbar-track-white'
                    : 'scrollbar-thumb-white scrollbar-track-white'
            "
        >
            <Items :open="navbarOpen" :focused="navbarFocused" />
            <div
                @click.prevent="logout"
                class="
                    flex
                    items-center
                    justify-between
                    px-2.5
                    py-2.5
                    rounded-md
                    cursor-pointer
                "
            >
                <div
                    class="
                        flex
                        justify-center
                        items-center
                        font-montserrat
                        space-x-3
                        text-gray-600
                        hover:scale-125
                        hover:translate-x-5
                        hover:font-extrabold
                        transform
                        duration-700
                    "
                >
                    <i class="fas fa-sign-in-alt text-xl"></i>
                    <h3 v-show="navbarOpen || navbarFocused" class="font-montserrat">
                        Logout
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { StopIcon, XCircleIcon } from '@heroicons/vue/outline'
import Items from './Items.vue'
import { ref } from "vue";
export default {
    components: { Items, StopIcon, XCircleIcon },
    setup() {
        const navbarFocused = ref(false)
        const navbarOpen = ref(false)

        function logout(){
            axios.post('/logout')
                .then(() => {
                    location.reload();
                })
        }

        return {
            navbarFocused,
            navbarOpen,
            logout
        }
    },
}
</script>

<style lang="scss" scoped></style>
