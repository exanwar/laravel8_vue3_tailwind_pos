<template>
    <div class="bg-white rounded-lg shadow-child-nav-active flex flex-col justify-center overflow-hidden">
        <div class="w-full
                    bg-dashboard-blue
                    bg-opacity-80
                    px-5
                    py-3
                    flex
                    justify-between
                    items-center">
            <h1 class="text-gray-50 uppercase font-nunito tracking-wide font-bold text-center">Recent Sells</h1>
            <router-link to="/admin/sells">
                <h1 class="text-gray-50 uppercase font-nunito tracking-wide font-bold text-center cursor-pointer text-xs">Show more >></h1>
            </router-link>
        </div>
        <div class="px-5 py-3">
            <div
                class="flex space-x-1 items-center justify-between shadow-lg px-2 py-1 rounded-md mb-2 w-full transform durtation-700 hover:bg-blue-200"
                v-for="(item, index) in sellItems" :key="index"
            >
                <div class="w-1/2 flex items-center justify-start">
                    <div class="h-16 w-16 flex-none hidden sm:block">
                        <img
                            :src=" item.product.product_image"
                            :alt="item.product.name"
                            class="h-full w-full rounded-full "
                        >
                    </div>
                    <div class="flex flex-col ml-2 justify-center items-start">
                        <p class="font-semibold text-sm break-words text-gray-800">{{ item.product.name }}</p>
                        <p class="text-xs mb-1 font-light">$ {{ item.product.sell }} /{{ item.unit.symbol }}</p>
                    </div>
                </div>
                <div class="w-1/4 flex items-center justify-center space-x-1">
                    <div class="flex items-center">
                        <span class="font-bold text-gray-900 text-xs mr-1">{{ item.quantity }} {{ item.unit.symbol }}</span>
                    </div>
                </div>
                <div class="w-1/4 flex items-center justify-end">
                    <div class="flex items-center">
                        <span class="font-bold text-gray-900 text-sm mr-1">$ {{$filters.formatNumber(item.sell_on)}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from "vue"
import axios from 'axios'
export default {
    setup(){
        const sellItems = ref([])
        function getRecentSells(){
            axios.get('/api/user/recent-sells')
            .then(({data}) => {
                sellItems.value = data.data
            })
        }

        onMounted(() => {
            getRecentSells()
        })

        return {
            sellItems
        }
    }
}
</script>

<style scoped>

</style>
