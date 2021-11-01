<template>
    <div class="pb-20">
        <header
            class="
                border-t-4 border-blue-700
                w-full
                bg-gray-200
                dark:bg-gray-900
                shadow-lg
                absolute
            "
        >
            <nav
                class="
                    xl:max-w-7xl
                    lg:max-w-5xl
                    md:max-w-3xl
                    sm:max-w-xl
                    xs:max-w-md
                    max-w-sm
                    mx-auto
                    flex flex-wrap
                    justify-between
                    items-center
                    md:px-5
                "
            >
                <div class="p-5">
                    <router-link to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="226.408"
                            height="79.692"
                            viewBox="0 0 226.408 79.692"
                            class="h-8 w-auto my-auto"
                        >
                            <g
                                id="Group_1252"
                                data-name="Group 1252"
                                transform="translate(-358.912 -2475.348)"
                            >
                                <path
                                    id="Path_5126"
                                    data-name="Path 5126"
                                    d="M5.408,0q-2.5,0-2.5-1.976v-.416q0-1.248,2.08-3.848a8.326,8.326,0,0,0,2.08-5.2V-31.2a8.238,8.238,0,0,0-2.08-5.252Q2.912-39,2.912-39.936v-.416q0-1.248,2.392-2.392l15.7-7.7q2.184-.936,3.432-.208a2.552,2.552,0,0,1,1.248,2.392V-11.44a7.835,7.835,0,0,0,2.34,5.2q2.34,2.6,2.34,3.848v.416Q30.368,0,27.768,0ZM63.232,1.04A29.681,29.681,0,0,1,42.8-6.4a23.917,23.917,0,0,1-8.372-18.668,23.671,23.671,0,0,1,8.32-18.564A28.9,28.9,0,0,1,62.5-50.96,29.33,29.33,0,0,1,82.68-43.576,23.938,23.938,0,0,1,91-24.856,23.937,23.937,0,0,1,82.888-6.292,28.274,28.274,0,0,1,63.232,1.04Zm2.184-5.1q6.656,0,6.656-12.792a57.507,57.507,0,0,0-1.3-11.128A43.992,43.992,0,0,0,66.4-40.144q-3.068-5.72-6.812-5.72a5.359,5.359,0,0,0-5.2,3.224q-1.56,3.224-1.56,9.776a47.25,47.25,0,0,0,.832,8.112,79.032,79.032,0,0,0,2.288,9.412,24.775,24.775,0,0,0,4,8.008Q62.5-4.056,65.416-4.056Z"
                                    transform="translate(356 2553)"
                                    fill="#687ded"
                                />
                                <path
                                    v-if="lightMode"
                                    id="Path_5127"
                                    data-name="Path 5127"
                                    d="M151.112-8.736a18.4,18.4,0,0,0,3.172,2.7q2.652,1.976,2.652,3.64v.416Q156.936,0,154.544,0H132.7q-2.392,0-2.392-2.08v-.312a5.222,5.222,0,0,1,1.56-3.068q1.56-1.82.624-3.276L123.344-22.36l-5.2,4.784v6.24a7.654,7.654,0,0,0,2.34,5.148q2.34,2.548,2.34,3.8v.416q0,1.976-2.5,1.976H97.864q-2.5,0-2.5-1.976v-.416q0-1.248,2.08-3.8a8.124,8.124,0,0,0,2.08-5.148V-58.864a7.53,7.53,0,0,0-2.5-5.252q-2.5-2.548-2.5-3.588v-.416q0-1.144,2.288-2.392l16.64-7.7a3.971,3.971,0,0,1,3.432-.1,2.459,2.459,0,0,1,1.248,2.288v49.4l14.04-12.064a1.909,1.909,0,0,0,.988-2.08A5.3,5.3,0,0,0,132.132-43q-.78-.988-1.664-2.236a3.974,3.974,0,0,1-.884-2.184v-.416q0-2.08,2.392-2.08h16.432q2.392,0,2.392,1.976v.416a3.578,3.578,0,0,1-1.456,2.548,34.421,34.421,0,0,1-4.108,3.016,30.707,30.707,0,0,0-4.212,3.172l-6.656,6.136ZM160.992,0q-2.5,0-2.5-1.976v-.416q0-1.248,2.08-3.848a8.326,8.326,0,0,0,2.08-5.2V-31.2a8.238,8.238,0,0,0-2.08-5.252Q158.5-39,158.5-39.936v-.416q0-1.248,2.392-2.392l15.7-7.7q2.184-.936,3.432-.208a2.552,2.552,0,0,1,1.248,2.392V-11.44a7.835,7.835,0,0,0,2.34,5.2q2.34,2.6,2.34,3.848v.416q0,1.976-2.6,1.976Zm51.064,1.04q-7.9,0-12.428-4.992T195.1-18.2V-42.848h-3.952a2.325,2.325,0,0,1-1.716-.676,2.325,2.325,0,0,1-.676-1.716v-2.288a2.114,2.114,0,0,1,2.392-2.392h1.976a12.419,12.419,0,0,0,8.216-2.86,13.287,13.287,0,0,0,4.472-7.644q.52-2.7,2.808-2.7h2.392q2.808,0,2.808,2.7v10.5h10.712a2.325,2.325,0,0,1,1.716.676,2.325,2.325,0,0,1,.676,1.716v2.288a2.325,2.325,0,0,1-.676,1.716,2.325,2.325,0,0,1-1.716.676H213.824v24.96a5.929,5.929,0,0,0,1.352,4.108,4.3,4.3,0,0,0,3.328,1.508,7.626,7.626,0,0,0,6.864-3.848,2.671,2.671,0,0,1,1.664-1.092,1.993,1.993,0,0,1,1.612.364,1.732,1.732,0,0,1,.676,1.456A16.288,16.288,0,0,1,224.692-3.9Q220.064,1.04,212.056,1.04Z"
                                    transform="translate(356 2554)"
                                    fill="#221c43"
                                />
                                <path
                                    v-else
                                    id="Path_5127"
                                    data-name="Path 5127"
                                    d="M151.112-8.736a18.4,18.4,0,0,0,3.172,2.7q2.652,1.976,2.652,3.64v.416Q156.936,0,154.544,0H132.7q-2.392,0-2.392-2.08v-.312a5.222,5.222,0,0,1,1.56-3.068q1.56-1.82.624-3.276L123.344-22.36l-5.2,4.784v6.24a7.654,7.654,0,0,0,2.34,5.148q2.34,2.548,2.34,3.8v.416q0,1.976-2.5,1.976H97.864q-2.5,0-2.5-1.976v-.416q0-1.248,2.08-3.8a8.124,8.124,0,0,0,2.08-5.148V-58.864a7.53,7.53,0,0,0-2.5-5.252q-2.5-2.548-2.5-3.588v-.416q0-1.144,2.288-2.392l16.64-7.7a3.971,3.971,0,0,1,3.432-.1,2.459,2.459,0,0,1,1.248,2.288v49.4l14.04-12.064a1.909,1.909,0,0,0,.988-2.08A5.3,5.3,0,0,0,132.132-43q-.78-.988-1.664-2.236a3.974,3.974,0,0,1-.884-2.184v-.416q0-2.08,2.392-2.08h16.432q2.392,0,2.392,1.976v.416a3.578,3.578,0,0,1-1.456,2.548,34.421,34.421,0,0,1-4.108,3.016,30.707,30.707,0,0,0-4.212,3.172l-6.656,6.136ZM160.992,0q-2.5,0-2.5-1.976v-.416q0-1.248,2.08-3.848a8.326,8.326,0,0,0,2.08-5.2V-31.2a8.238,8.238,0,0,0-2.08-5.252Q158.5-39,158.5-39.936v-.416q0-1.248,2.392-2.392l15.7-7.7q2.184-.936,3.432-.208a2.552,2.552,0,0,1,1.248,2.392V-11.44a7.835,7.835,0,0,0,2.34,5.2q2.34,2.6,2.34,3.848v.416q0,1.976-2.6,1.976Zm51.064,1.04q-7.9,0-12.428-4.992T195.1-18.2V-42.848h-3.952a2.325,2.325,0,0,1-1.716-.676,2.325,2.325,0,0,1-.676-1.716v-2.288a2.114,2.114,0,0,1,2.392-2.392h1.976a12.419,12.419,0,0,0,8.216-2.86,13.287,13.287,0,0,0,4.472-7.644q.52-2.7,2.808-2.7h2.392q2.808,0,2.808,2.7v10.5h10.712a2.325,2.325,0,0,1,1.716.676,2.325,2.325,0,0,1,.676,1.716v2.288a2.325,2.325,0,0,1-.676,1.716,2.325,2.325,0,0,1-1.716.676H213.824v24.96a5.929,5.929,0,0,0,1.352,4.108,4.3,4.3,0,0,0,3.328,1.508,7.626,7.626,0,0,0,6.864-3.848,2.671,2.671,0,0,1,1.664-1.092,1.993,1.993,0,0,1,1.612.364,1.732,1.732,0,0,1,.676,1.456A16.288,16.288,0,0,1,224.692-3.9Q220.064,1.04,212.056,1.04Z"
                                    transform="translate(356 2554)"
                                    fill="#FFFFFFA1"
                                />
                            </g>
                        </svg>
                    </router-link>
                </div>
                <div
                    class="
                        lg:flex
                        items
                        center
                        space-x-1
                        text-gray-900
                        dark:text-gray-200
                        hidden
                    "
                >
                    <div
                        class="
                            px-3
                            py-2
                            hover:text-gray-600
                            dark:hover:text-gray-400
                            tracking-wide
                        "
                    >
                        <a href="#">
                            <mega-menu></mega-menu>
                        </a>
                    </div>
                    <div
                        class="
                            px-3
                            py-2
                            hover:text-gray-600
                            dark:hover:text-gray-400
                            tracking-wide
                        "
                    >
                        <a href="#">
                            <dropdown-what-we-do></dropdown-what-we-do>
                        </a>
                    </div>
                    <div
                        class="
                            px-3
                            py-2
                            hover:text-gray-600
                            dark:hover:text-gray-400
                            tracking-wide
                        "
                    >
                        <router-link to="/plans"> Plans </router-link>
                    </div>
                    <div
                        class="
                            px-3
                            py-2
                            hover:text-gray-600
                            dark:hover:text-gray-400
                            tracking-wide
                        "
                    >
                        <a href="#"> Blog </a>
                    </div>
                    <div
                        class="
                            px-3
                            py-2
                            hover:text-gray-600
                            dark:hover:text-gray-400
                            tracking-wide
                        "
                    >
                        <a href="#"> Contact Us </a>
                    </div>
                </div>
                <div class="lg:flex hidden space-x-1 items-center">
                    <a
                        v-show="isNotLogedIn"
                        href="/login"
                        class="
                            px-1
                            py-2
                            hover:text-gray-900
                            tracking-wide
                            text-gray-700
                            dark:text-gray-200 dark:hover:text-gray-400
                        "
                    >Login</a
                    >
                    <div class="px-4" v-show="isNotLogedIn">
                        <div
                            class="bg-gray-900 dark:bg-gray-200 h-4 w-0.5"
                        ></div>
                    </div>
                    <router-link
                        v-show="isNotLogedIn"
                        to="/signup"
                        class="
                            font-sans
                            px-5
                            py-2
                            font-semibold
                            tracking-wider
                            bg-gray-900
                            dark:bg-gray-200
                            hover:opacity-70
                            text-gray-200
                            dark:text-gray-900
                            rounded-lg
                            text-sm
                            transition
                            duration-1000
                        "
                    >Signup</router-link
                    >
                    <router-link
                        v-show="!isNotLogedIn"
                        to="/dashboard"
                        class="
                            font-sans
                            px-5
                            py-2
                            font-semibold
                            tracking-wider
                            bg-gray-900
                            dark:bg-gray-200
                            hover:opacity-70
                            text-gray-200
                            dark:text-gray-900
                            rounded-lg
                            text-sm
                            transition
                            duration-1000
                        "
                    >Dashboard</router-link
                    >
                    <div class="px-2">
                        <div class="">
                            <div
                                class="p-2 rounded hover:bg-gray-400"
                                v-if="lightMode"
                            >
                                <MoonIcon
                                    class="
                                        h-5
                                        w-5
                                        text-gray-700
                                        hover:text-gray-900
                                        cursor-pointer
                                        transition
                                        duration-700
                                    "
                                    @click="switchDarkAndLight"
                                />
                            </div>
                            <div class="p-2 rounded hover:bg-gray-600" v-else>
                                <SunIcon
                                    class="h-5 w-5 text-gray-200 cursor-pointer"
                                    @click="switchDarkAndLight"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:hidden flex flex-row items-center">
                    <div class="px-2">
                        <div class="">
                            <div
                                class="p-2 rounded hover:bg-gray-400"
                                v-if="lightMode"
                            >
                                <MoonIcon
                                    class="
                                        h-5
                                        w-5
                                        text-gray-700
                                        hover:text-gray-900
                                        cursor-pointer
                                        transition
                                        duration-700
                                    "
                                    @click="switchDarkAndLight"
                                />
                            </div>
                            <div class="p-2 rounded hover:bg-gray-600" v-else>
                                <SunIcon
                                    class="h-5 w-5 text-gray-200 cursor-pointer"
                                    @click="switchDarkAndLight"
                                />
                            </div>
                        </div>
                    </div>
                    <button>
                        <MenuIcon
                            v-if="!mobileMenu"
                            class="h-6 w-6 dark:text-gray-200"
                            @click="switchMobileMenu"
                        />
                        <XIcon
                            v-else
                            class="h6 w-6 dark:text-gray-200"
                            @click="switchMobileMenu"
                        />
                    </button>
                </div>
            </nav>
            <div class="relative">
                <div
                    v-show="mobileMenu"
                    class="
                        z-50
                        absolute
                        overflow-hidden
                        w-full
                        md:flex md:flex-col
                        bg-gray-200
                        pb-10
                        lg:hidden
                        shadow-2xl
                        rounded-b-3xl
                        dark:bg-gray-900 dark:text-gray-200
                    "
                >
                    <div class="flex flex-col">
                        <a
                            href="#"
                            class="
                                px-10
                                sm:px-20
                                py-3
                                hover:bg-gray-400
                                dark:hover:bg-gray-700
                                rounded
                            "
                        >
                            <dropdown-what-we-do></dropdown-what-we-do>
                        </a>
                        <router-link
                            to="/plans"
                            class="
                                px-10
                                sm:px-20
                                py-3
                                hover:bg-gray-400
                                dark:hover:bg-gray-700
                                rounded
                            "
                        >
                            Plans
                        </router-link>
                        <router-link
                            to="/plans"
                            class="
                                px-10
                                sm:px-20
                                py-3
                                hover:bg-gray-400
                                dark:hover:bg-gray-700
                                rounded
                            "
                        >
                            Blog
                        </router-link>
                        <router-link
                            to="/plans"
                            class="
                                px-10
                                sm:px-20
                                py-3
                                hover:bg-gray-400
                                dark:hover:bg-gray-700
                                rounded
                            "
                        >
                            Contact Us
                        </router-link>
                    </div>
                    <div
                        class="
                            my-7
                            h-0.5
                            w-3/4
                            mx-auto
                            bg-blue-700
                            dark:bg-blue-700 dark:bg-opacity-10
                        "
                    ></div>
                    <div
                        class="
                            flex flex-col
                            md:flex-row
                            items-center
                            justify-center
                            space-y-4
                            md:space-x-4 md:space-y-0
                        "
                    >
                        <router-link
                            to="/login"
                            class="
                                font-nunito
                                xs:text-xl
                                px-12
                                xs:px-24
                                py-4
                                font-semibold
                                tracking-wider
                                bg-blue-900
                                dark:bg-blue-500 dark:hover:bg-blue-900
                                hover:bg-blue-900
                                text-gray-100
                                dark:text-gray-200
                                rounded-lg
                                transition
                                duration-1000
                            "
                        >Login</router-link
                        >

                        <a
                            href="#"
                            class="
                                font-nunito
                                xs:text-xl
                                px-12
                                xs:px-24
                                py-4
                                font-semibold
                                tracking-wider
                                bg-gray-900
                                dark:bg-gray-200 dark:hover:bg-gray-500
                                hover:bg-gray-700
                                text-gray-200
                                dark:text-gray-900 dark:hover:text-gray-200
                                rounded-lg
                                transition
                                duration-1000
                            "
                        >Signup</a
                        >
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { MoonIcon, SunIcon, MenuIcon, XIcon } from '@heroicons/vue/solid'
import DropdownWhatWeDo from './navigation/DropdownWhatWeDo.vue'
import MegaMenu from "./navigation/MegaMenu";
export default {
    setup() {
        return {}
    },
    components: {
        MoonIcon,
        SunIcon,
        MenuIcon,
        XIcon,
        DropdownWhatWeDo,
        MegaMenu
    },
    data() {
        return {
            lightMode: true,
            mobileMenu: false,
            isNotLogedIn: true,
        }
    },
    watch: {},
    methods: {
        switchDarkAndLight() {
            if (!this.lightMode) {
                document.body.classList.remove('dark')
                this.lightMode = true
            } else {
                document.body.classList.add('dark')
                this.lightMode = false
            }
        },
        switchMobileMenu() {
            return (this.mobileMenu = !this.mobileMenu)
        },
    },
    created() {
        if (localStorage.token) {
            this.isNotLogedIn = false
        }
    },
}
</script>

<style lang="scss" scoped></style>
