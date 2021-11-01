<template>
    <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
        <button class="flex items-center outline-none" @focus="showMenu">
            What we do
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
                    bg-gray-100
                    shadow
                    overflow-hidden
                    rounded-xl
                    w-60
                    border
                    mt-2
                    py-2.5
                    px-2
                    lg:z-20
                "
            >
                <div v-for="(page, index) in pages" :key="index">
                    <router-link
                        :to="'/wordpress-maintenance-services/' + page.pageSlug"
                        class="
                            flex
                            items-center
                            px-3
                            py-3
                            hover:bg-gray-200
                            rounded-lg
                            mb-0.5
                        "
                        :class="
                            this.$route.fullPath ==
                            '/wordpress-maintenance-services/' + page.pageSlug
                                ? 'bg-gray-200 rounded-lg'
                                : ''
                        "
                    >
                        <i
                            class="text-sm"
                            v-show="page.pageIcon"
                            :class="page.pageIcon ? page.pageIcon : ''"
                        ></i>

                        <span
                            class="text-gray-600 text-sm"
                            :class="page.pageIcon ? 'ml-2' : ''"
                        >{{ page.pageName }}</span
                        >
                    </router-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    setup() {
        return {}
    },
    components: {},
    data() {
        return {
            isVisible: false,
            pages: [
                {
                    pageIcon: 'ri-government-fill',
                    pageSlug: 'home',
                    pageName: 'Home'
                }
            ],
        }
    },
    methods: {
        showMenu() {
            this.isVisible = true
        },
        hideMenu() {
            this.isVisible = false
        }
    }
}
</script>

<style lang="scss" scoped></style>
