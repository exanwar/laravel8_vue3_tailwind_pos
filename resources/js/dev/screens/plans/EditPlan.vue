<template>
    <div
        class="
            absolute
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
        <div class="relative">
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
                <div class="grid grid-cols-1 gap-6" style="width: 40vw">
                    <div class="bg-white rounded-lg overflow-hidden">
                        <div class="bg-gray-900 px-5 py-3.5">
                            <h1
                                class="
                                    text-gray-200
                                    uppercase
                                    font-nunito
                                    tracking-wide
                                "
                            >
                                Edit Plan# {{ editPlanName }}
                            </h1>
                        </div>
                        <div class="grid grid-cols-1 gap-6 px-5 py-3">
                            <div class="grid grid-cols-1 gap-6">
                                <div class="flex flex-col space-y-1.5">
                                    <h1
                                        class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                    >
                                        Plan Title:
                                    </h1>
                                    <input
                                        type="text"
                                        placeholder="New Plan Title"
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
                                            text-sm
                                        "
                                        v-model="editPlanName"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div class="flex flex-col space-y-1.5">
                                    <h1
                                        class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                    >
                                        Per Month ($):
                                    </h1>
                                    <input
                                        type="number"
                                        placeholder="Monthly Charge"
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
                                            text-sm
                                        "
                                        v-model.number="editPlanMonthly"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1.5">
                                    <h1
                                        class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                    >
                                        Discount (%):
                                    </h1>
                                    <input
                                        type="number"
                                        placeholder="Monthly Charge"
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
                                            text-sm
                                        "
                                        v-model.number="editPlanDiscount"
                                    />
                                </div>
                                <div class="flex flex-col space-y-1.5">
                                    <h1
                                        class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                    >
                                        Per Year ($):
                                    </h1>
                                    <input
                                        type="number"
                                        placeholder="Yearly Charge"
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
                                            text-sm
                                            cursor-not-allowed
                                        "
                                        readonly
                                        v-model.number="editPlanYearly"
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1">
                                <div class="flex flex-col space-y-1.5">
                                    <h1
                                        class="
                                            text-center text-lg
                                            font-nunito
                                            tracking-wide
                                            text-gray-600
                                            font-semibold
                                            uppercase
                                        "
                                    >
                                        Features
                                    </h1>
                                    <div
                                        class="
                                            h-72
                                            bg-teal-600
                                            rounded-2xl
                                            pl-16
                                            py-5
                                            flex flex-col
                                            space-y-3
                                            overflow-y-scroll
                                            scrollbar
                                            scrollbar-thin
                                            scrollbar-thumb-rounded-full
                                            scrollbar-track-rounded-full
                                            scrollbar-thumb-dashboard-scroll-stick
                                            scrollbar-track-gray-200
                                        "
                                    >
                                        <div
                                            class="flex space-x-3 items-center"
                                            v-for="(feature, index) in features"
                                            :key="index"
                                        >
                                            <input
                                                type="checkbox"
                                                name=""
                                                :id="index"
                                                class="h-6 w-6"
                                                v-model="editPlanFeatures"
                                                :value="feature.id"
                                                :checked="isInSelectedFeatures(feature.id)"
                                            />
                                            <h1
                                                class="
                                                    text-gray-50
                                                    font-semibold font-nunito
                                                "
                                            >
                                                {{ feature.featuresName }}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="
                                    pt-5
                                    flex
                                    justify-end
                                    items-center
                                    space-x-3
                                "
                            >
                                <button
                                    class="
                                        px-3
                                        py-2
                                        rounded-lg
                                        transform
                                        duration-700
                                        disabled:opacity-50
                                        bg-green-100
                                        text-green-600
                                        hover:bg-green-600 hover:text-green-100
                                    "
                                    @click.prevent="update"
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
import {computed, onMounted, ref} from "vue";
import axios from "axios";

export default {
    props:['id'],
    setup(props){
        const editPlanName = ref(null)
        const editPlanMonthly = ref(null)
        const editPlanDiscount = ref(null)
        const editPlanYearly = computed(() => {
            let monthly = Number.parseFloat(editPlanMonthly.value)
            let discount = Number.parseFloat(editPlanDiscount.value)
            let yearly = (monthly * 12)
            let discountPrice = yearly * (discount / 100)
            let final = yearly - discountPrice;
            return Number.parseFloat(final).toFixed(2)
        })
        const editPlanFeatures = ref([])
        function getPlan(){
            axios.get('/api/dev/plans/' + props.id)
                .then(({data}) => {
                    let planData = data.data[0]
                    editPlanName.value = planData.pricingName
                    editPlanMonthly.value = planData.monthly
                    editPlanDiscount.value = planData.offer
                    editPlanFeatures.value = planData.features.map(item => item.id)
                    console.log(planData)
                })
        }

        const features = ref([])
        function getFeatures(){
            axios
                .get('/api/dev/features')
                .then(({ data }) => {
                    features.value = data.data
                })
        }

        const access = computed(() => {
            return editPlanFeatures.value.map(item => item);
        })

        function isInSelectedFeatures(id){
            access.value.includes(id)
        }

        onMounted(()=> {
            getFeatures()
            getPlan()
        })
        return{
            features,
            editPlanName,
            editPlanMonthly,
            editPlanDiscount,
            editPlanYearly,
            editPlanFeatures,
            isInSelectedFeatures
        }
    },
    methods:{
        update(){
            axios
                .put(
                    '/api/dev/plans/' + this.id,
                    {
                        package_title: this.editPlanName,
                        per_month: this.editPlanMonthly,
                        per_year: this.editPlanYearly,
                        offer: this.editPlanDiscount,
                        features: this.editPlanFeatures,
                    })
                .then((response) => {
                    this.handleReload()
                    this.handleClose()
                    console.log(response)
                })
                .catch((e) => {
                    this.loading = false
                    this.$swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                })
        },
        handleClose(){
            this.$emit('close')
        },
        handleReload(){
            this.$emit('reload')
        }
    }
}
</script>

<style scoped lang="scss">
input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>
