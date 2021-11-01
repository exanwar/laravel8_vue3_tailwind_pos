<template>
    <div class="">
        <Hero />
    </div>
    <div class="pt-10 pb-20 bg-white">
        <Offer class=""></Offer>
    </div>
    <div class="py-20 bg-white">
        <pricing-chart class=""></pricing-chart>
    </div>
</template>

<script>

import Hero from "../components/Hero";
import Offer from "../components/Offer";
import PricingChart from "./PricingChart";
export default {
    components:{
        Hero, Offer, PricingChart
    }
}
</script>

<style scoped>

</style>
