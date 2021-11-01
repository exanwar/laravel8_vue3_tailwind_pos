<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center">
            <h1 class="text-5xl text-gray-600 font-nunito font-semibold">
                Sells
            </h1>
            <div class="flex justify-center items-center space-x-3"></div>
        </div>
        <!-- component -->
        <div class="mt-10 overflow-x-auto">
            <div
                class="
                    min-w-screen
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    font-sans
                    overflow-hidden
                "
            >
                <div class="w-full">
                    <div
                        class="
                                flex
                                items-center
                                justify-start
                                bg-gray-50
                                rounded-xl
                                shadow
                                border
                                border-blue-300
                                w-full
                                md:w-8/12
                                lg:w-6/12
                                xl:w-5/12
                                2xl:w-3/12
                            "
                    >
                        <input
                            type="text"
                            placeholder="Search Sell.."
                            class="
                                    w-full
                                    px-4
                                    py-3
                                    rounded-xl
                                    text-gray-700
                                    tracking-wide
                                    focus:outline-none focus:border-blue-300
                                "
                            v-model="query" @keyup.enter="searchIt"
                        />
                        <div class="cursor-pointer" @click="searchIt">
                            <SearchIcon
                                class="
                                        h-4
                                        w-4
                                        xl:h-7 xl:w-7
                                        text-gray-700
                                        mr-4
                                    "
                            />
                        </div>
                    </div>
                    <div class="bg-white shadow-md rounded my-6">
                        <table class="w-full flex flex-row flex-no-wrap lg:bg-white rounded-lg overflow-hidden lg:shadow-xl">
                            <thead class="text-white">
                            <tr class="bg-dashboard-blue flex flex-col flex-no-wrap lg:table-row rounded-l-lg lg:rounded-none mb-2 lg:mb-0" v-for="(item, index) in sells" :key="index">
                                <th class="px-3 py-3 text-left lg:text-center">Bill ID#</th>
                                <th class="px-3 py-8 sm:py-9 lg:py-3 text-left lg:text-center">Customer</th>
                                <th class="px-3 py-3 text-left lg:text-center">Bill</th>
                                <th class="px-3 py-2.5 sm:py-2.5 lg:py-3 text-left lg:text-center">Date</th>
                                <th class="px-3 text-left lg:text-center custom-padding-action" width="110px">Actions</th>
                            </tr>
                            </thead>
                            <tbody class="flex-1 lg:flex-none">
                            <tr class="flex flex-col flex-no wrap lg:table-row mb-2 lg:mb-0" v-for="(item, index) in sells" :key="index">
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold" v-for="(i, index) in item.slice(0,1)" :key="index">
                                            {{ i.sell_invoice_number }}
                                        </span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 truncate" :class="item[0].customer ? 'py-2 sm:py-2' : 'py-8 sm:py-2'">
                                    <div class="flex items-center">
                                        <div class="h-20 w-20 hidden sm:block">
                                            <img class="h-full w-full rounded-full"
                                                 :src="item[0].customer ? item[0].customer.image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                 :alt="item[0].customer ? item[0].customer.name : 'walk-in customer'" />
                                        </div>
                                        <div class="flex flex-col justify-start sm:ml-4">
                                            <h2 class="font-bold text-base sm:text-lg">{{ item[0].customer ? item[0].customer.name : 'walk-in customer' }}</h2>
                                            <div>
                                                <p class="mb-0 font-semibold text-xs" v-show="item[0].customer">{{ item[0].customer ? item[0].customer.phone_number : null}}</p>
                                                <p class="mb-0 font-semibold text-xs" v-show="item[0].customer">{{ item[0].customer ? item[0].customer.email : null }}</p>
                                                <p class="mb-0 italic font-medium text-xs italic" v-show="item[0].customer">{{ item[0].customer ? item[0].customer.address : null }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                            $ {{ $filters.formatNumber(calculateBill(item)) }}
                                        </span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                             {{ $filters.formatDate(item[0].created_at) }}
                                        </span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-2.5 lg:py-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                    <div
                                        class="
                                                flex
                                                item-center
                                                lg:justify-center
                                                space-x-2
                                            "
                                    >
                                        <button
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click.prevent="showPreviewModal(item[0].sell_invoice_number, item[0].customer)">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                class="h-4 w-4"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bg-white shadow-md rounded my-6 flex flex-col md:flex-row justify-between items-center my-10 mb-10">
                        <div class="text-gray-500 flex items-center space-x-4 justify-center py-3 px-1 sm:px-10" v-if="last_page > 1">
                            <div
                                class="p-1 rounded-md bg-gray-300 "
                                @click="currentPage >= 2 ? goToPage(currentPage - 1) : null"
                                :class="currentPage >= 2 ? 'hover:bg-gray-700 hover:text-gray-100 cursor-pointer' : 'cursor-not-allowed'"
                            >
                                <chevron-left-icon class="h-5 w-5" />
                            </div>
                            <div v-for="index in last_page" :key="index">
                                <div
                                    class="px-2 transform duration-700 rounded-md text-xl cursor-pointer flex justify-center items-center"
                                    @click="goToPage(index)"
                                    :class="[
                                        index === currentPage ? 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rotate-45 text-gray-100' : 'bg-gray-300 hover:bg-gray-700 hover:text-gray-100'
                                    ]"
                                >
                                    <span :class="index === currentPage ? 'transform -rotate-45' : '' ">{{ index }}</span>

                                </div>
                            </div>
                            <div
                                class="p-1 rounded-md bg-gray-300 "
                                @click="currentPage !== last_page ? goToPage(currentPage + 1) : null"
                                :class="currentPage !== last_page ? 'hover:bg-gray-700 hover:text-gray-100 cursor-pointer' : 'cursor-not-allowed'"
                            >
                                <chevron-right-icon class="h-5 w-5" />
                            </div>
                        </div>
                        <div class="px-5 text-gray-500 italic text-sm py-3">
                            Showing {{ from }} to {{ to }} of {{ total }} sells
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PreviewSingleSells v-show="$can('access_sells')" v-if="SingleSellPreviewVisibility" :id="previewId" :customer="previewCustomer" @close="SingleSellPreviewVisibility = false" />
</template>

