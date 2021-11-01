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
            <h1 class="text-gray-50 uppercase font-nunito tracking-wide font-bold text-center">Customers</h1>
        </div>
        <div class="relative px-5 py-3">
            <DoughnutChart :chartData="testData" />
            <div class="absolute
                            top-1/2
                            left-1/2
                            transform
                            -translate-x-1/2 -translate-y-1/2"
            >
                <div class="flex flex-col justify-center items-center mt-12 font-nunito">
                    <h1 class="text-xl font-semibold text-gray-600">Total</h1>
                    <p class="font-bold text-2xl text-gray-700">{{ totalCustomers }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, onMounted, ref } from "vue";
import axios from "axios";
import { DoughnutChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
export default {
    components: { DoughnutChart },
    setup() {
        const customersDataSet = ref([])
        const customersDataSetLabels = ref([])
        const customersDataSetBackground = ref([])
        const colors = ['#4fbac8', '#3b8c96', '#049db1', '#048d9f', '#037685', '#025e6a', '#024d57', '#78d7ee', '#9d95f5', '#7367f0', '#685dd8', '#453e90']
        function getCustomersDataSet(){
            axios.get('/api/user/customers-count')
                .then(({data}) => {
                    customersDataSet.value = data.customers
                    customersDataSetLabels.value = data.months

                    // for(let i = 1; i<= data.months.length; i++){
                    //     let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                    //     customersDataSetBackground.value.push(color)
                    // }
                    for (let i = 1; i <= data.months.length; i++){
                        customersDataSetBackground.value.push(colors[i])
                    }

                })
        }

        const testData = computed(() => ({
            labels: customersDataSetLabels.value,
            datasets: [
                {
                    data: customersDataSet.value,
                    backgroundColor: customersDataSetBackground.value,
                    hoverOffset: 4
                }
            ]
        }))


        const totalCustomers = computed(() => {
            let sum = 0
            customersDataSet.value.map(item => sum = sum + item)
            return sum;
        })

        onMounted(() => {
            getCustomersDataSet()
        })

        return {
            customersDataSet,
            testData,
            totalCustomers
        }
    },
}
</script>
<style lang="scss" scoped></style>
