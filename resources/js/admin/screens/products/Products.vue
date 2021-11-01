<template>
    <div class="flex flex-col">
        <div class="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <h1 class="text-5xl text-gray-600 font-nunito font-semibold">
                Products
            </h1>
            <div class="flex justify-center items-center space-x-3">
                <button
                    class="
                        blue-button text-xs font-semibold
                    "
                    v-show="$can('access_brands')"
                    @click.prevent="brandsModalVisibility = true"
                >
                    Brands
                </button>
                <button
                    class="
                        blue-button text-xs font-semibold
                    "
                    v-show="$can('access_units')"
                    @click.prevent="unitsModalVisibility = true"
                >
                    Units
                </button>
                <button
                    class="
                        blue-button text-xs font-semibold
                    "
                    v-show="$can('access_categories')"
                    @click.prevent="categoriesModalVisibility = true"
                >
                    Categories
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
                <div class="w-full flex justify-between space-x-3">
                    <div class="flex-1">
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
                        <div class="flex mt-10 flex-wrap items-center">
                            <div class="w-full md:w-1/2 xl:w-3/12 px-2 py-1">
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

                            <div class="w-full md:w-1/2 xl:w-3/12 px-2 py-1">
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

                            <div class="w-full md:w-1/2 xl:w-3/12 px-2 py-1">
                                <VueMultiselect
                                    v-model="selectedUnit"
                                    :options= "units"
                                    :multiple="false"
                                    :close-on-select="true"
                                    :clear-on-select="false"
                                    :preserve-search="true"
                                    openDirection="bottom"
                                    placeholder="Pick a unit"
                                    label="symbol"
                                    track-by="id"
                                    :preselect-first="false"
                                    :searchable="true"
                                    :loading="isSearchingUnit"
                                    :internal-search="false"
                                    :options-limit="300"
                                    :max-height="600"
                                    :show-no-results="true"
                                    :hide-selected="false"
                                    @search-change="fetchUnit"
                                >
                                    <template slot="selection" slot-scope="{ values, search, isOpen }">
                                    <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                        {{ values.length }} options selected
                                    </span>
                                    </template>
                                </VueMultiselect>
                            </div>

                            <div class="w-full md:w-1/2 xl:w-3/12 px-2 py-1">
                                <VueMultiselect
                                    v-model="selectedAvailability"
                                    :options="availability"
                                    :searchable="false"
                                    :close-on-select="true"
                                    :show-labels="false"
                                    placeholder="Pick availability"
                                    label="name"
                                    track-by="id"
                                >
                                    <template slot="selection" slot-scope="{ values, search, isOpen }">
                                    <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                        {{ values.length }} options selected
                                    </span>
                                    </template>
                                </VueMultiselect>
                            </div>
                        </div>
                        <div class="bg-white shadow-md rounded my-6">
                            <table class="w-full flex flex-row flex-no-wrap lg:bg-white rounded-lg overflow-hidden lg:shadow-xl">
                                <thead class="text-white">
                                <tr class="bg-dashboard-blue flex flex-col flex-no-wrap lg:table-row rounded-l-lg lg:rounded-none mb-2 lg:mb-0" v-for="(item, index) in products.data" :key="index">
                                    <th class="p-3 text-left lg:text-center">SL</th>
                                    <th class="px-3 py-9 sm:py-11 lg:py-3 text-left lg:text-center">Product</th>
                                    <th class="px-3 py-2 sm:py-4 lg:py-3 text-left lg:text-center">Brand</th>
                                    <th class="px-3 py-3 text-left lg:text-center">Stock</th>
                                    <th class="px-3 text-left lg:text-center custom-padding-action" width="110px">Actions</th>
                                </tr>
                                </thead>
                                <tbody class="flex-1 lg:flex-none">
                                <tr class="flex flex-col flex-no wrap lg:table-row mb-2 lg:mb-0" v-for="(item, index) in products.data" :key="index">
                                    <td class="border-grey-light border hover:bg-gray-100 p-3 lg:text-center">{{ from + index }}</td>
                                    <td class="border-grey-light border hover:bg-gray-100 px-3 py-1 sm:py-2.5 truncate">
                                        <div class="flex items-center">
                                            <div class="h-20 w-20 hidden sm:block">
                                                <img class="h-full w-full rounded-full"
                                                     :src="item.product_image ? item.product_image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                     :alt="item.name" />
                                            </div>
                                            <div class="flex flex-col justify-start sm:ml-4">
                                                <h2 class="font-bold text-base sm:text-lg">{{ item.name }}</h2>
                                                <div>
                                                    <p class="mb-0 font-semibold text-xs">Barcode# {{ item.barcode }}</p>
                                                    <p class="mb-0 font-semibold text-xs">Category# {{ item.category.name }}</p>
                                                    <p class="mb-0 italic font-medium text-xs">Purchase on: ${{ item.purchase }}/{{item.unit.symbol}}</p>
                                                    <p class="mb-0 italic font-medium text-xs">Sell on: ${{ item.sell }}/{{ item.unit.symbol }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="border-grey-light border hover:bg-gray-100 px-3 py-2 sm:py-1 lg:py-2.5 truncate">
                                        <div class="flex flex-row lg:flex-col items-center lg:space-y-2">
                                            <div class="h-12 w-12 lg:h-16 lg:w-16 hidden sm:block">
                                                <img class="h-full w-full rounded-full"
                                                     :src="item.brand.brand_logo ? item.brand.brand_logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                     :alt="item.brand.name" />
                                            </div>
                                            <div class="flex flex-col justify-start sm:ml-4">
                                                <h2 class="font-bold text-base">{{ item.brand.name }}</h2>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="border-grey-light border hover:bg-gray-100 px-3 py-3 lg:text-center">
                                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                            {{ item.stock !== 0 ? item.stock : 'N/A'}}
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
                                                v-show="$can('access_products')"
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
                                                v-show="$can('edit_products')"
                                                class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                                @click="showEditProductModal(item.id)">
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
                                                v-show="$can('delete_products')"
                                                class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                                @click.prevent="deleteProduct(item.id)"
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
                                Showing {{ from }} to {{ to }} of {{ total }} products
                            </div>
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
        v-show="$can('create_products')"
        @click.prevent="addProductModalVisibility = true"
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
    <AddProductModal v-if="addProductModalVisibility" @close="addProductModalVisibility = false" @reloadProducts="reload"/>
    <EditProductModal v-if="editProductModalVisibility" :product="editProductId" @close="editProductModalVisibility = false" @reloadProducts="reload"/>
    <BrandsModal v-if="brandsModalVisibility" @close="brandsModalVisibility = false" />
    <UnitsModal v-if="unitsModalVisibility" @close="unitsModalVisibility = false" />
    <CategoriesModal v-if="categoriesModalVisibility" @close="categoriesModalVisibility = false" />
</template>

<script>
import {ref, onMounted, inject, reactive, watch, computed} from "vue";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/vue/outline'
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import axios from "axios";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import BrandsModal from "./brands/BrandsModal";
import UnitsModal from "./units/UnitsModal";
import CategoriesModal from "./categories/CategoriesModal";
import VueMultiselect from "vue-multiselect";
import 'vue-multiselect/dist/vue-multiselect.css'
export default {
    components:{ SearchIcon, ChevronLeftIcon, ChevronRightIcon, AddProductModal, BrandsModal, UnitsModal, CategoriesModal, EditProductModal, VueMultiselect },
    setup(){
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const products = ref([])
        const last_page = ref(null)
        const from = ref(null)
        const to = ref(null)
        const total = ref(null)

        const selected = reactive({
            categories: [],
            brands: [],
            units: [],
            prices: [0, 7000],
            available: [],
        })

        watch(selected, () => {
            getProducts()
        })

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

        // const categories = ref([])
        function getCategories(){
            axios.get('/api/user/all-categories')
                .then(({data}) => {
                    categories.value = data.data
                })
        }

        // const brands = ref([])
        function getBrands(){
            axios.get('/api/user/all-brands')
                .then(({data}) => {
                    brands.value = data.data
                })
        }

        function getUnits(){
            axios.get('/api/user/all-units')
                .then(({data}) => {
                    units.value = data.data
                })
        }

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

        const brandsModalVisibility = ref(false)
        const unitsModalVisibility = ref(false)
        const categoriesModalVisibility = ref(false)
        const addProductModalVisibility = ref(false)
        const editProductModalVisibility = ref(false)
        const editProductId = ref(null)


        function reload(){
            getProducts()
        }

        const minprice = ref(0)
        function mintrigger() {
            minprice.value = Math.min(minprice.value, maxprice.value - 500);
            minthumb.value = ((minprice - min.value) / (max.value - min.value)) * 100;
        }

        const maxprice = ref(7000)
        function maxtrigger() {
            maxprice.value = Math.max(maxprice.value, minprice.value + 500);
            maxthumb.value = 100 - (((maxprice.value - min.value) / (max.value - min.value)) * 100);
        }

        const min = ref(0)
        const max = ref(10000)
        const minthumb = ref(0)
        const maxthumb = ref(0)

        function setPrice(){
            selected.prices[0] = minprice.value
            selected.prices[1] = maxprice.value
        }

        function showEditProductModal(id){
            editProductModalVisibility.value = true
            editProductId.value = id
        }

        function deleteProduct(id){
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
                    axios.delete('/api/user/products/' + id)
                        .then( response => {
                            getProducts()
                            InjectDirectly.fire("Deleted!",
                                "Product has been deleted.",
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
        const selectedCategory = ref([])
        watch(selectedCategory, () => {
            selected.categories = []
            selectedCategory.value ?
                selected.categories.splice(1,0,selectedCategory.value.id) : selected.categories= []
        })

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
        const selectedBrand = ref([])
        watch(selectedBrand, () => {
            selected.brands = []
            selectedBrand.value ?
                selected.brands.splice(1,0,selectedBrand.value.id) : selected.brands =[]
        })

        const units = ref([])
        const isSearchingUnit = ref(false)
        function fetchUnit(query){
            isSearchingUnit.value = true
            axios.get('/api/user/fetch-unit?q=' + query)
                .then(({data}) => {
                    units.value = data.data
                    isSearchingUnit.value = false
                })
        }
        const selectedUnit = ref([])
        watch(selectedUnit, () => {
            selected.units = []
            selectedUnit.value ?
                selected.units.splice(1,0,selectedUnit.value.id) : selected.units =[]
        })

        const availability = [
            {
                id: 0,
                name: 'Not Available'
            },
            {
                id: 1,
                name: 'Available'
            }
        ]
        const selectedAvailability = ref([])
        watch(selectedAvailability, () => {
            selected.available = []
            selectedAvailability.value ?
                selected.available.splice(1,0,selectedAvailability.value.id) : selected.available =[]
        })


        onMounted(() => {
            getProducts()
        })

        return {
            products,
            last_page,
            selected,
            query,
            searchIt,
            goToPage,
            categories,
            brands,
            units,
            reload,
            brandsModalVisibility,
            unitsModalVisibility,
            categoriesModalVisibility,
            addProductModalVisibility,
            min,
            max,
            minthumb,
            maxthumb,
            minprice,
            maxprice,
            mintrigger,
            maxtrigger,
            setPrice,
            editProductModalVisibility,
            editProductId,
            showEditProductModal,
            deleteProduct,
            isSearchingCategory,
            fetchCategory,
            selectedCategory,
            isSearchingBrand,
            fetchBrand,
            selectedBrand,
            selectedUnit,
            isSearchingUnit,
            fetchUnit,
            availability,
            selectedAvailability,
            from,
            to,
            total
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
    padding-top: 0.81rem;
    padding-bottom: 0.81rem;
}


td:not(:last-child) {
    border-bottom: 0;
}

th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>
