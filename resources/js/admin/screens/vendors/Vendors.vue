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
                    flex-col lg:flex-row
                    lg:space-x-5
                    justify-between
                    font-sans
                    overflow-hidden
                "
            >
                <div class="w-full" :class="$can('create_vendors') ? 'lg:w-9/12 2xl:w-8/12 overflow-y-auto' : ''" >
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
                                    w-full
                                    md:w-8/12
                                    lg:w-6/12
                                    xl:w-5/12
                                    2xl:w-3/12
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
                    <div class="bg-white shadow-md rounded mt-10">
                        <table class="w-full flex flex-row flex-no-wrap xl:bg-white rounded-lg overflow-hidden xl:shadow-xl">
                            <thead class="text-white">
                            <tr class="bg-dashboard-blue flex flex-col flex-no-wrap xl:table-row rounded-l-lg xl:rounded-none mb-2 xl:mb-0" v-for="(item, index) in vendors.data" :key="index">
                                <th class="p-3 text-left xl:text-center">SL</th>
                                <th class="px-3 py-6 sm:py-8 xl:py-3 text-left xl:text-center">Company</th>
                                <th class="px-3 py-11 xl:py-3 text-left xl:text-center">Contact</th>
                                <th class="px-3 text-left lg:text-center custom-padding-action" width="110px">Actions</th>
                            </tr>
                            </thead>
                            <tbody class="flex-1 xl:flex-none">
                            <tr class="flex flex-col flex-no wrap xl:table-row mb-2 xl:mb-0" v-for="(item, index) in vendors.data" :key="index">
                                <td class="border-grey-light border hover:bg-gray-100 p-3 xl:text-center">{{ from + index }}</td>
                                <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                                    <div class="flex items-center">
                                        <div class="h-16 w-16 hidden sm:block">
                                            <img class="h-full w-full rounded-full"
                                                 :src="item.logo ? item.logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                 :alt="item.name" />
                                        </div>
                                        <div class="flex flex-col justify-start sm:ml-4">
                                            <h2 class="font-bold text-lg">{{ item.name }}</h2>
                                            <div>
                                                <p class="mb-0 font-semibold text-sm">{{ item.address }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 p-3 truncate">
                                    <div class="flex items-center">
                                        <div class="h-16 w-16 hidden sm:block">
                                            <img class="h-full w-full rounded-full"
                                                 :src="item.via_image ? item.via_image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                 :alt="item.via" />
                                        </div>
                                        <div class="flex flex-col justify-start sm:ml-4">
                                            <h2 class="font-bold text-lg">{{ item.via }}</h2>
                                            <div>
                                                <p class="mb-0 font-bold text-sm">{{ item.via_position }}</p>
                                                <p class="mb-0 font-semibold text-sm italic">{{ item.via_email }}</p>
                                                <p class="mb-0 font-semibold text-sm italic">{{ item.via_phone }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                    <div
                                        class="
                                                flex
                                                item-center
                                                xl:justify-center
                                                space-x-2
                                            "
                                    >
                                        <button
                                            v-show="$can('access_vendors')"
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
                                            v-show="$can('edit_vendors')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click="openEdit(item.id)">
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
                                            v-show="$can('delete_vendors')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click.prevent="deleteVendor(item.id)"
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
                            <div v-for="(link, index) in vendors.meta.links" :key="index">
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
                <div class="w-full h-full overflow-hidden bg-white shadow-lg rounded-md my-10" v-show="$can('create_vendors')" :class="$can('create_customers') ? 'lg:w-3/12 2xl:w-4/12 ' : ''">
                    <div class="w-full
                                bg-dashboard-blue
                                bg-opacity-80
                                px-5
                                py-3
                                flex
                                justify-between
                                items-center">
                        <h1 class="text-gray-50 uppercase font-nunito tracking-wide font-bold" v-if="!edit">Add New Vendor</h1>
                        <h1 class="text-gray-50 uppercase font-nunito tracking-wide font-bold" v-show="$can('edit_vendors')" v-else>Edit Vendor</h1>
                    </div>
                    <div class="w-full flex flex-col sm:flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-3 2xl:flex-row 2xl:space-x-4">
                        <div class="px-3 pb-3 rounded-lg flex flex-1 flex-col">
                            <h1 class="text-gray-600 text-lg font-semibold font-nunito text-center mt-2">Company Info</h1>
                            <div class="flex flex-col justify-center items-center mt-1">
                                <div class="relative">
                                    <div class="flex flex-col">
                                        <div class="h-40 w-40">
                                            <img
                                                :src="logo ? logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                alt="profile-pic"
                                                class="h-full w-full rounded-full "
                                            >
                                        </div>
                                        <input type="hidden" :value="logo ? logo : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'">
                                    </div>
                                    <div class="absolute right-5 bottom-1">
                                        <div class="bg-gray-400 border border-gray-100 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="absolute left-0 top-0">
                                        <input type="file" accept=".jpeg, .png, .jpg" class="absolute h-40 w-40" style="opacity: 0;" @change="uploadVendorLogo">
                                    </div>

                                </div>
                                <div class="img-extension mt-3 text-gray-400 font-nunito italic">
                                    <div class="d-inline-block align-items-center">
                                        <span>Only</span>
                                        <span>.jpg</span>
                                        <span>.png</span>
                                        <span>.jpeg</span>
                                        <span> allowed</span>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="mt-4 flex flex-col space-y-1">
                                    <h1
                                        class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                    >
                                        Name :
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="Name"
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
                                        v-model="company_name"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="mt-4 flex flex-col space-y-1">
                                    <h1
                                        class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                    >
                                        Address :
                                    </h1>
                                    <textarea
                                        placeholder="Address"
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
                                        rows="4"
                                        v-model="company_address"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="px-3 pb-3 rounded-lg flex flex-1 flex-col">
                            <h1 class="text-gray-600 text-lg font-semibold font-nunito text-center mt-2">Contact Person</h1>
                            <div class="flex flex-col justify-center items-center mt-1">
                                <div class="relative">
                                    <div class="flex flex-col">
                                        <div class="h-40 w-40">
                                            <img
                                                :src="image ? image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                alt="profile-pic"
                                                class="h-full w-full rounded-full "
                                            >
                                        </div>
                                        <input type="hidden" :value="image ? image : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'">
                                    </div>
                                    <div class="absolute right-5 bottom-1">
                                        <div class="bg-gray-400 border border-gray-100 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="absolute left-0 top-0">
                                        <input type="file" accept=".jpeg, .png, .jpg" class="absolute h-40 w-40" style="opacity: 0;" @change="uploadVendorPhoto">
                                    </div>

                                </div>
                                <div class="img-extension mt-3 text-gray-400 font-nunito italic">
                                    <div class="d-inline-block align-items-center">
                                        <span>Only</span>
                                        <span>.jpg</span>
                                        <span>.png</span>
                                        <span>.jpeg</span>
                                        <span> allowed</span>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="mt-4 flex flex-col space-y-1">
                                    <h1
                                        class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                    >
                                        Name :
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="Name"
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
                                        v-model="via_name"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="mt-4 flex flex-col space-y-1">
                                    <h1
                                        class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                    >
                                        Title :
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="Title"
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
                                        v-model="via_position"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="mt-4 flex flex-col space-y-1">
                                    <h1
                                        class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                    >
                                        Email :
                                    </h1>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
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
                                        v-model="via_email"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="mt-4 flex flex-col space-y-1">
                                    <h1
                                        class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                    >
                                        Phone :
                                    </h1>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Phone"
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
                                        v-model="via_phone"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="
                                px-3
                                py-2
                                flex
                                justify-end
                                items-center
                                space-x-3
                            "
                    >
                        <button
                            v-if="edit"
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
                            v-if="!edit"
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
                            v-show="$can('create_vendors')"
                            @click="submit"
                        >
                            Submit
                        </button>
                        <button
                            v-else
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
                            v-show="$can('edit_vendors')"
                            @click="update"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {inject, onMounted, ref} from "vue";
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon  } from '@heroicons/vue/outline'
export default {
    components:{ SearchIcon, ChevronRightIcon, ChevronLeftIcon },
    setup() {
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");


        const last_page = ref(null)
        const from = ref(null)
        const to = ref(null)
        const total = ref(null)
        const vendors = ref([])
        function getVendors(page = 1){
            axios.get('/api/user/vendors?page=' + page)
                .then(({data}) => {
                    vendors.value = data
                    last_page.value = data.meta.last_page
                    from.value = data.meta.from
                    to.value = data.meta.to
                    total.value = data.meta.total
                })
        }

        function deleteVendor(id){
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
                    axios.delete('/api/user/vendors/' + id)
                        .then( response => {
                            getVendors()
                            InjectDirectly.fire("Deleted!",
                                "Vendor has been deleted.",
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

        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/user/find-vendor?page=1&q=' + query.value )
                    .then( ({data}) => {
                        vendors.value = data
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
                getVendors()
            }
        }

        function goToPage(page){
            axios.get(page)
                .then(({data}) => {
                    vendors.value = data
                    last_page.value = data.meta.last_page
                    from.value = data.meta.from
                    to.value = data.meta.to
                    total.value = data.meta.total
                })
        }

        function reloadVendors(){
            getVendors()
        }

        const logo = ref(null)
        function uploadVendorLogo(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            if (file["size"] < 2111775) {
                reader.onloadend = file => {
                    logo.value = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                InjectDirectly.fire({
                    icon: "error",
                    title: "Oops..",
                    text: "You are uploading a large image",
                    footer: ""
                });
            }
        }
        const company_name = ref(null)
        const company_address = ref(null)

        const image = ref(null)
        function uploadVendorPhoto(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            if (file["size"] < 2111775) {
                reader.onloadend = file => {
                    image.value = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                InjectDirectly.fire({
                    icon: "error",
                    title: "Oops..",
                    text: "You are uploading a large image",
                    footer: ""
                });
            }
        }
        const via_name = ref(null)
        const via_email = ref(null)
        const via_phone = ref(null)
        const via_position = ref(null)

        function submit(){
            axios.post('/api/user/vendors', {
                logo : logo.value,
                name: company_name.value,
                address: company_address.value,
                via: via_name.value,
                via_image: image.value,
                via_position: via_position.value,
                via_phone: via_phone.value,
                via_email: via_email.value,
            })
                .then((response) => {
                    logo.value = null
                    company_name.value = null
                    company_address.value = null
                    via_name.value = null
                    image.value = null
                    via_position.value = null
                    via_phone.value = null
                    via_email.value = null
                    reloadVendors()
                })
                .catch(e => console.log(e.response))
        }

        const edit = ref(false)
        const editId = ref(null)
        function openEdit(id){
            edit.value = true
            editId.value = id
            axios.get('/api/user/vendors/' + id)
                .then(({data}) => {
                    let vendorData = data.data[0]
                    logo.value = vendorData.logo
                    company_name.value = vendorData.name
                    company_address.value = vendorData.address
                    via_name.value = vendorData.via
                    image.value = vendorData.via_image
                    via_position.value = vendorData.via_position
                    via_phone.value = vendorData.via_phone
                    via_email.value = vendorData.via_email
                })
        }

        function update(){
            axios.put('/api/user/vendors/' + editId.value, {
                logo : logo.value,
                name: company_name.value,
                address: company_address.value,
                via: via_name.value,
                via_image: image.value,
                via_position: via_position.value,
                via_phone: via_phone.value,
                via_email: via_email.value,
            })
                .then((response) => {
                    logo.value = null
                    company_name.value = null
                    company_address.value = null
                    via_name.value = null
                    image.value = null
                    via_position.value = null
                    via_phone.value = null
                    via_email.value = null
                    editId.value = null
                    edit.value = false
                    reloadVendors()
                })
                .catch(e => console.log(e.response))
        }

        function handleClose(){
            logo.value = null
            company_name.value = null
            company_address.value = null
            via_name.value = null
            image.value = null
            via_position.value = null
            via_phone.value = null
            via_email.value = null
            editId.value = null
            edit.value = false
            editId.value = null
            edit.value = false
        }


        onMounted(() => {
            getVendors()
        })
        return {
            vendors,
            last_page,
            reloadVendors,
            deleteVendor,
            query,
            searchIt,
            goToPage,
            logo,
            uploadVendorLogo,
            company_name,
            company_address,
            image,
            uploadVendorPhoto,
            via_name,
            via_position,
            via_email,
            via_phone,
            submit,
            edit,
            openEdit,
            update,
            handleClose,
            from,
            to,
            total
        }
    },
    data() {
        return {
        }
    },
    methods: {

    },
    created() {

    },
}
</script>

<style lang="scss" scoped>
@media (min-width: 1280px) {
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
    padding-top: 0.98rem;
    padding-bottom: 0.98rem;
}


td:not(:last-child) {
    border-bottom: 0;
}

th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>
