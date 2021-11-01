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
        <div class="relative" style="min-width: 30rem; max-width: 50rem">
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
                                Add Purchase Lot
                            </h1>
                        </div>
                        <div class="flex flex-col lg:flex-row">
                            <div class="flex w-full lg:flex-1 w-ful flex-col space-y-4 px-3 py-3">
                                <div
                                    class="
                                px-3
                                lg:py-5
                                rounded-lg
                                flex flex-1 flex-col
                            "
                                >
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1 class="ml-2 text-gray-700 font-nunito text-lg">
                                                New Purchase Information
                                            </h1>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Bill Number :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Bill Number"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="purchase_bill_number"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Invoice Number :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Invoice Number"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model="purchase_invoice_number"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1 class="ml-2 text-gray-700 font-nunito text-md">Vendor :</h1>
                                            <VueMultiselect
                                                v-model="selectedVendor"
                                                :options= "vendors"
                                                :multiple="false"
                                                :close-on-select="true"
                                                :clear-on-select="false"
                                                :preserve-search="true"
                                                openDirection="bottom"
                                                placeholder="Pick a vendor"
                                                label="name"
                                                track-by="id"
                                                :preselect-first="false"
                                                :searchable="true"
                                                :loading="isSearchingVendor"
                                                :internal-search="false"
                                                :options-limit="300"
                                                :max-height="600"
                                                :show-no-results="true"
                                                :hide-selected="false"
                                                @search-change="fetchVendor"
                                                >
                                                <template  v-slot:option="{ option }">
                                                    <div class="flex items-center">
                                                        <div class="h-12 w-12">
                                                            <img class="h-full w-full rounded-full" :src="option.logo" :alt="option.name" />
                                                        </div>
                                                        <div class="flex flex-col justify-start ml-4">
                                                            <h2 class="font-semibold text-lg">{{ option.name }}</h2>
                                                            <div class="">
                                                                <p class="mb-0 text-md">{{ option.address }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </VueMultiselect>
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1 class="ml-2 text-gray-700 font-nunito text-md">Product :</h1>
                                            <VueMultiselect
                                                v-model="selectedProduct"
                                                :options= "products"
                                                :multiple="false"
                                                :close-on-select="true"
                                                :clear-on-select="false"
                                                :preserve-search="true"
                                                openDirection="bottom"
                                                placeholder="Pick a product"
                                                label="name"
                                                track-by="id"
                                                :preselect-first="false"
                                                :searchable="true"
                                                :loading="isSearchingProduct"
                                                :internal-search="false"
                                                :options-limit="300"
                                                :max-height="600"
                                                :show-no-results="true"
                                                :hide-selected="false"
                                                @search-change="fetchProduct"
                                            >
                                                <template  v-slot:option="{ option }">
                                                    <div class="flex items-center">
                                                        <div class="h-12 w-12">
                                                            <img class="h-full w-full rounded-full" :src="option.product_image" :alt="option.name" />
                                                        </div>
                                                        <div class="flex flex-col justify-start ml-4">
                                                            <h2 class="font-semibold text-lg">{{ option.name }}</h2>
                                                            <div class="">
                                                                <p class="mb-0 text-md">Barcode: {{ option.barcode }}</p>
                                                                <p class="mb-0 text-md">Category: {{ option.category ? option.category.name : null }}</p>
                                                                <p class="mb-0 text-md">Brand: {{ option.brand ? option.brand.name : null }}</p>
                                                                <p class="mb-0 text-md">Unit: {{ option.unit ? option.unit.symbol : null }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </VueMultiselect>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Purchase Price :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Purchase Price"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model.number="purchase_price"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Purchase Quantity :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Purchase Quantity"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model.number="purchase_quantity"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Purchase Price /unit :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="SKU"
                                                class="
                                                    bg-gray-400
                                                    shadow
                                                    border
                                                    rounded-lg
                                                    w-full
                                                    py-4
                                                    px-5
                                                    text-gray-100
                                                    leading-tight
                                                    focus:outline-none
                                                    focus:border-blue-300
                                                "
                                                v-model.number="buy_each"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 mt-3">
                                        <table class="shadow-lg bg-white table-auto">
                                            <tr>
                                                <th class="bg-blue-100 border text-left px-2 py-4 text-center">SL#</th>
                                                <th class="bg-blue-100 border text-left px-8 py-4 text-center">Cost Type</th>
                                                <th class="bg-blue-100 border text-left px-8 py-4 text-center">Cost</th>
                                            </tr>
                                            <tr>
                                                <td class="border px-2 py-4 text-center">1</td>
                                                <td class="border px-3 py-4 text-center">Transportation</td>
                                                <td class="border px-3 py-4">
                                                    <input
                                                        type="number"
                                                        placeholder="Purchase Price"
                                                        class="
                                                            shadow
                                                            border
                                                            rounded-lg
                                                            w-full
                                                            py-4
                                                            px-5
                                                            text-gray-700
                                                            leading-tight
                                                            focus:outline-none
                                                            focus:border-blue-300
                                                        "
                                                        v-model.number="transportation_cost"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border px-2 py-4 text-center">2</td>
                                                <td class="border px-3 py-4 text-center">Labour</td>
                                                <td class="border px-3 py-4">
                                                    <input
                                                        type="number"
                                                        placeholder="Purchase Price"
                                                        class="
                                                            shadow
                                                            border
                                                            rounded-lg
                                                            w-full
                                                            py-4
                                                            px-5
                                                            text-gray-700
                                                            leading-tight
                                                            focus:outline-none
                                                            focus:border-blue-300
                                                        "
                                                        v-model.number="labour_cost"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="border px-2 py-4 text-center">3</td>
                                                <td class="border px-3 py-4 text-center">Others</td>
                                                <td class="border px-3 py-4">
                                                    <input
                                                        type="number"
                                                        placeholder="Purchase Price"
                                                        class="
                                                            shadow
                                                            border
                                                            rounded-lg
                                                            w-full
                                                            py-4
                                                            px-5
                                                            text-gray-700
                                                            leading-tight
                                                            focus:outline-none
                                                            focus:border-blue-300
                                                        "
                                                        v-model.number="other_costs"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="bg-gray-300 border text-left px-2 py-4 text-center font-bold">Total Cost</td>
                                                <td class="bg-gray-300 border text-left px-2 py-4 text-center font-bold">{{ totalCost }}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Cumulative Purchase Price :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Cumulative Purchase Price"
                                                class="
                                                    shadow
                                                    border
                                                    rounded-lg
                                                    w-full
                                                    py-4
                                                    px-5
                                                    bg-gray-400
                                                    text-gray-100
                                                    leading-tight
                                                    focus:outline-none
                                                    focus:border-blue-300
                                                "
                                                v-model.number="cumulativePurchasePrice"
                                                readonly
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Overhead :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Overhead"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model.number="overhead"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Profit in % :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Profit in %"
                                                class="
                                        shadow
                                        border
                                        rounded-lg
                                        w-full
                                        py-4
                                        px-5
                                        text-gray-700
                                        leading-tight
                                        focus:outline-none
                                        focus:border-blue-300
                                    "
                                                v-model.number="profit_in_percent"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Selling Price :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="Selling Price"
                                                class="
                                                    shadow
                                                    border
                                                    rounded-lg
                                                    w-full
                                                    py-4
                                                    px-5
                                                    bg-gray-400
                                                    text-gray-100
                                                    leading-tight
                                                    focus:outline-none
                                                    focus:border-blue-300
                                                "
                                                v-model.number="sellingPrice"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    class="
                                pt-5
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
                                        v-show="$can('create_purchases')"
                                        @click="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
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
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import { useToast } from 'vue-toastification'
import {ref, inject, onMounted, computed} from "vue";
import VueMultiselect from "vue-multiselect";
import 'vue-multiselect/dist/vue-multiselect.css'
export default {
    components:{ VueMultiselect },
    setup() {
        const toast = useToast()
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const vendors = ref([])
        const isSearchingVendor = ref(false)
        function fetchVendor(query){
            isSearchingVendor.value = true
            axios.get('/api/user/fetch-vendor?q=' + query)
                .then(({data}) => {
                    vendors.value = data.data
                    isSearchingVendor.value = false
                })
        }
        const selectedVendor = ref([])

        const products = ref([])
        const isSearchingProduct = ref(false)
        function fetchProduct(query){
            isSearchingProduct.value = true
            axios.get('/api/user/fetch-product?q=' + query)
                .then(({data}) => {
                    products.value = data.data
                    isSearchingProduct.value = false
                })
        }
        const selectedProduct = ref([])

        const purchase_bill_number = ref(null)
        const purchase_invoice_number = ref(null)
        const purchase_price = ref(null)
        const purchase_quantity = ref(null)
        const profit_in_percent = ref(null)
        const overhead = ref(null)
        const transportation_cost = ref(0)
        const labour_cost = ref(0)
        const other_costs = ref(0)

        const buy_each = computed(() => {
            let purchase = purchase_price.value
            let qtn = purchase_quantity.value
            let price = purchase / qtn
            return Number(price).toFixed(2)
        })

        const totalCost = computed(() => {
            let transpot = transportation_cost.value
            let labour = labour_cost.value
            let othe = other_costs.value
            let sum = transpot + labour + othe
            return Number(sum).toFixed(2)
        })

        const cumulativePurchasePrice = computed(() => {
            let costs = Number(totalCost.value) / purchase_quantity.value
            let purchase_price = Number(buy_each.value)
            let price = costs + purchase_price
            return Number(price).toFixed(2)
        })

        const sellingPrice = computed(() => {
            let overheadPrice = Number(overhead.value)
            let price =
                overheadPrice +
                Number(cumulativePurchasePrice.value) +
                Number(cumulativePurchasePrice.value) *
                (profit_in_percent.value / 100)
            return price.toFixed(2)
        })

        function clearFields(){
            vendors.value = []
            products.value = []

            selectedVendor.value = []
            selectedProduct.value = []

            purchase_bill_number.value = null
            purchase_invoice_number.value = null
            purchase_price.value = null
            purchase_quantity.value = null
            profit_in_percent.value = null
            overhead.value = null
            transportation_cost.value = 0
            labour_cost.value = 0
            other_costs.value = 0
        }


        function successToast(message) {
            toast.success(message, {
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
            toast,
            InjectDirectly,
            successToast,
            vendors,
            selectedVendor,
            products,
            selectedProduct,
            purchase_bill_number,
            purchase_invoice_number,
            purchase_price,
            purchase_quantity,
            profit_in_percent,
            overhead,
            transportation_cost,
            labour_cost,
            other_costs,
            buy_each,
            totalCost,
            cumulativePurchasePrice,
            sellingPrice,
            clearFields,
            isSearchingVendor,
            fetchVendor,
            isSearchingProduct,
            fetchProduct
        }
    },
    data() {
        return {}
    },
    watch: {},
    methods: {
        submit(){
            let data = {
                bill_number: this.purchase_bill_number.toUpperCase().replace(/\s/g, ""),
                invoice_number: this.purchase_invoice_number.toUpperCase().replace(/\s/g, ""),
                vendor_id: this.selectedVendor.id,
                product_id: this.selectedProduct.id,
                category_id: this.selectedProduct.category.id,
                brand_id: this.selectedProduct.brand.id,
                unit_id: this.selectedProduct.unit.id,
                purchase: parseFloat(this.purchase_price).toFixed(2),
                qtn: this.purchase_quantity,
                buy_on: parseFloat(this.buy_each).toFixed(2),
                overhead: Number(this.overhead).toFixed(2),
                buy_on_cumulative: parseFloat(
                    this.cumulativePurchasePrice
                ).toFixed(2),
                profit_percent: parseFloat(this.profit_in_percent).toFixed(2),
                sell_on: parseFloat(this.sellingPrice).toFixed(2),

                transport_cost: Number(this.transportation_cost).toFixed(2),
                labour_cost: Number(this.labour_cost).toFixed(2),
                other_costs: Number(this.other_costs).toFixed(2)
            };

            axios
                .post("/api/user/product_lots", data)
                .then(response => {
                    this.handleClose();
                    this.handleReload();
                    this.successToast('New purchase has been added!')
                    console.log(response);
                })
                .catch(error => {
                    // Swal.fire({
                    //     icon: "error",
                    //     title: "Oops..",
                    //     text: 'Fill all fields first',
                    //     footer: ""
                    //     });
                    console.log(error);
                });
        },
        handleClose() {
            this.$emit('close')
            this.clearFields()
        },
        handleReload() {
            this.$emit('reloadLots')
            this.clearFields()
        },
    },
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.choose_file {
    position: relative;
    display: inline-block;
    font: normal 14px Myriad Pro, Verdana, Geneva, sans-serif;
    color: #7f7f7f;
    margin-top: 2px;
    background: white
}
.choose_file input[type="file"]{
    -webkit-appearance:none;
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    width: 100%;
    height: 100%;
}

.ck-content{
    border: 1px solid rgba(100, 181, 246, 0.6)
}
</style>