<script>
import {ref, onMounted, inject } from "vue";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/vue/outline'
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import axios from "axios";
import PreviewSingleSells from "./PreviewSingleSells";
export default {
    components:{ SearchIcon, ChevronLeftIcon, ChevronRightIcon, PreviewSingleSells },
    setup(){
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const sells = ref([])
        const last_page = ref(null)
        const from = ref(null)
        const to = ref(null)
        const total = ref(null)

        function getSells(){
            axios.get('/api/user/sells')
                .then(({data}) => {
                    sells.value = data.sells;
                    last_page.value = data.lastPage
                    from.value = data.from
                    to.value = data.to
                    total.value = data.total
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/user/find-sell?q=' + query.value)
                    .then( ({data}) => {
                        console.log(data.sells)
                        sells.value = data.sells;
                        last_page.value = data.lastPage
                        from.value = data.from
                        to.value = data.to
                        total.value = data.total
                    })
                    .catch(error => {
                        InjectDirectly.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: ''
                        })
                    })
            } else {
                getSells()
            }
        }

        const currentPage = ref(1)
        function goToPage(page){
            axios.get('/api/user/sells?page=' + page)
                .then(({data}) => {
                    console.log(data)
                    sells.value = data.sells;
                    currentPage.value = page
                    last_page.value = data.lastPage
                    from.value = data.from
                    to.value = data.to
                    total.value = data.total
                })
        }

        const SingleSellPreviewVisibility = ref(false)
        const previewId = ref(null)
        const previewCustomer = ref(null)


        function reload(){
            getSells()
        }

        function showPreviewModal(id, customer){
            SingleSellPreviewVisibility.value = true
            previewId.value = id
            previewCustomer.value = customer
        }

        function deleteSell(id){
            InjectDirectly.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/api/user/sells/' + id)
                        .then( response => {
                            getSells()
                            InjectDirectly.fire("Deleted!",
                                "Sell record has been deleted.",
                                "success"
                            );
                        })
                        .catch(error => {
                            InjectDirectly.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                                footer: ''
                            })
                        })
                }
            })
        }

        function calculateBill(items){
            let sum = 0

            items.map(item => {
                sum = sum + item.sell_on + item.tax_amount
            })

            return sum
        }


        onMounted(() => {
            getSells()
        })

        return {
            sells,
            from,
            to,
            total,
            last_page,
            currentPage,
            query,
            searchIt,
            goToPage,
            reload,
            SingleSellPreviewVisibility,
            previewId,
            showPreviewModal,
            deleteSell,
            previewCustomer,
            calculateBill,
        }
    }
}
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
    table {
        display: inline-table !important;
    }

    thead tr:not(:first-child) {
        display: none;
    }

    .custom-padding-action{
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
}

.custom-padding-action{
    padding-top: 0.93rem;
    padding-bottom: 0.93rem;
}


td:not(:last-child) {
    border-bottom: 0;
}

th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>
