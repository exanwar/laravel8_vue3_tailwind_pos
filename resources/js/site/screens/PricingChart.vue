<template>
    <div
        class="
            md:bg-white md:rounded-3xl
            lg:max-w-4xl
            xl:max-w-5xl
            md:max-w-3xl
            sm:max-w-md
            xs:max-w-sm
            max-w-xs
            mx-auto
        "
    >
        <div class="flex justify-center items-center py-6 md:py-0">
            <div
                class="
                    flex
                    justify-center
                    items-center
                    bg-gray-100
                    rounded-full
                    px-4
                    py-2
                    space-x-2
                "
            >
                <div
                    class="
                        rounded-3xl
                        px-4
                        py-1.5
                        text-md
                        font-nunito
                        transform
                        duration-1000
                        cursor-pointer
                    "
                    :class="
                        monthly ? 'bg-blue-700 text-gray-200' : 'text-gray-500'
                    "
                    @click.prevent="monthly = true"
                >
                    Monthly
                </div>
                <div
                    class="
                        flex
                        justify-center
                        items-center
                        rounded-full
                        px-4
                        py-2
                        space-x-2
                        transform
                        duration-1000
                        cursor-pointer
                    "
                    :class="!monthly ? 'bg-blue-700 ' : ''"
                    @click="monthly = false"
                >
                    <h1
                        class="font-nunito"
                        :class="!monthly ? 'text-gray-200' : 'text-gray-500'"
                    >
                        Yearly
                    </h1>
                    <div
                        class="
                            bg-green-500
                            text-gray-100
                            font-semibold
                            text-sm
                            px-2
                            py-0.5
                            rounded-full
                        "
                    >
                        Save 15%+
                    </div>
                </div>
            </div>
        </div>
        <table class="w-full hidden md:block">
            <thead>
            <tr>
                <th class="w-1/4 md:w-3/12 px-4 py-6">
                    <div class="">
                        <h1 class="text-gray-800 text-right text-lg">
                            Save 20%
                        </h1>
                        <div class="text-right">
                            <img
                                src="https://assets.website-files.com/5e7adffc6e755a6bb3a7d516/5e7adffc6e755a55b3a7d56d_arrow.svg"
                                class="inline-block"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            class="
                                    w-full
                                    mt-4
                                    py-3
                                    px-2
                                    shadow
                                    rounded-lg
                                    focus:border-blue-300
                                    border
                                    outline-none
                                    text-lg
                                "
                        />
                        <p
                            class="
                                    mt-3
                                    text-gray-500
                                    font-semibold
                                    text-sm
                                    tracking-wide
                                "
                        >
                            *Join and get 20% off coupon
                        </p>
                    </div>
                </th>
                <th
                    class="px-8 py-16 w-1/4 md:w-3/12"
                    v-for="(plan, index) in packages"
                    :key="index"
                >
                    <div class="flex flex-col">
                        <h1
                            class="
                                    font-pattaya font-extrabold
                                    text-2xl
                                    tracking-wide
                                    text-left text-gray-900
                                "
                        >
                            ${{ monthly ? plan.monthly : plan.yearly }}/mo
                        </h1>
                        <h1
                            class="
                                    mt-1
                                    font-nunito font-semibold
                                    text-left text-gray-700
                                "
                        >
                            No credit card required
                        </h1>
                        <div class="mt-3 flex">
                            <button
                                class="
                                        font-pattaya
                                        text-xl
                                        md:text-lg
                                        bg-blue-700
                                        opacity-80
                                        hover:opacity-60
                                        px-8
                                        md:px-3
                                        py-2.5
                                        rounded-lg
                                        text-gray-100
                                        transition
                                        duration-700
                                    "
                                @click.prevent="monthly ? buyPlanMonthly(plan) : buyPlanYearly(plan)"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(feature, index) in features" :key="index">
                <td
                    class="
                            px-5
                            py-6
                            border-2
                            boder-gray-400
                            font-bold
                            md:font-semibold
                            text-gray-800 text-xl
                        "
                >
                    {{ feature.featuresName }}
                </td>
                <td
                    v-for="(plan, index1) in packages"
                    :key="index1"
                    class="
                            px-4
                            py-6
                            border-2
                            boder-gray-400
                            font-bold
                            text-center
                        "
                >
                    <CheckCircleIcon
                        v-if="check(feature.id, plan.features)"
                        class="
                                h-8
                                w-8
                                inline-block
                                text-blue-800
                                opacity-80
                            "
                    />
                    <CheckCircleIcon
                        v-else
                        class="
                                h-8
                                w-8
                                inline-block
                                text-gray-400
                                opacity-80
                            "
                    />
                </td>
            </tr>
            </tbody>
        </table>
        <div
            class="
                md:hidden
                mt-5
                flex
                lg:flex-row
                flex-col
                items-center
                space-y-10
                lg:space-x-4
            "
        >
            <PricingItem
                v-for="(plan, index) in packages"
                :key="index"
                :name="plan.pricingName"
                :monthly="plan.monthly"
                :yearly="plan.yearly"
                :features="plan.features"
                :discount="plan.offer"
                @buyNowMonthly="buyPlanMonthly(plan)"
                @buyNowYearly="buyPlanYearly(plan)"
            />
        </div>
    </div>
    <purchase-modal v-if="showPurchaseModal" :planItem="selectedPlan" @close="showPurchaseModal = false" @goToLogin="loginPage"/>
</template>

<script>
import axios from 'axios'
import PricingItem from './PricingItem'
import { CheckCircleIcon } from '@heroicons/vue/solid'
import _ from 'lodash'
import PurchaseModal from "./PurchaseModal";
export default {
    setup() {
        return {}
    },
    components: {
        PricingItem,
        PurchaseModal,
        CheckCircleIcon,
    },
    data() {
        return {
            monthly: true,
            showMonthly: true,
            changePlanSwitch: false,
            plans: {
                monthly: {
                    basic: '100',
                    premium: '300',
                    business: '1,000',
                },
                yearly: {
                    basic: '1,000',
                    premium: '3,000',
                    business: '10,000',
                },
            },
            features: [],
            packages: [],
            selectedPlan: {},
            showPurchaseModal: false,
        }
    },
    methods: {
        getPricingWithFeatures() {
            axios
                .get('/api/site/pricing_features')
                .then(({ data }) => {
                    this.packages = data.data
                })
        },
        getFeatures() {
            axios.get('/api/site/features').then(({ data }) => {
                this.features = data.data
            })
        },

        check(id, features) {
            var SelectedFeatures = features.map((item) => item.id)

            return SelectedFeatures.includes(id)
        },
        buyPlanMonthly(plan){
            this.showPurchaseModal = true
            this.selectedPlan = _.omit(plan, ['features', 'yearly', 'offer'])
            this.selectedPlan.yearly = null
            console.log(this.selectedPlan)
        },
        buyPlanYearly(plan){
            this.showPurchaseModal = true
            this.selectedPlan = _.omit(plan, ['features'])
            console.log(this.selectedPlan)
        },
        loginPage(){
            this.$router.go('/login')
        }
    },
    created() {
        this.getPricingWithFeatures()
        this.getFeatures()
    },
}
</script>

<style lang="scss" scoped></style>
