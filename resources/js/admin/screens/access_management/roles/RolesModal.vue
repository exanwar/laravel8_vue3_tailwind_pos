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
                                Roles
                            </h1>
                            <button class="blue-button text-xs font-semibold" v-show="$can('create_roles')" @click="addRoleModal = true">
                                <i class="fas fa-plus"></i><span> Add Role</span>
                            </button>
                        </div>
                        <div class="w-full px-2">
                            <div class="bg-white shadow-md rounded my-6">
                                <table class="w-full table-fixed">
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
                                        <th class="px-3 md:px-6 py-3 text-left w-3/10">Role</th>
                                        <th class="px-3 md:px-6 py-3 text-center w-6/10">Permissions</th>
                                        <th class="px-3 md:px-6 py-3 text-center w-2/10">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-gray-600 text-sm font-light">
                                    <tr
                                        v-for="(role, index) in roles"
                                        :key="index"
                                        class="
                                        border-b border-gray-200 transform duration-700 cursor-pointer
                                        hover:bg-blue-100                                   "
                                    >
                                        <td class="py-3 px-3 md:px-6 text-center">
                                            <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">{{ role.title }}</span>
                                        </td>
                                        <td class="px-3 md:px-6 py-3 text-left">
                                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                                                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold text-center" v-for="(permission, index) in role.permissions" :key="index">{{ permission.slug }}</span>
                                            </div>
                                        </td>
                                        <td class="py-3 px-3 md:px-6 text-center">
                                            <div
                                                class="
                                                flex
                                                item-center
                                                justify-center
                                                space-x-2
                                            "
                                            >
                                                <button
                                                    v-show="$can('edit_roles')"
                                                    class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                                    @click.prevent="openEditModal(role.id)"

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
                                                    v-show="$can('delete_roles')"
                                                    class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                                    @click.prevent="deleteRole(role.id)"
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
    <EditRole  v-show="$can('edit_roles')" v-if="editRoleModal" :role="editRoleId" @reload="reload" @close="editRoleModal = false"/>
    <AddRole  v-show="$can('create_roles')" v-if="addRoleModal" @reload="reload" @close="addRoleModal = false"/>
</template>

<script>
import axios from 'axios'
import {ref, onMounted, inject} from "vue";
import EditRole from "./EditRole";
import AddRole from "./AddRole";
import { useVueSweetAlert2 } from "../../../useVueSweetAlert2";
export default {
    components:{EditRole, AddRole},
    setup() {
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const roles = ref([])
        function getRoles(){
            axios.get('/api/user/roles')
            .then(({data}) => {
                roles.value = data.data
            })
        }

        const addRoleModal = ref(false)

        const editRoleModal = ref(false)
        const editRoleId = ref(false)
        function openEditModal(id){
            editRoleModal.value = true
            editRoleId.value = id
        }

        function reload(){
            getRoles()
        }

        function deleteRole(id){
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
                    axios.delete('/api/user/roles/' + id)
                        .then( response => {
                            getRoles()
                            InjectDirectly.fire("Deleted!",
                                "Role has been deleted.",
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
            getRoles()
        })
        return {
            roles,
            addRoleModal,
            editRoleModal,
            editRoleId,
            openEditModal,
            reload,
            deleteRole
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


