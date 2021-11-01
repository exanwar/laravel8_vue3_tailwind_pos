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
                                Features
                            </h1>
                            <button class="blue-button text-xs font-semibold" @click="addFeatureModal = true">
                                <i class="fas fa-plus"></i><span> Add Feature</span>
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
                                    placeholder="Search Features.."
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
                                        <th class="px-6 py-3 text-center">Title</th>
                                        <th class="px-6 py-3 text-center">Slug</th>
                                        <th class="px-6 py-3 text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-gray-600 text-sm font-light">
                                    <tr
                                        v-for="(feature, index) in features"
                                        :key="index"
                                        class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100                                   "
                                    >
                                        <td class="px-6 py-3 text-gray-600 font-lg font-semibold text-center">{{ feature.featuresName }}</td>
                                        <td class="text-center">
                                            <p class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">
                                                {{ feature.featuresSlug }}
                                            </p>
                                        </td>
                                        <td class="py-3 px-6 text-center">
                                            <div
                                                class="
                                                flex
                                                item-center
                                                justify-center
                                                space-x-2
                                            "
                                            >
                                                <button
                                                    class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                                    @click.prevent="openEditModal(feature.id)"

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
                                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                                    @click.prevent="deleteFeature(feature.id)"
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
    <AddFeature v-if="addFeatureModal" @close="addFeatureModal = false" @reload="reloadFeatures"/>
    <EditFeature v-if="editFeatureModal" :feature="featureId" @close="editFeatureModal = false" @reload="reloadFeatures" />
<!--    <AddPermission v-if="addPermissionModal" @close="addPermissionModal = false" @reload="reloadPermissions"/>-->
<!--    <EditPermission v-if="editPermissionModal" :permission="permissionId" @close="editPermissionModal = false" @reload="reloadPermissions"/>-->
</template>

<script>
import axios from 'axios'
import {ref, onMounted, inject} from "vue";
import { SearchIcon  } from '@heroicons/vue/outline'
import { useVueSweetAlert2 } from "../../../useVueSweetAlert2";
import AddFeature from "./AddFeature";
import EditFeature from "./EditFeature";
export default {
    components:{SearchIcon, AddFeature, EditFeature},
    setup() {
        const addFeatureModal = ref(false)
        const featureId = ref(null)
        const editFeatureModal = ref(false)
        const features = ref([])
        function getFeatures(){
            axios.get('/api/dev/features')
                .then(({data}) => {
                    features.value = data.data
                })
        }

        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");
        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/dev/find-feature?q=' + this.query)
                    .then( ({data}) => {
                        features.value = data.data
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
                getFeatures()
            }
        }

        function openEditModal(id){
            editFeatureModal.value = true
            featureId.value = id
        }

        function deleteFeature(id){
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
                    axios.delete('/api/dev/features/' + id)
                        .then( response => {
                            getFeatures()
                            InjectDirectly.fire("Deleted!",
                                "Feature has been deleted.",
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

        function reloadFeatures(){
            getFeatures()
        }

        onMounted(() => {
            getFeatures()
        })
        return {
            addFeatureModal,
            featureId,
            editFeatureModal,
            features,
            query,
            searchIt,
            reloadFeatures,
            openEditModal,
            deleteFeature
        }
    },
    data() {
        return {

        }
    },
    watch: {},
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
</style>


