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
                                Units
                            </h1>
                            <button
                                v-show="$can('create_units')"
                                class="blue-button text-xs font-semibold" @click="addUnitModal = true">
                                <i class="fas fa-plus"></i><span> Add Unit</span>
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
                                    placeholder="Search unit.."
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
                                        <th class="px-6 py-3 text-center">Name</th>
                                        <th class="px-6 py-3 text-center">Symbol</th>
                                        <th class="px-6 py-3 text-center" v-show="$can('edit_units') || $can('delete_units')">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-gray-600 text-sm font-light">
                                    <tr
                                        v-for="(unit, index) in units.data"
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
                                            text-center
                                            font-semibold
                                            whitespace-nowrap
                                        "
                                        >
                                            {{ unit.name }}
                                        </td>
                                        <td
                                            class="
                                            py-3
                                            px-3
                                            text-center
                                            font-semibold
                                            whitespace-nowrap
                                        "
                                        >
                                            {{ unit.symbol }}
                                        </td>
                                        <td class="py-3 px-6 text-center" v-show="$can('edit_units') || $can('delete_units')">
                                            <div
                                                class="
                                                flex
                                                item-center
                                                justify-center
                                                space-x-2
                                            "
                                            >
                                                <button
                                                    v-show="$can('edit_units')"
                                                    class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125" @click.prevent="openEditModal(unit.id)"

                                                >
                                                    <PencilIcon class="h-4 w-4" />
                                                </button>
                                                <button
                                                    v-show="$can('delete_units')"
                                                    class="bg-red-200 text-red-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125" @click.prevent="deleteUnit(unit.id)"

                                                >
                                                    <TrashIcon class="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="text-gray-500 flex items-center space-x-4 justify-center py-3 px-10 mt-5" v-if="last_page > 1">
                                    <div v-for="(link, index) in units.meta.links" :key="index">
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
    <AddUnitModal v-show="$can('create_units')" v-if="addUnitModal" @close="addUnitModal = false" @reload="reload"  />
    <EditUnitModal v-show="$can('edit_units')" v-if="editUnitModal" :unit="editUnitId" @close="editUnitModal = false" @reload="reload" />
</template>

<script>
import axios from 'axios'
import {ref, onMounted, inject} from "vue";
import AddUnitModal from './AddUnitModal'
import EditUnitModal from "./EditUnitModal";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon, PencilIcon, TrashIcon } from '@heroicons/vue/outline'
import {useVueSweetAlert2} from "../../../useVueSweetAlert2";
export default {
    components:{ SearchIcon, ChevronLeftIcon, ChevronRightIcon, PencilIcon, TrashIcon, AddUnitModal, EditUnitModal },
    setup() {
        const units = ref([])
        const last_page = ref(null)
        function getUnits(){
            axios.get('/api/user/product_units')
                .then(({data}) => {
                    units.value = data;
                    last_page.value = data.meta.last_page
                })
        }
        function goToPage(page){
            axios.get(page)
                .then(({data}) => {
                    units.value = data
                    last_page.value = data.meta.last_page
                })
        }

        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");
        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/user/find-unit?q=' + this.query)
                    .then( ({data}) => {
                        units.value = data
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
                getUnits()
            }
        }

        const addUnitModal = ref(false)

        const editUnitModal = ref(false)
        const editUnitId = ref(false)
        function openEditModal(id){
            editUnitModal.value = true
            editUnitId.value = id
        }

        function deleteUnit(id){
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
                    axios.delete('/api/user/product_units/' + id)
                        .then( response => {
                            getUnits()
                            InjectDirectly.fire("Deleted!",
                                "Unit has been deleted.",
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
            getUnits()
        }

        onMounted(() => {
            getUnits()
        })
        return {
            units,
            last_page,
            addUnitModal,
            editUnitModal,
            editUnitId,
            openEditModal,
            reload,
            query,
            searchIt,
            goToPage,
            deleteUnit
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


