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
                                Checkout
                            </h1>
                        </div>
                        <div class="w-full px-2 font-nunito">
                            <div class="flex justify-between items-center py-5 px-3">
                                <div class="flex items-center">
                                    <div class="h-16 w-16">
                                        <img
                                            class="h-full w-full rounded-full"
                                            :src="customer.image ? customer.image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                            :alt="customer.name ? customer.name : 'walk-in customer'"
                                        />
                                    </div>
                                    <div class="flex flex-col justify-start ml-4">
                                        <h2 class="font-semibold text-lg">{{ customer.name ? customer.name : 'Walk-in Customer' }}</h2>
                                        <div class="">
                                            <p class="mb-0 text-xs">{{ customer.phone }}</p>
                                            <p class="mb-0 text-xs">{{ customer.email_address }}</p>
                                            <p class="mb-0 text-xs">{{ customer.address }}</p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    class="
                                    bg-dashboard-blue
                                    px-5
                                    py-3.5
                                    rounded-xl
                                    text-gray-50
                                    text-sm
                                    font-semibold
                                    tracking-wide
                                    font-nunito
                                    transform
                                    duration-700
                                    hover:bg-blue-300 hover:text-gray-800
                                "
                                    @click.prevent="handleClose"
                                >
                                    Continue Shopping
                                </button>
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
                                        v-for="(item, index) in cartItems"
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
                                                        <p class="mb-0 font-semibold">Category: {{ item.product.category.name }}</p>
                                                        <p class="mb-0 font-semibold" v-if="item.product.sell">Sell on: ${{ item.product.sell }}/{{ item.product.unit.symbol }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-3 text-gray-600 font-lg font-bold text-center">{{ item.quantity }}</td>
                                        <td class="text-center font-bold">
                                            $ {{ $filters.formatNumber(item.price) }}
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
                            <div
                                class="
                                py-5
                                flex
                                justify-end
                                items-center
                                space-x-3
                            "
                            >
                                <button
                                    class="
                                    bg-red-100
                                    text-red-600
                                    px-3
                                    py-2
                                    rounded-lg
                                    transform
                                    duration-700
                                    hover:bg-red-600 hover:text-red-100
                                "
                                    @click="handleClose"
                                >
                                    Cancel
                                </button>
                                <button
                                    class="
                                    px-3
                                    py-2
                                    rounded-lg
                                    transform
                                    duration-700
                                    bg-green-100
                                    text-green-600
                                    hover:bg-green-600 hover:text-green-100
                                    disabled:opacity-50
                                "
                                    @click="submit"
                                >
                                    Checkout
                                </button>
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
export default {
    props:[
        'customer',
        'cartItems',
        'totalPrice',
        'tax',
        'taxAmount',
        'afterTaxTotal',

    ],
    components:{SearchIcon, ArrowNarrowRightIcon },
    setup() {
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

        return {
            errorToast,
            successToast,
        }
    },
    data() {
        return {
            devs: []
        }
    },
    watch: {},
    methods: {
        submit(){
            let data = {
                'customer_id': this.customer.id,
                'products' : this.cartItems,
            }
            axios.post('/api/user/sells', data)
                .then(response => {
                    this.handleClose();
                    this.handleClear();
                })
        },
        handleClose() {
            this.$emit('close')
        },
        handleClear(){
            this.$emit('clear')
        }

    },
}
</script>

<style lang="scss" scoped>

</style>


