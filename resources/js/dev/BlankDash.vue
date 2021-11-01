<template>
    <div
        class="
            flex
            max-h-screen
            h-screen
            max-w-screen
            w-screen
            bg-dashboard-background
            overflow-hidden
        "
    >
        <left-nav></left-nav>
        <div
            class="
                flex-1 flex flex-col
                overflow-y-auto overflow-x-hidden
                px-10
                mx-auto
                scrollbar
                scrollbar-thin
                scrollbar-thumb-dashboard-scroll-stick
                scrollbar-track-white
                scrollbar-thumb-rounded-full
                scrollbar-track-rounded-full
            "
        >
            <div class="sticky z-50 w-full top-0">
                <div class="h-5 header-navbar-shadow"></div>
                <div
                    class="
                        flex flex-row
                        justify-between
                        itmes-end
                        bg-dashboard-blue
                        py-2
                        rounded-lg
                    "
                >
                    <div class=""></div>
                    <div class="flex justify-center items-center px-5">
                        <div class="flex space-x-2">
                            <div class="flex flex-col items-end">
                                <h1 class="font-nunito font-bold text-white">
                                    {{ user.first_name }} {{ user.last_name }}
                                </h1>
                                <h1 class="font-nunito text-sm text-white">
                                    Admin
                                </h1>
                            </div>
                            <div class="">
                                <img
                                    :src="user.profile_picture ? user.profilepicture : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                    class="h-10 w-10 rounded-full"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="relative"></div>
                    </div>
                </div>
            </div>
            <div class="mt-5 flex-1">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import {subject} from "@casl/ability";
import {
    LinkIcon,
    ChatAlt2Icon,
    CurrencyBangladeshiIcon,
    ArrowLeftIcon,
    StopIcon,
    XCircleIcon,
} from '@heroicons/vue/outline'
import LeftNav from './components/nav/LeftNav.vue'
import axios from 'axios'
import {onMounted, ref} from "vue";
export default {
    components: { LeftNav },
    setup() {
        const navbarFocused = ref(false)
        const navbarOpen = ref(true)
        const user = ref({})
        function getUser(){
        axios.get('/api/user')
            .then(({data}) => {
                user.value = data
            })
        }

        onMounted(()=> {
            getUser()
        })

        return {navbarFocused, navbarOpen, user}
    },
    data() {
        return {

        }
    },
    watch: {
        $route: {
            handler(){
                axios.get('/api/common/abilities')
                    .then(({data}) => this.$ability.update([
                        {subject: 'all', action: data}
                    ]))
            },
            immediate: true
        }
    },
    created() {

    },
}
</script>

<style lang="scss" scoped></style>
