<template>
    <div class="bg-white rounded-3xl h-full shadow-3xl transform duration-700">
        <div class="relative">
            <div class="py-5 px-8 flex flex-col flex-wrap space-y-5">
                <div class="mt-8 block">
                    <h1
                        class="
                            font-pattaya
                            text-4xl
                            font-bold
                            text-center
                            tracking-wider
                        "
                    >
                        {{ name ? name : 'Dummy' }}
                    </h1>
                </div>
                <div class="block">
                    <div
                        class="
                            text-center text-7xl
                            font-bold font-nunito
                            tracking-tighter
                            text-gray-700
                            flex
                            justify-center
                        "
                    >
                        <h1 v-if="showMonthly">{{ monthly }}</h1>
                        <h1 v-else>{{ yearly }}</h1>
                        <span
                            class="
                                text-2xl
                                items-baseline
                                text-blue-500
                                font-bold font-nunito
                                ml-1
                            "
                        >
                            $
                        </span>
                        <span
                            class="
                                flex
                                text-lg
                                items-end
                                text-gray-700
                                font-bold font-nunito
                                tracking-wide
                            "
                        >{{ showMonthly ? '/ mo' : '/ year' }}</span
                        >
                    </div>
                </div>
                <button
                    class="
                        bg-blue-900
                        hover:bg-blue-500
                        py-3
                        px-20
                        rounded-xl
                        text-gray-100
                        font-bold font-pattaya
                        tracking-wider
                        text-xl
                        transition
                        duration-700
                    "
                >
                    See More
                </button>
                <div class="">
                    <div
                        class="flex space-x-3 py-2"
                        v-for="(feature, index) in features"
                        :key="index"
                    >
                        <div
                            class="
                                relative
                                rounded-full
                                bg-blue-300
                                h-5
                                w-5
                                flex
                                items-center
                            "
                        >
                            <CheckIcon
                                class="absolute h-7 w-7 text-blue-900"
                            ></CheckIcon>
                        </div>
                        <span class="text-gray-600 tracking-wide">{{
                                feature.featuresName
                            }}</span>
                    </div>
                </div>
            </div>
            <div
                class="
                    absolute
                    top-0
                    right-0
                    transform
                    -translate-x-2.5
                    translate-y-4
                "
            >
                <div
                    class="
                        flex flex-col
                        space-y-3.5
                        bg-gray-200
                        rounded-2xl
                        px-2
                        py-3
                        justify-center
                        items-center
                    "
                >
                    <button
                        class="text-dashboard-royal-blue"
                        @click="showMonthly = !showMonthly"
                        @mouseover="changePlanSwitch = true"
                        @mouseleave="changePlanSwitch = false"
                    >
                        <div class="relative">
                            <RefreshIcon class="h-4 w-4" />
                            <div
                                v-if="changePlanSwitch"
                                class="
                                    absolute
                                    -right-5
                                    top-0
                                    transform
                                    duration-700
                                    -translate-x-12 -translate-y-2.5
                                "
                            >
                                <div
                                    class="
                                        bg-gray-200
                                        px-2.5
                                        py-1.5
                                        rounded-lg
                                        text-xs
                                    "
                                >
                                    {{ showMonthly ? 'Yearly' : 'Monthly' }}
                                </div>
                            </div>
                        </div>
                    </button>
                    <button
                        class="text-dashboard-royal-blue"
                        @click="editPlan"
                        @mouseover="editSwitch = true"
                        @mouseleave="editSwitch = false"
                    >
                        <div class="relative">
                            <PencilAltIcon class="h-4 w-4" />
                            <div
                                v-if="editSwitch"
                                class="
                                    absolute
                                    -right-5
                                    top-0
                                    transform
                                    duration-700
                                    -translate-x-12 -translate-y-2.5
                                "
                            >
                                <div
                                    class="
                                        bg-gray-200
                                        px-2.5
                                        py-1.5
                                        rounded-lg
                                        text-xs
                                    "
                                >
                                    Edit
                                </div>
                            </div>
                        </div>
                    </button>
                    <button
                        class="text-dashboard-royal-blue"
                        @click="trashPlan"
                        @mouseover="deleteSwitch = true"
                        @mouseleave="deleteSwitch = false"
                    >
                        <div class="relative">
                            <TrashIcon class="h-4 w-4" />
                            <div
                                v-if="deleteSwitch"
                                class="
                                    absolute
                                    -right-5
                                    top-0
                                    transform
                                    duration-700
                                    -translate-x-12 -translate-y-2.5
                                "
                            >
                                <div
                                    class="
                                        bg-gray-200
                                        px-2.5
                                        py-1.5
                                        rounded-lg
                                        text-xs
                                    "
                                >
                                    Delete
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div
                v-show="!showMonthly"
                class="
                    absolute
                    top-0
                    left-0
                    transform
                    translate-x-2.5 translate-y-4
                "
            >
                <div
                    class="
                        flex
                        space-y-3.5
                        bg-gray-200
                        rounded-2xl
                        px-3
                        py-2.5
                        justify-center
                        items-center
                        text-xs text-dashboard-royal-blue
                        font-nunito font-bold
                    "
                >
                    {{ discount }}% off
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { CheckIcon, TrashIcon } from '@heroicons/vue/solid'
import { RefreshIcon, PencilAltIcon } from '@heroicons/vue/outline'
export default {
    props: ['id', 'name', 'monthly', 'yearly', 'discount', 'features'],
    setup() {
        return {}
    },
    components: { CheckIcon, RefreshIcon, TrashIcon, PencilAltIcon },
    data() {
        return {
            showMonthly: true,
            changePlanSwitch: false,
            editSwitch: false,
            deleteSwitch: false,
        }
    },
    methods: {
        editPlan() {
            this.$emit('editItem')
        },
        trashPlan() {
            this.$emit('trashItem')
        },
    },
}
</script>

<style lang="scss" scoped></style>
