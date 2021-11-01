<template>
    <div class="flex flex-col">
        <div class="grid grid-cols-1 gap-6 pb-5">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div class="">
                    <CustomersChart />
                </div>
                <div class="">
                    <ShopChart />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomersChart from "./CustomersChart";
import ShopChart from "./ShopChart";
export default {
    name: "Overview",
    components: {ShopChart, CustomersChart}
}
</script>

<style scoped>

</style>
