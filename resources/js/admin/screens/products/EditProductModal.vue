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
        <div class="relative" style="min-width: 30rem; max-width: 70rem">
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
                                Edit Product #{{ name }}
                            </h1>
                        </div>
                        <div class="flex flex-col lg:flex-row">
                            <div class="flex w-full lg:w-80 flex-col space-y-4 px-3 py-3">
                                <div class="px-3 py-5 rounded-lg flex flex-1 flex-col">
                                    <div class="flex flex-col justify-center items-center">
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
                                                <input type="file" accept=".jpeg, .png, .jpg" class="absolute h-40 w-40" style="opacity: 0;" @change="uploadProductPhoto">
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
                                                Brand :
                                            </h1>
                                            <VueMultiselect
                                                v-model="selectedBrand"
                                                :options= "brands"
                                                :multiple="false"
                                                :close-on-select="true"
                                                :clear-on-select="false"
                                                :preserve-search="true"
                                                placeholder="Pick a brand"
                                                label="name"
                                                track-by="id"
                                                :preselect-first="false"
                                                :searchable="true"
                                                :loading="isSearchingBrand"
                                                :internal-search="false"
                                                :show-no-results="true"
                                                :hide-selected="false"
                                                @search-change="fetchBrand"
                                            >
                                                <template  v-slot:option="{ option }">
                                                    <div class="flex items-center">
                                                        <div class="h-12 w-12">
                                                            <img class="h-full w-full rounded-full" :src="option.brand_logo" :alt="option.name" />
                                                        </div>
                                                        <div class="flex flex-col justify-start ml-4">
                                                            <h2 class="font-semibold text-sm">{{ option.name }}</h2>
                                                        </div>
                                                    </div>
                                                </template>
                                            </VueMultiselect>
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
                                                Category :
                                            </h1>
                                            <VueMultiselect
                                                v-model="selectedCategory"
                                                :options= "categories"
                                                :multiple="false"
                                                :close-on-select="true"
                                                :clear-on-select="false"
                                                :preserve-search="true"
                                                placeholder="Pick a Category"
                                                label="name"
                                                track-by="id"
                                                :preselect-first="false"
                                                :searchable="true"
                                                :loading="isSearchingCategory"
                                                :internal-search="false"
                                                :show-no-results="true"
                                                :hide-selected="false"
                                                @search-change="fetchCategory"
                                            >
                                                <template slot="selection" slot-scope="{ values, search, isOpen }">
                                    <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                                        {{ values.length }} options selected
                                    </span>
                                                </template>
                                            </VueMultiselect>
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
                                                Unit :
                                            </h1>
                                            <VueMultiselect
                                                v-model="selectedUnit"
                                                :options= "units"
                                                :multiple="false"
                                                :close-on-select="true"
                                                :clear-on-select="false"
                                                :preserve-search="true"
                                                placeholder="Pick a Unit"
                                                label="name"
                                                track-by="id"
                                                :preselect-first="false"
                                                :searchable="true"
                                                :loading="isSearchingUnit"
                                                :internal-search="false"
                                                :show-no-results="true"
                                                :hide-selected="false"
                                                @search-change="fetchUnit"
                                            >
                                                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                                            </VueMultiselect>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex w-full lg:flex-1 w-ful flex-col space-y-4 px-3 py-3">
                                <div
                                    class="
                                px-3
                                lg:py-5
                                rounded-lg
                                flex flex-1 flex-col
                            "
                                >
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1 class="ml-2 text-gray-700 font-nunito text-lg">
                                                New Product Information
                                            </h1>
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
                                                Product Name :
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
                                                v-model="name"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Barcode :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Barcode"
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
                                                v-model="barcode"
                                            />
                                        </div>
                                        <div class="mt-4 flex flex-col space-y-1">
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                SKU :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="SKU"
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
                                                v-model="sku"
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
                                                Product Description :
                                            </h1>
                                            <div
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
                                            >
                                                <ckeditor
                                                    :editor="editor"
                                                    @ready="onReady"
                                                    v-model="description"
                                                    :config="editorConfig"
                                                ></ckeditor>
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
                                        v-show="$can('edit_products')"
                                        @click="submit"
                                    >
                                        Update
                                    </button>
                                </div>
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
import { useVueSweetAlert2 } from "../../useVueSweetAlert2";
import { useToast } from 'vue-toastification'
import {ref, inject, onMounted} from "vue";
import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document'
export default {
    props:['product'],
    components:{ VueMultiselect },
    setup(props) {
        const toast = useToast()
        const $swal = useVueSweetAlert2();
        const InjectDirectly = inject("$swal");

        function getProduct(){
            axios.get('/api/user/products/' + props.product)
            .then(({data}) => {
                let productData = data.data[0]
                image.value = productData.product_image
                selectedCategory.value = productData.category
                selectedBrand.value = productData.brand
                selectedUnit.value = productData.unit
                name.value = productData.name
                barcode.value = productData.barcode
                sku.value = productData.sku
                description.value = productData.details
            })
            .catch(e => console.log(e.reponse))
        }

        const image = ref(null)
        function uploadProductPhoto(e){
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

        const categories = ref([])
        const isSearchingCategory = ref(false)
        function fetchCategory(query){
            isSearchingCategory.value = true
            axios.get('/api/user/fetch-category?q=' + query)
                .then(({data}) => {
                    categories.value = data.data
                    isSearchingCategory.value = false
                })
        }
        const selectedCategory = ref([])

        const brands = ref([])
        const isSearchingBrand = ref(false)
        function fetchBrand(query){
            isSearchingBrand.value = true
            axios.get('/api/user/fetch-brand?q=' + query)
                .then(({data}) => {
                    brands.value = data.data
                    isSearchingBrand.value = false
                })
        }
        const selectedBrand = ref([])

        const units = ref([])
        const isSearchingUnit = ref(false)
        function fetchUnit(query){
            isSearchingUnit.value = true
            axios.get('/api/user/fetch-unit?q=' + query)
                .then(({data}) => {
                    units.value = data.data
                    isSearchingUnit.value = false
                })
        }
        const selectedUnit = ref([])

        const name = ref(null)
        const barcode = ref(null)
        const sku = ref(null)
        const description = ref(null)

        function successToast(message) {
            this.toast.success(message, {
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
            getProduct()
        })

        return {
            toast,
            categories,
            isSearchingCategory,
            fetchCategory,
            selectedCategory,
            brands,
            isSearchingBrand,
            fetchBrand,
            selectedBrand,
            units,
            isSearchingUnit,
            fetchUnit,
            selectedUnit,
            uploadProductPhoto,
            image,
            name,
            barcode,
            sku,
            description,
            InjectDirectly,
            successToast
        }
    },
    data() {
        return {
            editor: DocumentEditor,
            editorConfig: {
                ckfinder: {
                    uploadUrl: 'http://www.mypage.com/api/uploadckeditor',
                },
                toolbar: {
                    items: [
                        'heading',
                        '|',
                        'fontSize',
                        'fontFamily',
                        'fontColor',
                        'fontBackgroundColor',
                        'imageInsert',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        'strikethrough',
                        'highlight',
                        'removeFormat',
                        '|',
                        'alignment',
                        '|',
                        'numberedList',
                        'bulletedList',
                        '|',
                        'indent',
                        'outdent',
                        '|',
                        'todoList',
                        'link',
                        'blockQuote',
                        'imageUpload',
                        'insertTable',
                        'mediaEmbed',
                        '|',
                        'undo',
                        'redo',
                        'CKFinder',
                    ],
                },
                language: 'cs',
                image: {
                    toolbar: [
                        'imageTextAlternative',
                        'imageStyle:full',
                        'imageStyle:side',
                        'linkImage',
                    ],
                },
                table: {
                    contentToolbar: [
                        'tableColumn',
                        'tableRow',
                        'mergeTableCells',
                    ],
                },
                licenseKey: '',
            },
        }
    },
    watch: {},
    methods: {
        onReady(editor) {
            // Insert the toolbar before the editable area.
            editor.ui
                .getEditableElement()
                .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
            )
        },
        submit(){
            let data = {
                name: this.name,
                sku: this.sku.toUpperCase().replace(/\s/g, ""),
                barcode: this.barcode.toUpperCase().replace(/\s/g, ""),
                details: this.description,
                product_image: this.image,
                category: this.selectedCategory.id,
                unit: this.selectedUnit.id,
                brand: this.selectedBrand.id,
            }

            axios.put('/api/user/products/' + this.product, data)
                .then(response => {
                    this.handleClose();
                    this.handleReload();
                    this.successToast('Product has been updated successfully!')
                })
                .catch(error => {
                    console.log(error.response)
                    this.InjectDirectly.fire({
                        icon: "error",
                        title: "Oops..",
                        text: 'Fill all fields first',
                        footer: ""
                    });
                })
        },
        handleClose() {
            this.$emit('close')
        },
        handleReload() {
            this.$emit('reloadProducts')
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

.ck-content{
    border: 1px solid rgba(100, 181, 246, 0.6)
}
</style>


