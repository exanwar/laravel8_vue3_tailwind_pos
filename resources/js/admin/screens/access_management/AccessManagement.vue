<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center">
            <h1 class="text-3xl text-gray-600 font-nunito font-semibold">
                Employees
            </h1>
            <div class="flex justify-center items-center space-x-3">
                <button class="blue-button text-xs font-semibold" v-show="$can('access_roles')" @click="showRoleModal = true">
                    Roles
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
                            placeholder="Search Employee.."
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
                        <table class="w-full flex flex-row flex-no-wrap xl:bg-white rounded-lg overflow-hidden xl:shadow-xl">
                            <thead class="text-white">
                            <tr class="bg-dashboard-blue flex flex-col flex-no-wrap xl:table-row rounded-l-lg xl:rounded-none mb-2 xl:mb-0" v-for="(item, index) in employees.data" :key="index">
                                <th class="p-3 text-left xl:text-center">SL</th>
                                <th class="px-3 py-12 xl:py-3 text-left xl:text-center">Employee</th>
                                <th class="px-3 py-2.5 xl:py-3 text-left xl:text-center">Role</th>
                                <th class="px-3 py-2.5 xl:py-3 text-left xl:text-center">Join Date</th>
                                <th class="px-3 py-4 xl:py-3 text-left xl:text-center" width="110px">Actions</th>
                            </tr>
                            </thead>
                            <tbody class="flex-1 xl:flex-none">
                            <tr class="flex flex-col flex-no wrap xl:table-row mb-2 xl:mb-0" v-for="(item, index) in employees.data" :key="index">
                                <td class="border-grey-light border hover:bg-gray-100 p-3 xl:text-center">{{ from + index }}</td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-2.5 truncate">
                                    <div class="flex items-center">
                                        <div class="h-20 w-20 hidden md:block">
                                            <img class="h-full w-full rounded-full"
                                                 :src="item.avatar ? item.avatar : 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png'"
                                                 :alt="item.name" />
                                        </div>
                                        <div class="flex flex-col justify-start md:ml-4">
                                            <h2 class="font-bold text-lg">{{ item.f_name }} {{ item.l_name }}</h2>
                                            <div>
                                                <p class="mb-0 font-semibold text-sm">{{ item.username }}</p>
                                                <p class="mb-0 font-semibold text-sm">{{ item.email }}</p>
                                                <p class="mb-0 italic font-medium text-xs">{{ item.phone }}</p>
                                                <p class="mb-0 italic font-medium text-xs">{{ item.address_1 }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 p-3 xl:text-center">
                                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold" v-for="(role, index) in item.roles" :key="index">{{ role.title }}</span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-2.5 lg:py-3 xl:text-center">
                                    <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs font-semibold">{{ $filters.formatDate(item.join_date) }}</span>
                                </td>
                                <td class="border-grey-light border hover:bg-gray-100 px-3 py-2.5 lg:py-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                    <div
                                        class="
                                                flex
                                                item-center
                                                xl:justify-center
                                                space-x-2
                                            "
                                    >
                                        <button
                                            v-show="$can('access_employees')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click="showEditEmployeeModal(item.id)">
                                            <EyeIcon class="h-4 w-4" />
                                        </button>
                                        <button
                                            v-show="$can('edit_employees')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click="showEditEmployeeModal(item.id)">
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
                                            v-show="$can('delete_employees')"
                                            class="bg-purple-200 text-purple-600 py-1 px-2.5 py-2 rounded-lg text-xs font-semibold transform duration-700 hover:scale-125"
                                            @click.prevent="deleteEmployee(item.id)"
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
                        <div class="text-gray-500 flex items-center space-x-4 justify-center py-3 px-10" v-if="last_page > 1">
                            <div v-for="(link, index) in employees.meta.links" :key="index">
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
                            Showing {{ from }} to {{ to }} of {{ total }} employees
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
        v-show="$can('create_employees')"
        @click.prevent="addEmployee = true"
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
    <AddEmployee v-show="$can('create_employees')" v-if="addEmployee" @close="addEmployee = false" @reloadEmployees="reloadEmployees"/>
    <EditEmployee v-show="$can('edit_employees')" v-if="editEmployee" :employee="employeeId" @close="editEmployee = false" @reloadEmployees="reloadEmployees"/>
    <RolesModal v-show="$can('access_roles')" v-if="showRoleModal" @close="showRoleModal = false"/>
</template>

<script>
import axios from 'axios'
import AddEmployee from "./employees/AddEmployee";
import EditEmployee from "./employees/EditEmployee";
import {inject, onMounted, ref} from "vue";
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import RolesModal from "./roles/RolesModal";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon, EyeIcon   } from '@heroicons/vue/outline'
export default {
    components: {AddEmployee, EditEmployee, RolesModal, SearchIcon, ChevronLeftIcon, ChevronRightIcon, EyeIcon  },
    setup() {
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        const last_page = ref(null)
        const from = ref(null)
        const to = ref(null)
        const total = ref(null)
        const employees = ref([])
        function getEmployees(){
            axios.get('/api/user/employees')
                .then(({data}) => {
                    employees.value = data
                    last_page.value = data.meta.last_page
                    from.value = data.meta.from
                    to.value = data.meta.to
                    total.value = data.meta.total
                })
        }

        const addEmployee = ref(false)
        function reloadEmployees(){
            getEmployees()
        }

        const editEmployee = ref(false)
        const employeeId = ref(null)
        function showEditEmployeeModal(id){
            editEmployee.value = true
            employeeId.value = id
        }

        function deleteEmployee(id){
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
                    axios.delete('/api/user/employees/' + id)
                        .then( response => {
                            getEmployees()
                            InjectDirectly.fire("Deleted!",
                                "Employee has been deleted.",
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

        const showRoleModal = ref(false)

        const query = ref(null)
        function searchIt(){
            if(query.value !== '') {
                axios.get('/api/user/find-employee?page=1&q=' + query.value)
                    .then( ({data}) => {
                        employees.value = data
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
                getEmployees()
            }
        }

        function goToPage(page){
            axios.get(page)
                .then(({data}) => {
                    employees.value = data
                    last_page.value = data.meta.last_page
                    from.value = data.meta.from
                    to.value = data.meta.to
                    total.value = data.meta.total
                })
        }

        onMounted(() => {
            getEmployees()
        })
        return {
            employees,
            getEmployees,
            addEmployee,
            editEmployee,
            employeeId,
            showEditEmployeeModal,
            deleteEmployee,
            reloadEmployees,
            showRoleModal,
            query,
            searchIt,
            last_page,
            from,
            to,
            total,
            goToPage
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
}

td:not(:last-child) {
    border-bottom: 0;
}

th:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>

