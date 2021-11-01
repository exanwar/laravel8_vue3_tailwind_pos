<template>
    <div class="bg-white rounded-lg shadow-child-nav-active flex flex-col justify-center items-center overflow-hidden">
        <div class="w-full
                    bg-dashboard-blue
                    bg-opacity-80
                    px-5
                    py-3
                    flex
                    justify-between
                    items-center">
            <h1 class="text-gray-50 uppercase font-nunito tracking-wide font-bold text-center">Sells for {{ customersDataSetYear }} </h1>
        </div>
        <div class="relative p-3">
            <BarChart :chartData="testData" :options="options"/>

        </div>
    </div>
</template>

<script>
import {computed, onMounted, ref } from "vue";
import axios from "axios";
import { BarChart } from 'vue-chart-3';
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
export default {
    components: { BarChart },
    setup() {
        const customersDataSet = ref([])
        const customersDataSetYear = ref(null)
        const customersDataSetLabels = ref([])
        const customersDataSetBackground = ref([])
        function getSellsDataSet(){
            axios.get('/api/user/sells-count')
                .then(({data}) => {
                    customersDataSet.value = data.sells
                    customersDataSetLabels.value = data.months
                    customersDataSetYear.value = data.year

                    for(let i = 1; i<= data.months.length; i++){
                        let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                        customersDataSetBackground.value.push(color)
                    }
                })
        }

        const testData = computed(() => ({
            labels: customersDataSetLabels.value,
            datasets: [
                {
                    label: customersDataSetYear.value,
                    data: customersDataSet.value,
                    backgroundColor: '#71d3f0E6',
                    borderColor: '#71d3f0'
                }
            ]
        }))

        const options = {

        }



        onMounted(() => {
            getSellsDataSet()
        })

        return {
            testData,
            options,
            customersDataSetYear
        }
    },
}
</script>
<style lang="scss" scoped></style>
