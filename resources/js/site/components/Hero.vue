<template>
    <!-- Hero Section -->
    <div
        class="
            lg:max-w-7xl
            md:max-w-3xl
            mx-auto
            flex
            md:flex-row
            flex-col
            justify-center
            items-center
        "
    >
        <div class="md:hidden flex justify-center mt-10">
            <img
                src="https://iokit.netlify.app/assets/images/illustration/Payment%20Processing.svg"
                class="h-full w-6/12"
            />
        </div>
        <div class="md:flex-1 lg:pl-52 flex flex-col justify-center p-8">
            <h1
                class="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-7xl
                    font-bold
                    text-gray-700
                    dark:text-gray-200
                    font-pattaya
                    tracking-wider
                    lg:tracking-wide
                    leading-tight
                "
            >
                Grow Your Search for your stunning great
            </h1>
            <div
                class="
                    mt-10
                    pr-16
                    text-gray-900
                    dark:text-gray-200
                    text-md
                    leading-5
                    tracking-wide
                    font-medium
                "
            >
                <p class="font-nunito">
                    iokit gives you the freedom to create your saas, startup or
                    digital agency platform easy.
                </p>
                <p class="font-nunito mt-2">lets start with us</p>
            </div>
            <div class="mt-10">
                <button
                    class="
                        flex
                        items-center
                        bg-blue-500
                        rounded-lg
                        px-4
                        py-2.5
                        text-gray-100
                        font-bold
                        hover:bg-blue-900
                    "
                >
                    <span class="tracking-tight font-sm">Get Started </span>
                    <span
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            /></svg
                    ></span>
                </button>
            </div>
        </div>
        <div class="md:flex md:flex-1 lg:py-10 hidden">
            <img
                src="https://iokit.netlify.app/assets/images/illustration/Payment%20Processing.svg"
                class="h-full w-full"
            />
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        return {}
    },
}
</script>

<style lang="scss" scoped></style>
