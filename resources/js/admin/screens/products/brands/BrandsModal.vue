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
                                Brands
                            </h1>
                            <button
                                v-show="$can('create_brands')"
                                class="blue-button text-xs font-semibold"
                                @click="addBrandModal = true">
                                <i class="fas fa-plus"></i><span> Add Brand</span>
                            </button>
                        </div>
                        <div class="w-full px-2">
                            <div
                                class="
                                    mt-10
                                    flex
                                    items-center
                                    justify-start
                                    bg-gray-50
                                    rounded-xl
                                    shadow
                                    border
                                    border-blue-300
                                    w-6/12
                                "
                            >
                                <input
                                    type="text"
                                    placeholder="Search brand.."
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
                                <table class="w-full table-auto mt-10">
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
                                        <th class="px-2 text-center">SL#</th>
                                        <th class="px-6 py-3 text-center">Brand</th>
                                        <th class="px-6 py-3 text-center" v-show="$can('edit_brands') || $can('delete_brands')">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-gray-600 text-sm font-light">
                                    <tr
                                        v-for="(brand, index) in brands.data"
                                        :key="index"
                                        class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100                                   "
                                    >
                                        <td class="text-center font-bold text-xl">{{ index + 1 }}</td>
                                        <td
                                            class="
                                            py-3
                                            px-3
                                            text-left
                                            whitespace-nowrap
                                        "
                                        >
                                            <div class="flex items-center">
                                                <div class="h-16 w-16 bg-pink-400 rounded-full">
                                                    <img class="h-full w-full rounded-full p-0.5" :src="brand.brand_logo ? brand.brand_logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'" alt="employee.f_name" />
                                                </div>
                                                <div class="flex flex-col justify-start ml-4">
                                                    <h2 class="font-bold text-xl">{{ brand.name }}</h2>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 text-center" v-show="$can('edit_brands') || $can('delete_brands')">
                                            <div
                                                class="
                                                flex
                                                item-center
                                                justify-center
                                                space-x-2
                                            "
                                            >
                                                <button
                                                    v-show="$can('edit_brands')"
                                                    class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125" @click.prevent="openEditModal(brand.id)"

                                                >
                                                    <PencilIcon class="h-4 w-4" />
                                                </button>
                                                <button
                                                    v-show="$can('delete_brands')"
                                                    class="bg-red-200 text-red-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125" @click.prevent="deleteBrand(brand.id)"

                                                >
                                                    <TrashIcon class="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="text-gray-500 flex items-center space-x-4 justify-center py-3 px-10 mt-5" v-if="last_page > 1">
                                    <div v-for="(link, index) in brands.meta.links" :key="index">
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
                                        link.active ? 'bg-gradient-to-r from-blue-400 to-indigo-400 rotate-45 text-gray-100' : 'bg-gray-300 hover:bg-gray-700 hover:text-gray-100',
                                        link.url ? '' : 'opacity-50 cursor-not-allowed'
                                    ]"
                                        >
                                            <span :class="link.active ? 'transform -rotate-45' : '' ">{{ link.label }}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white shadow-md rounded my-6 flex justify-center items-center">

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
    <AddBrandModal v-show="$can('create_brands')" v-if="addBrandModal" @close="addBrandModal = false" @reload="reload" />
    <EditBrandModal v-show="$can('edit_brands')" v-if="editBrandModal" :brand="editBrandId" @close="editBrandModal = false" @reload="reload" />
</template>

<script>
import axios from 'axios'
import {ref, onMounted, inject} from "vue";
import AddBrandModal from "./AddBrandModal";
import EditBrandModal from "./EditBrandModal";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/vue/outline'
import {useVueSweetAlert2} from "../../../useVueSweetAlert2";
export default {
    components:{ SearchIcon, ChevronLeftIcon, ChevronRightIcon, PencilIcon, TrashIcon , AddBrandModal, EditBrandModal },
    setup() {
        const brands = ref([])
        const last_page = ref(null)
        function getBrands(){
            axios.get('/api/user/product_brands')
                .then(({data}) => {
                    brands.value = data;
                    last_page.value = data.meta.last_page
                })
        }
        function goToPage(page){
            axios.get(page)
                .then(({data}) => {
                    brands.value = data
                    last_page.value = data.meta.last_page
                })
        }

        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");
        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/user/find-brand?q=' + this.query)
                    .then( ({data}) => {
                        brands.value = data
                        last_page.value = data.meta.last_page
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
                getBrands()
            }
        }

        const addBrandModal = ref(false)

        const editBrandModal = ref(false)
        const editBrandId = ref(false)
        function openEditModal(id){
            editBrandModal.value = true
            editBrandId.value = id
        }

        function deleteBrand(id){
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
                    axios.delete('/api/user/product_brands/' + id)
                        .then( response => {
                            getBrands()
                            InjectDirectly.fire("Deleted!",
                                "Brand has been deleted.",
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

        function reload(){
            getBrands()
        }

        onMounted(() => {
            getBrands()
        })
        return {
            brands,
            last_page,
            addBrandModal,
            editBrandModal,
            editBrandId,
            openEditModal,
            reload,
            query,
            searchIt,
            goToPage,
            deleteBrand
        }
    },
    methods: {
        submit(){

        },
        handleClose() {
            this.$emit('close')
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
</style>


