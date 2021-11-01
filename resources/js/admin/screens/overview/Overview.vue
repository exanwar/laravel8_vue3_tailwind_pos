<template>
    <div class="flex flex-col">
        <div class="flex-1 flex flex-col">
            <div class="px-5 md:px-10 py-5 flex flex-col justify-center items-center">
                <div class="h-full w-full flex justify-center mb-1 md:mb-3">
                    <img :src="shop.logo ? shop.logo : null" :alt="shop.name" class="h-20 w-20 md:h-32 md:w-32 rounded-full">
                </div>
                <div class="text-center font-nunito tracking-wide">
                    <h1 class="text-xl md:text-3xl font-bold text-gray-700">{{ shop.name }}</h1>
                    <p class="text-xs md:text-md font-semibold text-gray-500 italic">Shop#{{ shop.shop_no }}, Road#{{ shop.road_no }}, {{ shop.area_name }}</p>
                    <p class="text-xs md:text-md font-semibold text-gray-500 italic">{{ shop.city }}, {{ shop.district }}, {{ shop.division }} - {{ shop.zip }}</p>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-6 pb-5">
            <div class="">
                <SellsCard />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div class="">
                    <CustomersChart />
                </div>
                <div class="">
                    <SellsChart />
                </div>
                <div class="">
                    <RecentSells />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import CustomersChart from "./CustomersChart";
import SellsChart from "./SellsChart";
import SellsCard from "./SellsCard";
import RecentSells from "./RecentSells";

export default {
    components: {RecentSells, SellsCard, CustomersChart, SellsChart },
    setup() {
        const store = useStore()
        const shop = computed(() => {
            return store.getters.getShopDetails
        })

        return {
            shop,
        }
    },
}
</script>

