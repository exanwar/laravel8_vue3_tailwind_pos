<template>
    <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
        <button class="flex items-center outline-none" @focus="showMenu">
            Dropdown
            <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
            >
                <path
                    class="heroicon-ui"
                    d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                ></path>
            </svg>
        </button>
        <transition name="dropdown-fade">
            <div
                v-show="isVisible"
                class="
                    absolute
                    normal-case
                    font-normal
                    xs:left-0
                    lg:right-0
                    bg-white
                    shadow
                    overflow-hidden
                    rounded
                    w-48
                    border
                    mt-2
                    py-1
                    lg:z-20
                "
            >
                <div>
                    <router-link
                        to="/plans"
                        class="flex items-center px-3 py-3 hover:bg-gray-200"
                    >
                        <PresentationChartLineIcon
                            class="text-gray-600 h-6 w-6"
                        />
                        <span class="ml-2 text-gray-600">Plans</span>
                    </router-link>
                </div>
                <div>
                    <a
                        href="#"
                        class="flex items-center px-3 py-3 hover:bg-gray-200"
                    >
                        <svg
                            fill="currentColor"
                            class="text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path
                                class="heroicon-ui"
                                d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"
                            ></path>
                        </svg>
                        <span class="ml-2 text-gray-600">Analytics</span>
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        class="flex items-center px-3 py-3 hover:bg-gray-200"
                    >
                        <svg
                            fill="currentColor"
                            class="text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path
                                class="heroicon-ui"
                                d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                            ></path>
                        </svg>
                        <span class="ml-2 text-gray-600">Settings</span>
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        class="flex items-center px-3 py-3 hover:bg-gray-200"
                    >
                        <svg
                            fill="currentColor"
                            class="text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path
                                class="heroicon-ui"
                                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                            ></path>
                        </svg>
                        <span class="ml-2 text-gray-600">Help</span>
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { PresentationChartLineIcon } from '@heroicons/vue/outline'
export default {
    setup() {
        return {}
    },
    components: {
        PresentationChartLineIcon,
    },
    data() {
        return {
            isVisible: false,
        }
    },
    methods: {
        showMenu() {
            this.isVisible = true
        },
        hideMenu() {
            this.isVisible = false
        },
    },
}
</script>

<style lang="scss" scoped></style>
