<template>
    <router-link
        :to="to ? to : ''"
        class="
            flex
            items-center
            justify-between
            px-2.5
            py-2.5
            rounded-md
            cursor-pointer
        "
        :class="
            $route.name === routeName
                ? 'bg-nav-child-active shadow-child-nav-active'
                : ''
        "
    >
        <div
            class="
                flex
                justify-center
                items-center
                font-montserrat
                space-x-3
                text-gray-50
                transform
                duration-700
            "
            :class="
                $route.name === routeName
                    ? 'text-gray-100 scale-120'
                    : 'text-gray-600 hover:scale-125 hover:translate-x-5 hover:font-extrabold'
            "
        >
            <i :class="icon" class="text-xl"></i>
            <h3 v-show="navbarOpen || navbarFocused" class="font-montserrat">
                {{ title }}
            </h3>
        </div>
        <div
            v-show="badge"
            v-if="navbarOpen || navbarFocused"
            class="relative h-8 w-8"
        >
            <div
                class="h-8 w-8 rounded-full bg-blue-100"
                :class="
                    $route.name === routeName ? 'border border-blue-700' : ''
                "
            ></div>
            <div
                class="
                    absolute
                    top-1/2
                    left-1/2
                    transform
                    -translate-x-1/2 -translate-y-1/2
                "
            >
                <h2
                    class="text-blue-700 font-bold text-xs"
                    :class="
                        $route.name === routeName
                            ? 'text-blue-700'
                            : 'text-green-700'
                    "
                >
                    {{ badge }}
                </h2>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: [
        'to',
        'routeName',
        'icon',
        'title',
        'badge',
        'navbarOpen',
        'navbarFocused',
    ],
    setup() {
        return {}
    },
}
</script>

<style lang="scss" scoped></style>
