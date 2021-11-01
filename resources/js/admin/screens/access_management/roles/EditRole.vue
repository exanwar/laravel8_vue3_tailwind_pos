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
                                Edit Role# {{ role.title }}
                            </h1>
                        </div>
                        <div class="w-full px-2">
                            <div class="grid grid-cols-1">
                                <div class="mt-4 flex flex-col space-y-1">
                                    <h1
                                        class="
                                    ml-2
                                    text-gray-700
                                    font-nunito
                                    text-md
                                "
                                    >
                                        Role Title :
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
                                        v-model="roleTitle"
                                    />
                                </div>
                            </div>
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
                                    placeholder="Search permission.."
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

                                        <th class="px-6 py-3 text-center">Permissions</th>
                                        <th class="px-6 py-3 text-center">Allow/Deny</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-gray-600 text-sm font-light">
                                    <tr
                                        v-for="(permission, index) in permissions"
                                        :key="index"
                                        class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100                                   "
                                    >
                                        <td class="px-6 py-3 text-gray-600 font-lg font-semibold">{{ permission.title }}</td>
                                        <td class="text-center">
                                            <input type="checkbox" v-model="selectedPermissions" :value="permission.id" :id="index" v-if="!isInSelectedPermissions(permission.id)">
                                            <input type="checkbox" v-model="selectedPermissions" :value="permission.id" :id="index" v-else checked>
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
                                    @click="update"
                                >
                                    Update
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
import { inject, ref, computed, onMounted } from "vue";
import { SearchIcon  } from '@heroicons/vue/outline'
import { useVueSweetAlert2 } from "../../../useVueSweetAlert2";
import { useToast } from 'vue-toastification'
export default {
    props:['role'],
    components:{SearchIcon },
    setup(props) {
        const role = ref([])
        const roleId = props.role
        const roleTitle = ref(null)
        const selectedPermissions = ref([])
        function getRole(){
            axios.get('/api/user/roles/' + props.role )
                .then(({data}) => {
                    role.value = data.data[0]
                    roleTitle.value = data.data[0].title
                    selectedPermissions.value = data.data[0].permissions.map(item => item.id)
                })
        }

        const permissions = ref([])
        function getPermission(){
            axios.get('/api/user/permissions' )
                .then(({data}) => {
                    permissions.value = data.data
                })
        }
        const access = computed(() => selectedPermissions.value.map(item => item))
        function isInSelectedPermissions(id){
            return access.value.includes(id)
        }

        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");
        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/user/find-permission?q=' + this.query)
                    .then( ({data}) => {
                        permissions.value = data.data
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
                getPermission()
            }
        }

        const toast = useToast()
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
        function errorToast(message) {
            toast.error(message, {
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
            getRole()
            getPermission()
        })
        return {
            roleId,
            role,
            permissions,
            roleTitle,
            selectedPermissions,
            isInSelectedPermissions,
            query,
            searchIt,
            errorToast,
            successToast,
            InjectDirectly
        }
    },
    data() {
        return {
            devs: []
        }
    },
    watch: {},
    methods: {
        update(){
            let data = {
                role: this.roleTitle,
                permissions: this.selectedPermissions
            }
            axios.put('/api/user/roles/' + this.roleId, data)
                .then( response => {
                    this.handleReload()
                    this.handleClose()
                    this.successToast('Role\'s permissions have been updated!')
                })
        },
        handleClose() {
            this.$emit('close')
        },
        handleReload(){
            this.$emit('reload')
        }

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


