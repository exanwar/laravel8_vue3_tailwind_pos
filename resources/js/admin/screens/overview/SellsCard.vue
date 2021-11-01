<template>
    <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center">
        <div class="flex-1 bg-white rounded-lg shadow-child-nav-active overflow-hidden">
            <div class="px-5 py-3">
                <div class="">
                    <h1 class="text-gray-700 font-nunito font-bold text-2xl">Sells</h1>
                    <p class="mt-3 text-gray-400 font-nunito tracking-wide text-sm">This Month</p>
                    <h3 class="text-xl font-nunito font-bold text-gray-600">$ {{ $filters.formatNumber(currenMonth.sells) }}</h3>
                    <p class="mt-2 text-gray-400 text-xs">{{ higherOrLower(currenMonth.sells, previousMonth.sells) }} earnings than last month.</p>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-white rounded-lg shadow-child-nav-active overflow-hidden">
            <div class="px-5 py-3">
                <div class="">
                    <h1 class="text-gray-700 font-nunito font-bold text-2xl">Profit </h1>
                    <p class="mt-3 text-gray-400 font-nunito tracking-wide text-sm">This Month</p>
                    <h3 class="text-xl font-nunito font-bold text-gray-600">$ {{ $filters.formatNumber(currenMonth.profit) }}</h3>
                    <p class="mt-2 text-gray-400 text-xs">{{ higherOrLower(currenMonth.profit, previousMonth.profit) }} earnings than last month.</p>
                </div>
            </div>
        </div>
        <div class="flex-1 bg-white rounded-lg shadow-child-nav-active overflow-hidden">
            <div class="px-5 py-3">
                <div class="">
                    <h1 class="text-gray-700 font-nunito font-bold text-2xl">Tax Collection</h1>
                    <p class="mt-3 text-gray-400 font-nunito tracking-wide text-sm">This Month</p>
                    <h3 class="text-xl font-nunito font-bold text-gray-600">$ {{ $filters.formatNumber(currenMonth.tax) }}</h3>
                    <p class="mt-2 text-gray-400 text-xs">{{ higherOrLower(currenMonth.tax, previousMonth.tax) }} earnings than last month.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
    setup() {
        const currenMonth = ref([])
        const previousMonth = ref([])
        function getSellsDataSet(){
            axios.get('/api/user/sells-earnings')
                .then(({data}) => {
                    currenMonth.value = data.current[0]
                    previousMonth.value = data.previous[0]
                })
        }

        function higherOrLower(current, previous){
            let diff = current - previous
            let percent = Number((Math.abs(diff) / current) * 100).toFixed(2)
            if(diff < 0 ){
                return percent + '% less'
            }

            return percent + '% more'
        }

        onMounted(() => {
            getSellsDataSet()
        })

        return {
            currenMonth,
            previousMonth,
            higherOrLower
        }
    },
}
</script>
<style lang="scss" scoped></style>
