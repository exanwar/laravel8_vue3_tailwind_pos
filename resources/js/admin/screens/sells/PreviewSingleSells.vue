<template>
    <div
        class="
            fixed
            inset-0
            w-full
            h-screen
            flex
            items-center
            justify-center
            z-50
            bg-dashboard-modal
        "
    >
        <div class="relative" style="min-width: 30rem; max-width: 55rem">
            <div
                class="
                    bg-gray-200
                    rounded-xl
                    shadow-2xl shadow-child-nav-active
                    p-5
                    overflow-y-scroll
                    scrollbar
                    scrollbar-thin
                    scrollbar-thumb-rounded-full
                    scrollbar-track-rounded-full
                    scrollbar-thumb-dashboard-scroll-stick
                    scrollbar-track-gray-200
                "
                style="min-height: 35rem; max-height: 55rem"
            >
                <div class="grid grid-cols-1 gap-6">
                    <div class="bg-white rounded-lg overflow-hidden">
                        <div
                            class="
                                bg-gray-900
                                px-5
                                py-5
                                flex
                                justify-between
                                items-center
                            "
                        >
                            <h1
                                class="
                                    text-gray-200
                                    uppercase
                                    font-nunito
                                    tracking-wide
                                "
                            >
                                Preview Bill ID# {{ id }}
                            </h1>
                        </div>
                        <div class="w-full px-2 font-nunito">
                            <div class="flex justify-between items-center py-5 px-3">
                                <div class="flex items-center">
                                    <div class="h-16 w-16">
                                        <img
                                            class="h-full w-full rounded-full"
                                            :src="customer ? customer.image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                            :alt="customer ? customer.name : 'walk-in customer'"
                                        />
                                    </div>
                                    <div class="flex flex-col justify-start ml-4">
                                        <h2 class="font-semibold text-lg">{{ customer ? customer.name : 'Walk-in Customer' }}</h2>
                                        <div class="">
                                            <p class="mb-0 text-xs">{{ customer ? customer.phone_number : null }}</p>
                                            <p class="mb-0 text-xs">{{ customer ? customer.email : null }}</p>
                                            <p class="mb-0 text-xs">{{ customer ? customer.address : null }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white shadow-md rounded my-6">
                                <table class="w-full table-auto">
                                    <thead>
                                    <tr
                                        class="
                                        bg-gray-500
                                        text-gray-50
                                        uppercase
                                        text-sm
                                        leading-normal
                                        w-full
                                    "
                                    >

                                        <th class="px-6 py-3 text-center">SL#</th>
                                        <th class="px-6 py-3 text-center">Product</th>
                                        <th class="px-6 py-3 text-center">Quantity</th>
                                        <th class="px-6 py-3 text-center">Price</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-gray-600 text-sm font-light">
                                    <tr
                                        v-for="(item, index) in items"
                                        :key="index"
                                        class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100                                   "
                                    >
                                        <td class="text-center font-bold">{{ index + 1 }}</td>
                                        <td>
                                            <div class="flex items-center py-3">
                                                <div class="h-16 w-16 lg:h-20 lg:w-20">
                                                    <img
                                                        class="h-full w-full rounded-full"
                                                        :src="item.product ? item.product.product_image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                        :alt="item.product.name" />
                                                </div>
                                                <div class="flex flex-col justify-start ml-4">
                                                    <h2 class="font-bold text-sm">{{ item.product.name }}</h2>
                                                    <div class="text-xs">
                                                        <p class="mb-0 font-semibold">Barcode: {{ item.product.barcode }}</p>
                                                        <p class="mb-0 font-semibold">Category: {{ item.category.name }}</p>
                                                        <p class="mb-0 font-semibold" v-if="item.product.sell">Sell on: ${{ item.product.sell }}/{{ item.unit.symbol }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-gray-600 font-lg font-bold text-center">{{ item.quantity }}</td>
                                        <td class="text-center font-bold">
                                            $ {{ $filters.formatNumber(item.sell_on) }}
                                        </td>
                                    </tr>
                                    <tr class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100 font-nunito">
                                        <td colspan="3" class="text-center py-4 font-semibold">
                                            Total Price
                                        </td>
                                        <td class="text-center font-bold">
                                            $ {{ $filters.formatNumber(totalPrice) }}
                                        </td>
                                    </tr>
                                    <tr class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100 font-nunito">
                                        <td colspan="3" class="text-center py-4 font-semibold">
                                            Tax ({{ $filters.formatNumber(tax) }} %)
                                        </td>
                                        <td class="text-center font-bold">
                                            $ {{ $filters.formatNumber(taxAmount) }}
                                        </td>
                                    </tr>
                                    <tr class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100 font-nunito">
                                        <td colspan="3" class="text-center py-4 font-semibold">
                                            Cumulative price
                                        </td>
                                        <td class="text-center font-bold">
                                            $ {{ $filters.formatNumber(afterTaxTotal) }}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="
                    absolute
                    top-0
                    right-0
                    text-4xl
                    transform
                    -translate-y-2.5
                    translate-x-1.5
                    cursor-pointer
                    text-gray-900
                "
                @click.prevent="handleClose"
            >
                <div class="relative">
                    <div class="bg-gray-200 h-12 w-12 rounded-full"></div>
                    <div
                        class="
                            absolute
                            top-1/2
                            left-1/2
                            transform
                            -translate-x-1/2 -translate-y-1/2
                        "
                    >
                        <i class="far fa-times-circle"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { SearchIcon, ArrowNarrowRightIcon   } from '@heroicons/vue/outline'
import { useToast } from 'vue-toastification'
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
    props:[
        'customer',
        'id'
    ],
    components:{SearchIcon, ArrowNarrowRightIcon },
    setup(props) {
        const store = useStore()
        const items = ref([])
        function getItems(){
            axios.get('/api/user/sells/' + props.id)
            .then(({data}) => {
                items.value = data.data
            })
        }

        const tax = computed(() => {
            return store.getters.getTax
        })

        const totalPrice = computed(() => {
            let sum = 0
            items.value.map(i => sum = sum + i.sell_on)
            return Number.parseFloat(sum).toFixed(2)
        })

        const taxAmount = computed(() => {
            let amount = totalPrice.value * (store.getters.getTax / 100)
            return Number.parseFloat(amount).toFixed(2);
        })

        const afterTaxTotal = computed(() =>{
            let amountAfterTax = Number.parseFloat(taxAmount.value) + Number.parseFloat(totalPrice.value)
            return Number.parseFloat(amountAfterTax).toFixed(2)
        })


        const toast = useToast()
        function successToast(message) {
            this.toast.success(message, {
                position: 'top-right',
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: 'button',
                icon: true,
                rtl: false,
            })
        }
        function errorToast(message) {
            this.toast.error(message, {
                position: 'top-right',
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: 'button',
                icon: true,
                rtl: false,
            })
        }

        onMounted(() => {
            getItems()
        })

        return {
            errorToast,
            successToast,
            items,
            tax,
            totalPrice,
            taxAmount,
            afterTaxTotal
        }
    },
    methods: {
        handleClose() {
            this.$emit('close')
        },

    },
}
</script>

<style lang="scss" scoped>

</style>


