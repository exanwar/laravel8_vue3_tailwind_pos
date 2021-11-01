<template>
    <div class="flex flex-col">
        <div class="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <h1 class="text-5xl text-gray-600 font-nunito font-semibold">
                Purchases
            </h1>
            <div class="flex flex-wrap justify-center items-center space-x-3">
                <button
                    class="
                        blue-button text-xs font-semibold mb-2 md:mb-0
                    "
                    v-show="$can('access_brands')"
                    @click.prevent="brandsModalVisibility = true"
                >
                    Brands
                </button>
                <button
                    class="
                        blue-button text-xs font-semibold mb-2 md:mb-0
                    "
                    v-show="$can('access_units')"
                    @click.prevent="unitsModalVisibility = true"
                >
                    Units
                </button>
                <button
                    class="
                        blue-button text-xs font-semibold mb-2 md:mb-0
                    "
                    v-show="$can('access_categories')"
                    @click.prevent="categoriesModalVisibility = true"
                >
                    Categories
                </button>
                <button
                    class="
                        blue-button text-xs font-semibold mb-2 md:mb-0
                    "
                    v-show="$can('create_products')"
                    @click.prevent="addProductModalVisibility = true"
                >
                    Add Product
                </button>
            </div>
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
                            placeholder="Search Product.."
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
                            <tr class="bg-dashboard-blue flex flex-col flex-no-wrap lg:table-row rounded-l-lg lg:rounded-none mb-2 lg:mb-0" v-for="(item, index) in lots.data" :key="index">
                                <th class="p-3 text-left lg:text-center">SL</th>
                                <th class="px-3 py-9 sm:py-11 lg:py-3 text-left lg:text-center">Product</th>
                                <th class="px-3 py-2.5 sm:py-5 lg:py-3 text-left lg:text-center">Vendor</th>
                                <th class="px-3 py-3 text-left lg:text-center">Purchase</th>
                                <th class="px-3 py-3 text-left lg:text-center">Costs</th>
                                <th class="px-3 py-3 text-left lg:text-center">Sell On</th>
                                <th class="px-3 py-3 text-left lg:text-center">Quantity</th>
                                <th class="px-3 text-left lg:text-center custom-padding-action" width="110px">Actions</th>
                            </tr>
                            </thead>
                            <tbody class="flex-1 lg:flex-none">
                            <tr class="flex flex-col flex-no wrap lg:table-row mb-2 lg:mb-0" v-for="(item, index) in lots.data" :key="index">
                                <td class="border-grey-light border hover:bg-gray-100 p-3 lg:text-center">{{ from + index }}</td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 sm:py-2.5 truncate">
                                    <div class="flex items-center">
                                        <div class="h-20 w-20 hidden sm:block">
                                            <img class="h-full w-full rounded-full"
                                                 :src="item.product.product_image ? item.product.product_image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                 :alt="item.product.name" />
                                        </div>
                                        <div class="flex flex-col justify-start sm:ml-4">
                                            <h2 class="font-bold text-base sm:text-lg">{{ item.product.name }}</h2>
                                            <div>
                                                <p class="mb-0 font-semibold text-xs">Barcode# {{ item.product.barcode }}</p>
                                                <p class="mb-0 font-semibold text-xs">Category# {{ item.category.name }}</p>
                                                <p class="mb-0 italic font-medium text-xs">Purchase on: ${{ item.product.purchase }}/{{item.unit.symbol}}</p>
                                                <p class="mb-0 italic font-medium text-xs">Sell on: ${{ item.product.sell }}/{{ item.unit.symbol }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 sm:py-2.5 truncate">
                                    <div class="flex items-center">
                                        <div class="h-12 w-12 lg:h-16 lg:w-16 hidden sm:block">
                                            <img class="h-full w-full rounded-full"
                                                 :src="item.vendor.logo ? item.vendor.logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                 :alt="item.vendor.name" />
                                        </div>
                                        <div class="flex flex-col justify-start sm:ml-4">
                                            <h2 class="font-bold text-base sm:text-lg">{{ item.vendor.name }}</h2>
                                            <div>
                                                <p class="mb-0 font-semibold text-xs">{{ item.vendor.address }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                            ${{ item.purchase_price }}/{{ item.unit.symbol }}
                                        </span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                             ${{ item.transport_cost + item.labour_cost + item.other_costs }}/{{ item.unit.symbol }}
                                        </span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                            ${{ item.selling_price }}/{{ item.unit.symbol }}
                                        </span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                            {{ item.product_quantity }}
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
                                            v-show="$can('access_purchases')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                        >
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
                                        <button
                                            v-show="$can('edit_purchases')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click="showEditPurchaseModal(item.id)">
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
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            v-show="$can('delete_purchases')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click.prevent="deletePurchase(item.id)"
                                        >
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
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
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
                            <div v-for="(link, index) in lots.meta.links" :key="index">
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
                            Showing {{ from }} to {{ to }} of {{ total }} products
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        class="
            absolute
            bottom-0
            right-0
            text-9xl
            transform
            -translate-x-20 lg:-translate-y-20 -translate-y-40
            cursor-pointer
            shadow-2xl
        "
        v-show="$can('create_purchases')"
        @click.prevent="addPurchaseModalVisibility = true"
    >
        <div class="relative">
            <div class="h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full"></div>
            <div
                class="
                    absolute
                    top-1/2
                    left-1/2
                    transform
                    -translate-x-1/2 -translate-y-1/2
                "
            >
                <i class="fas fa-plus-circle text-dashboard-blue"></i>
            </div>
        </div>
    </div>
    <AddProductModal v-show="$can('create_products')" v-if="addProductModalVisibility" @close="addProductModalVisibility = false" @reloadProducts="reload"/>
    <AddPurchaseModal v-show="$can('create_purchases')" v-if="addPurchaseModalVisibility" @close="addPurchaseModalVisibility = false" @reloadLots="reload"/>
    <EditPurchaseModal v-show="$can('edit_purchases')" v-if="editPurchaseModalVisibility" :lot="editPurchaseId" @close="editPurchaseModalVisibility = false" @reloadLots="reload"/>
    <BrandsModal v-show="$can('access_brands')" v-if="brandsModalVisibility" @close="brandsModalVisibility = false" />
    <UnitsModal v-show="$can('access_units')" v-if="unitsModalVisibility" @close="unitsModalVisibility = false" />
    <CategoriesModal v-show="$can('access_categories')" v-if="categoriesModalVisibility" @close="categoriesModalVisibility = false" />
</template>

<script>
import {ref, onMounted, inject, reactive, watch, computed} from "vue";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/vue/outline'
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import axios from "axios";
import AddProductModal from "../products/AddProductModal";
import EditProductModal from "../products/EditProductModal";
import AddPurchaseModal from "./AddPurchaseModal";
import EditPurchaseModal from "./EditPurchaseModal";
import BrandsModal from "../products/brands/BrandsModal";
import UnitsModal from "../products/units/UnitsModal";
import CategoriesModal from "../products/categories/CategoriesModal";
export default {
    components:{ SearchIcon, ChevronLeftIcon, ChevronRightIcon, AddProductModal, BrandsModal, UnitsModal, CategoriesModal, EditProductModal, AddPurchaseModal, EditPurchaseModal },
    setup(){
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const lots = ref([])
        const last_page = ref(null)
        const from = ref(null)
        const to = ref(null)
        const total = ref(null)

        function getLots(page = 1){
            axios.get('/api/user/product_lots?page=' + page)
                .then(({data}) => {
                    lots.value = data;
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
                axios.get('/api/user/find-lot?page=1&q=' + query.value)
                    .then( ({data}) => {
                        lots.value = data
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
                getLots()
            }
        }


        function goToPage(page){
            axios.get(page)
                .then(({data}) => {
                    lots.value = data
                    last_page.value = data.meta.last_page
                })
        }

        const brandsModalVisibility = ref(false)
        const unitsModalVisibility = ref(false)
        const categoriesModalVisibility = ref(false)
        const addProductModalVisibility = ref(false)
        const addPurchaseModalVisibility = ref(false)
        const editPurchaseModalVisibility = ref(false)
        const editPurchaseId = ref(null)


        function reload(){
            getLots()
        }

        function showEditPurchaseModal(id){
            editPurchaseModalVisibility.value = true
            editPurchaseId.value = id
        }

        function deletePurchase(id){
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
                    axios.delete('/api/user/product_lots/' + id)
                        .then( response => {
                            getLots()
                            InjectDirectly.fire("Deleted!",
                                "Purchase has been deleted.",
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

        onMounted(() => {
            getLots()
        })

        return {
            lots,
            last_page,
            query,
            searchIt,
            goToPage,
            reload,
            brandsModalVisibility,
            unitsModalVisibility,
            categoriesModalVisibility,
            addProductModalVisibility,
            addPurchaseModalVisibility,
            editPurchaseModalVisibility,
            editPurchaseId,
            showEditPurchaseModal,
            deletePurchase,
            from, to, total
        }
    }
}
</script>

<style scoped lang="scss">
input[type=range]::-webkit-slider-thumb {
    pointer-events: all;
    width: 24px;
    height: 24px;
    -webkit-appearance: none;
    /* @apply w-6 h-6 appearance-none pointer-events-auto; */
}

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
    padding-top: 0.845rem;
    padding-bottom: 0.845rem;
}


td:not(:last-child) {
    border-bottom: 0;
}

th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>
