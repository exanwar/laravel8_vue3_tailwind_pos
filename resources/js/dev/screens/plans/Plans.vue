<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center">
            <h1 class="text-5xl text-gray-600 font-nunito font-semibold">
                Plans
            </h1>
            <div class="flex justify-center items-center space-x-3">
                <button
                    class="
                        bg-dashboard-blue
                        px-5
                        py-3.5
                        rounded-xl
                        text-gray-50
                        font-semibold
                        tracking-wide
                        font-nunito
                        transform
                        duration-700
                        hover:bg-blue-300 hover:text-gray-800
                    "
                    @click.prevent="featureModalVisibility = true"
                >
                    Features
                </button>
            </div>
        </div>
        <!-- component -->
        <div class="mt-16">
            <div
                class="
                    max-w-full
                    md:max-w-lg
                    lg:max-w-full
                    mx-auto
                    grid grid-cols-1
                    lg:grid-cols-2
                    2xl:grid-cols-4
                    items-center
                    gap-6
                "
            >
                <plan-item
                    v-for="(item, index) in plans"
                    :key="index"
                    :id="item.id"
                    :name="item.pricingName"
                    :monthly="item.monthly"
                    :yearly="item.yearly"
                    :features="item.features"
                    :discount="item.offer"
                    @editItem="editExistingPlan(item.id)"
                    @trashItem="deletePlan(item.id)"
                />
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
            -translate-x-20 -translate-y-20
            cursor-pointer
            shadow-2xl
        "
        @click.prevent="addPlanModalVisibility = true"
    >
        <div class="relative">
            <div class="h-24 w-24 rounded-full"></div>
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
    <Features v-if="featureModalVisibility" @close="featureModalVisibility = false" />
    <AddPlan v-if="addPlanModalVisibility" @close="addPlanModalVisibility = false" @reload="reloadPlans"  />
    <EditPlan v-if="editPlanModalVisibility" :id="planId" @close="editPlanModalVisibility = false" @reload="reloadPlans" />
</template>

<script>
import PlanItem from './PlanItem.vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import AddPlan from "./AddPlan"
import EditPlan from "./EditPlan"
import Features from "./features/Features";
import {inject, onMounted, ref} from "vue";
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
export default {
    components: { PlanItem, AddPlan, EditPlan, Features },
    setup() {
        const toast = useToast()
        const addPlanModalVisibility = ref(false)
        const editPlanModalVisibility = ref(false)

        const monthly = ref(true)
        const plans = ref([])
        function getPlans(){
            axios
                .get('/api/dev/plans')
                .then(({ data }) => {
                    plans.value = data.data
                })
        }

        function reloadPlans(){
            getPlans()
        }

        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");
        function deletePlan(id){
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
                    axios.delete('/api/dev/plans/' + id)
                        .then( response => {
                            getPlans()
                            InjectDirectly.fire("Deleted!",
                                "Plan has been deleted.",
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

        const planId = ref(null)
        function editExistingPlan(id){
            editPlanModalVisibility.value = true
            planId.value = id
        }

        const featureModalVisibility = ref(false)

        onMounted(() => {
            getPlans()
        })
        return { toast, monthly, addPlanModalVisibility, editPlanModalVisibility, plans, reloadPlans, deletePlan, planId, editExistingPlan, featureModalVisibility  }
    },
}
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
input[type='checkbox'] {
    width: 1rem;
    height: 1rem;
}
</style>
