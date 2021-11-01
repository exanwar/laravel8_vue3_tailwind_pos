<template>
    <div class="bg-white dark:bg-dark-screen">
        <div class="container">
            <nav-bar></nav-bar>
        </div>
        <div
            class="bg-no-repeat"
            style="
                background-image: url('https://techypark.com/assets/secure/images/shapes/background_shape_02.png');
            "
        >
            <router-view :key="$route.fullpath"></router-view>

        </div>

        <div class="bg-footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
    setup() {
        return {}
    },
    components: {
        NavBar,
        Footer,
    },
}
</script>

<style></style>
