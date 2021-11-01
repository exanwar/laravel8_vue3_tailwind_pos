<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center">
            <h1 class="text-3xl text-gray-600 font-nunito font-semibold">
                Vendors
            </h1>
            <div class="flex justify-center items-center space-x-3">

            </div>
        </div>
        <!-- component -->
        <div class="mt-0">
            <div
                class="
                    min-w-screen
                    bg-gray-100
                    flex
                    flex-col xl:flex-row
                    xl:space-x-5
                    justify-between
                    font-sans
                    overflow-hidden
                "
            >
                <div class="w-full xl:w-8/12">
                    <div class="flex mt-10 items-center space-x-4">
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
                                    w-3/12
                                "
                        >
                            <input
                                type="text"
                                placeholder="Search Vendor.."
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
                        <div class="w-4/12">
                            <VueMultiselect
                                v-model="selectedCategory"
                                :options= "categories"
                                :multiple="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :preserve-search="true"
                                openDirection="bottom"
                                placeholder="Pick a Category"
                                label="name"
                                track-by="id"
                                :preselect-first="false"
                                :searchable="true"
                                :loading="isSearchingCategory"
                                :internal-search="false"
                                :options-limit="300"
                                :max-height="600"
                                :show-no-results="true"
                                :hide-selected="false"
                                @search-change="fetchCategory"
                            >
                                <template slot="selection" slot-scope="{ values, search, isOpen }">
                                    <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                        {{ values.length }} options selected
                                    </span>
                                </template>
                            </VueMultiselect>
                        </div>
                        <div class="w-4/12">
                            <VueMultiselect
                                v-model="selectedBrand"
                                :options= "brands"
                                :multiple="false"
                                :close-on-select="true"
                                :clear-on-select="false"
                                :preserve-search="true"
                                openDirection="bottom"
                                placeholder="Pick a brand"
                                label="name"
                                track-by="id"
                                :preselect-first="false"
                                :searchable="true"
                                :loading="isSearchingBrand"
                                :internal-search="false"
                                :options-limit="300"
                                :max-height="600"
                                :show-no-results="true"
                                :hide-selected="false"
                                @search-change="fetchBrand"
                            >
                                <template  v-slot:option="{ option }">
                                    <div class="flex items-center">
                                        <div class="h-12 w-12">
                                            <img class="h-full w-full rounded-full" :src="option.brand_logo" :alt="option.name" />
                                        </div>
                                        <div class="flex flex-col justify-start ml-4">
                                            <h2 class="font-semibold text-sm">{{ option.name }}</h2>
                                        </div>
                                    </div>
                                </template>
                            </VueMultiselect>
                        </div>
                    </div>
                    <div class="mx-auto">
                        <div class="flex flex-wrap -mx-4">
                            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4" v-for="(item, index) in products.data" :key="index">
                                <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                    <div class="relative pb-48 overflow-hidden">
                                        <img class="absolute inset-0 h-full w-full object-cover" :src="item.product_image ? item.product_image : 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'" :alt="item.name">
                                    </div>
                                    <div class="p-4">
                                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{{ item.category.name }}</span>
                                        <h2 class="mt-2 mb-2  font-bold">{{ item.name }}</h2>
                                        <p class="text-sm break-words" v-html="$filters.limitProductDetailsCard(item.details)"></p>
                                        <div class="mt-3 flex items-center">
                                            <span class="text-sm font-semibold"></span>&nbsp;<span class="font-bold text-xl">{{ $filters.formatNumber(item.sell) }}</span>&nbsp;<span class="text-sm font-semibold">$</span>
                                        </div>
                                    </div>
                                    <div class="p-4 border-t border-b text-xs text-gray-700 flex items-center">
                                        <div class="h-16 w-16 bg-pink-400 rounded-full">
                                            <img class="h-full w-full rounded-full p-0.5" :src="item.brand ? item.brand.brand_logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'" alt="employee.f_name" />
                                        </div>
                                        <div class="flex flex-col justify-start ml-4">
                                            <h2 class="font-bold text-xl">{{ item.brand.name }}</h2>
                                        </div>
                                    </div>
                                    <div class="p-4 flex justify-between items-center">
                                        <div class="flex items-center text-sm text-gray-600">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-400">
                                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                            </svg>
                                            <span class="ml-2">{{ item.sold }} {{ item.unit.symbol }} sold</span>
                                        </div>
                                        <button
                                            class="
                                                bg-dashboard-blue
                                                p-4
                                                rounded-full
                                                text-gray-50
                                                font-semibold
                                                tracking-wide
                                                font-nunito
                                                transform
                                                duration-700
                                                hover:bg-opacity-80
                                                group
                                                "
                                            @click.prevent="addToCart(item)"
                                        >
                                            <ShoppingCartIcon class="h-4 w-4 group-hover:h-6 group-hover:w-6"/>
                                        </button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow-md rounded my-6 flex justify-between items-center">
                        <div class="text-gray-500 flex items-center space-x-4 justify-center py-3 px-10" v-if="last_page > 1">
                            <div v-for="(link, index) in products.meta.links" :key="index">
                                <div
                                    class="p-1 rounded-md bg-gray-300 "
                                    v-if="link.label.includes('Previous')"
                                    @click="goToPage(link.url)"
                                    :class="link.url ? 'hover:bg-gray-700 hover:text-gray-100 cursor-pointer' : 'cursor-not-allowed'"
                                >
                                    <chevron-left-icon class="h-5 w-5" />
                                </div>
                                <div
                                    class="p-1 rounded-md bg-gray-300 "
                                    v-else-if="link.label.includes('Next')"
                                    @click="goToPage(link.url)"
                                    :class="link.url ? 'hover:bg-gray-700 hover:text-gray-100 cursor-pointer' : 'cursor-not-allowed'"
                                >
                                    <chevron-right-icon class="h-5 w-5" />
                                </div>
                                <div
                                    class="px-2 transform duration-700 rounded-md text-xl cursor-pointer flex justify-center items-center"
                                    v-else
                                    @click="goToPage(link.url)"
                                    :class="[
                                        link.active ? 'bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rotate-45 text-gray-100' : 'bg-gray-300 hover:bg-gray-700 hover:text-gray-100',
                                        link.url ? '' : 'opacity-50 cursor-not-allowed'
                                    ]"
                                >
                                    <span :class="link.active ? 'transform -rotate-45' : '' ">{{ link.label }}</span>

                                </div>
                            </div>
                        </div>
                        <div class="px-5 text-gray-500 italic text-sm py-3">
                            Showing {{ from }} to {{ to }} of {{ total }} customers
                        </div>
                    </div>
                </div>
                <div class="w-full xl:w-4/12 h-full overflow-hidden bg-white shadow-lg rounded-md my-5 xl:my-0">
                    <div class="w-full
                                bg-dashboard-blue
                                bg-opacity-80
                                px-5
                                py-3
                                flex
                                justify-between
                                items-center">
                        <h1 class="text-gray-50 uppercase font-nunito tracking-wide font-bold">Cart</h1>
                    </div>
                    <div class="flex mt-2 space-x-2 items-center px-5">
                            <div class="w-4/5">
                                <VueMultiselect
                                    v-model="selectedCustomer"
                                    :options= "customers"
                                    :multiple="false"
                                    :close-on-select="true"
                                    :clear-on-select="false"
                                    :preserve-search="true"
                                    openDirection="bottom"
                                    placeholder="Pick a customer"
                                    label="name"
                                    track-by="id"
                                    :preselect-first="false"
                                    :searchable="true"
                                    :loading="isSearchingCustomer"
                                    :internal-search="false"
                                    :options-limit="300"
                                    :max-height="600"
                                    :show-no-results="true"
                                    :hide-selected="false"
                                    @search-change="fetchCustomer"
                                >
                                    <template  v-slot:option="{ option }">
                                        <div class="flex items-center">
                                            <div class="h-12 w-12">
                                                <img class="h-full w-full rounded-full" :src="option.image" :alt="option.image" />
                                            </div>
                                            <div class="flex flex-col justify-start ml-4">
                                                <h2 class="font-semibold text-lg">{{ option.name }}</h2>
                                                <div class="">
                                                    <p class="mb-0 text-md">{{ option.phone }}</p>
                                                    <p class="mb-0 text-md">{{ option.email_address }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </VueMultiselect>
                            </div>
                            <div class="w-1/5">
                                <button
                                    class="
                                    bg-dashboard-blue
                                    px-5
                                    py-3.5
                                    rounded-xl
                                    text-gray-50
                                    font-semibold
                                    tracking-wide
                                    font-nunito
                                    transform
                                    duration-700
                                    hover:bg-blue-300 hover:text-gray-800
                                "
                                    v-show="$can('create_customers')"
                                    @click.prevent="addCustomerVisibility = true"
                                >
                                    Add
                                </button>
                            </div>
                        </div>

                    <div class="
                                px-3
                                mt-3
                                scrollbar
                                scrollbar-thin
                                scrollbar-thumb-rounded-full
                                scrollbar-track-rounded-full
                                scrollbar-thumb-dashboard-scroll-stick
                                scrollbar-track-gray-200
                                font-nunito
                            "
                            style="height: 32rem; overflow-y: auto">
                        <div class="flex space-x-1 items-center justify-between shadow-lg px-2 py-1 rounded-md mb-2 w-full transform durtation-700 hover:bg-blue-200" v-for="(item, index) in cartItems" :key="index">
                            <div class="w-1/3 sm:w-1/2 flex items-center justify-start">
                                <div class="h-16 w-16 flex-none hidden sm:block">
                                    <img
                                        :src=" item.product.product_image"
                                        :alt="item.product.name"
                                        class="h-full w-full rounded-full "
                                    >
                                </div>
                                <div class="flex flex-col ml-2 justify-center items-start">
                                    <p class="font-semibold text-sm break-words text-gray-800">{{ item.product.name }}</p>
                                    <p class="text-xs mb-1 font-light">$ {{ item.product.sell }} /{{ item.product.unit.symbol }}</p>
                                </div>
                            </div>
                            <div class="w-1/3 sm:w-1/4 flex items-center justify-center space-x-1">
                                <button class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 disabled:opacity-50" @click.prevent="increment(item.product)" :disabled="item.product.stock === item.quantity">
                                    <PlusIcon class="h-4 w-4" />
                                </button>

                                <input type="number"
                                       class="px-1 py-1.5 rounded-xl text-center text-gray-700 tracking-wide border border-blue-300 focus:outline-none focus:border-blue-300"
                                       id="count"
                                       :value="item.quantity"
                                       maxlength="3"
                                       size="3" style="width:3rem"/>

                                <button class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 " @click.prevent="decrement(item.product)">
                                    <MinusIcon class="h-4 w-4" />
                                </button>
                            </div>
                            <div class="w-1/3 sm:w-1/4 flex items-center justify-end">
                                <div class="flex items-center">
                                    <span class="font-bold text-gray-900 text-sm mr-1">$ {{$filters.formatNumber(item.price)}}</span>
                                </div>
                                <button class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 " @click.prevent="remove(item.product)">
                                    <TrashIcon class="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="my-2 px-3 font-nunito">
                        <div class="flex items-center justify-between mb-2">
                            <span class="font-bold text-gray-400 text-sm mr-2">
                                Total
                            </span>
                            <span class="font-extrabold text-gray-700 text-right">
                                $ {{$filters.formatNumber(cartTotalPrice)}}
                            </span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="font-bold text-gray-400 text-sm mr-2">
                                Sub total
                                <span class="italic">
                                    (Tax: {{ $filters.formatNumber(taxInPercent) }}%)
                                </span>
                            </span>
                            <span class="font-extrabold text-gray-700 text-right">
                                $ {{ $filters.formatNumber(cartPriceWithTax) }}</span>
                        </div>
                        <div class="w-full flex flex-col justify-center items-center space-y-2 mt-2">
                            <button class="w-full bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 " @click.prevent="checkoutVisibility = true">
                                Place Order
                            </button>
                            <button class="w-full bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 " @click.prevent="clearCart">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Checkout
        v-if="checkoutVisibility"
        @close="checkoutVisibility = false"
        @clear="clearCart"
        :customer="selectedCustomer"
        :cartItems="cartItems"
        :totalPrice="cartTotalPrice"
        :tax="taxInPercent"
        :taxAmount="taxAmount"
        :afterTaxTotal="cartPriceWithTax"
    />
    <AddCustomerModal
        v-if="addCustomerVisibility"
        @close="addCustomerVisibility = false"
        @reload="reloadCustomers"
    />
</template>

<script>
import VueMultiselect from "vue-multiselect";
import 'vue-multiselect/dist/vue-multiselect.css'
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import { PlusIcon, MinusIcon, TrashIcon, ShoppingCartIcon, SearchIcon   } from "@heroicons/vue/outline"
import Checkout from "./Checkout";
import AddCustomerModal from "./AddCustomerModal";
export default {
    components: {
        PlusIcon,
        MinusIcon,
        TrashIcon,
        ShoppingCartIcon,
        VueMultiselect,
        SearchIcon,
        Checkout,
        AddCustomerModal
    },
    setup(){
        const customers = ref([])
        const selectedCustomer = ref([])

        const selected = reactive({
            categories: [],
            brands: [],
            prices: [0, 7000],
            available: [1],
        })

        watch(selected, () => {
            getProducts()
        })


        const last_page = ref(null)
        const products = ref([])
        function getProducts(page = 1){
            axios.get('/api/user/productsFilter?page=' + page, {
                params: selected
            })
                .then(({data}) => {
                    products.value = data;
                    last_page.value = data.meta.last_page
                    from.value = data.meta.from
                    to.value = data.meta.to
                    total.value = data.meta.total
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/user/find-product?page=1&q=' + query.value,{
                    params: selected
                })
                    .then( ({data}) => {
                        products.value = data
                        last_page.value = data.meta.last_page
                        from.value = data.meta.from
                        to.value = data.meta.to
                        total.value = data.meta.total
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
                getProducts()
            }
        }

        const selectedCategory = ref([])
        const selectedBrand = ref([])

        watch(selectedCategory, () => {
            selected.categories = []
            selectedCategory.value ?
            selected.categories.splice(1,0,selectedCategory.value.id) : selected.categories= []
        })
        watch(selectedBrand, () => {
            selected.brands = []
            selectedBrand.value ?
            selected.brands.splice(1,0,selectedBrand.value.id) : selected.brands =[]
        })


        const store = useStore()
        function addToCart(item){
            store.dispatch('addToCart', {
                product: item,
                quantity: 1
            })
        }

        const cartItems = computed(() => {
            return store.state.cart
        })

        // watch(cartItems, () => {
        //     afterTax()
        // })

        const taxAmount = computed(() => {
            return (Number.parseFloat(store.getters.cartTotalPrice) * Number.parseFloat(store.getters.getTax) / 100)
        })

        const cartTotalPrice = computed(() => {
            return store.getters.cartTotalPrice
        })

        const cartPriceWithTax = computed(() => {
            return (Number.parseFloat(store.getters.cartTotalPrice) + taxAmount.value).toFixed(2)
        })

        const taxInPercent = computed(() => {
            return store.getters.getTax
        })

        // function afterTax(){
        //     let total = store.getters.cartTotalPrice;
        //     taxAmount.value = total*(store.getters.getTax / 100)
        // }

        function increment(item){
            store.dispatch('addItem', item)
        }
        function decrement(item){
            store.dispatch('removeItem', item)
        }
        function remove(item){
            store.dispatch('deleteProductFromCart', item)
        }

        function clearCart(){
            store.dispatch('clearCart')
            selectedCustomer.value = []
        }


        const checkoutVisibility = ref(false)

        const addCustomerVisibility = ref(false)
        function reloadCustomers(){
            getCustomers()
        }

        const categories = ref([])
        const isSearchingCategory = ref(false)
        function fetchCategory(query){
            isSearchingCategory.value = true
            axios.get('/api/user/fetch-category?q=' + query)
            .then(({data}) => {
                categories.value = data.data
                isSearchingCategory.value = false
            })
        }

        const brands = ref([])
        const isSearchingBrand = ref(false)
        function fetchBrand(query){
            isSearchingBrand.value = true
            axios.get('/api/user/fetch-brand?q=' + query)
            .then(({data}) => {
                brands.value = data.data
                isSearchingBrand.value = false
            })
        }

        const isSearchingCustomer = ref(false)
        function fetchCustomer(query){
            isSearchingCustomer.value = true
            axios.get('/api/user/fetch-customer?q=' + query)
            .then(({data}) => {
                customers.value = data.data
                isSearchingCustomer.value = false
            })
        }

        const from = ref(null)
        const to = ref(null)
        const total = ref(null)

        function goToPage(page){
            axios.get(page)
                .then(({data}) => {
                    products.value = data
                    last_page.value = data.meta.last_page
                    from.value = data.meta.from
                    to.value = data.meta.to
                    total.value = data.meta.total
                })
        }

        onMounted(() => {
            getProducts()
        })


        return{
            customers,
            categories,
            brands,
            selected,
            products,
            selectedCustomer,
            cartItems,
            cartTotalPrice,
            cartPriceWithTax,
            taxInPercent,
            query,
            searchIt,
            selectedCategory,
            selectedBrand,
            addToCart,
            increment,
            decrement,
            remove,
            clearCart,
            taxAmount,
            checkoutVisibility,
            addCustomerVisibility,
            reloadCustomers,
            isSearchingCategory,
            fetchCategory,
            isSearchingBrand,
            fetchBrand,
            isSearchingCustomer,
            fetchCustomer,
            from,
            to,
            total,
            last_page,
            goToPage
        }
    },
    data(){
        return{
            sportsData: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'],
        }
    }
}
</script>

<style scoped lang="scss">
input[type="number"] {
    -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.fixed-content{
    height: calc(100vh - 7.9rem);
    width: 21.5vw;/* Full-height: remove this if you want "auto" height */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 7.5rem; /* Stay at the top */
    right: 0.33rem;
    background-color: white; /* Black */
    overflow: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
}
</style>
