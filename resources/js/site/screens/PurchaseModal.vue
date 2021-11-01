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
        <div class="relative" style="min-width: 30rem; max-width: 38rem">
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
                                    font-nunito
                                    tracking-wide
                                    text-3xl
                                "
                            >
                                Signup
                            </h1>
                        </div>
                        <div class="part-one" :class="!part_one_completed ? 'block' : 'hidden'">
                            <form id="payment-form">
                                <div
                                    class="flex flex-1 flex-col space-y-4 px-3 py-3"
                                >
                                    <div
                                        class="
                                    px-3
                                    py-5
                                    rounded-lg
                                    flex flex-1 flex-col
                                "
                                    >
                                        <div class="grid grid-cols-1 gap-3">
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
                                                <h1
                                                    class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                                >
                                                    Name on Card :
                                                </h1>
                                                <input
                                                    type="text"
                                                    placeholder="Name on card"
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
                                                    v-model="name_on_card"
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-1 gap-3">
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
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
                                                <input
                                                    type="text"
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
                                                    v-model="
                                                        address_of_cardholder
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="grid grid-cols-1 lg:grid-cols-3 gap-2"
                                        >
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
                                                <h1
                                                    class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                                >
                                                    City :
                                                </h1>
                                                <input
                                                    type="text"
                                                    placeholder="City"
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
                                                    v-model="city_of_cardholder"
                                                />
                                            </div>
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
                                                <h1
                                                    class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                                >
                                                    Country :
                                                </h1>
                                                <input
                                                    type="text"
                                                    placeholder="Country"
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
                                                    v-model="
                                                        country_of_cardholder
                                                    "
                                                />
                                            </div>
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
                                                <h1
                                                    class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                                >
                                                    Postal Code :
                                                </h1>
                                                <input
                                                    type="number"
                                                    placeholder="12345"
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
                                                    v-model="
                                                        postal_code_of_cardholder
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="grid grid-cols-1 lg:grid-cols-2 gap-3"
                                        >
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
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
                                                    placeholder="+880 1000 000 000"
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
                                                    v-model="
                                                        phone_of_cardholder
                                                    "
                                                />
                                            </div>
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
                                                <h1
                                                    class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                                >
                                                    Emergency Contact :
                                                </h1>
                                                <input
                                                    type="text"
                                                    placeholder="+880 1000 000 000"
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
                                                    v-model="
                                                        emergency_contact_of_cardholder
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-1 gap-3">
                                            <div
                                                class="mt-4 flex flex-col space-y-1"
                                            >
                                                <h1
                                                    class="
                                            ml-2
                                            text-gray-700
                                            font-nunito
                                            text-md
                                        "
                                                >
                                                    Country :
                                                </h1>
                                                <div
                                                    class="shadow
                                            border
                                            rounded-lg
                                            py-4
                                            px-5
                                            text-gray-700
                                            leading-tight
                                            focus:outline-none
                                            focus:border-blue-300"
                                                >
                                                    <!--                                                    <TestElement @stripeTokenFromChild="stripeTokenFromChild" />-->
                                                    <div ref="card"></div>
                                                </div>

                                                <!-- CSRF Field -->
                                                <input
                                                    type="hidden"
                                                    name="_token"
                                                    :value="csrf"
                                                />
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
                                            @click="close"
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
                                            @click.prevent="part_one_completed = true"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="part-two" :class="part_one_completed ? 'block' : 'hidden'">
                            <div
                                class="flex flex-1 flex-col space-y-4 px-3 py-3"
                            >
                                <div
                                    class="
                                px-3
                                py-5
                                rounded-lg
                                flex flex-1 flex-col
                            "
                                >
                                    <div
                                        class="flex flex-col justify-center items-center"
                                    >
                                        <div class="relative">
                                            <div class="flex flex-col">
                                                <img
                                                    :src="
                                                        image
                                                            ? image
                                                            : '/assets/images/user/11.png'
                                                    "
                                                    alt="profile-pic"
                                                    class="profile-pic h-40 w-40 img-fluid"
                                                />
                                                <input
                                                    type="hidden"
                                                    :value="
                                                        image
                                                            ? image
                                                            : '/assets/images/user/11.png'
                                                    "
                                                />
                                            </div>
                                            <div
                                                class="absolute right-5 bottom-1"
                                            >
                                                <div
                                                    class="bg-gray-400 border border-gray-100 rounded-full p-1"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="h-5 w-5 text-gray-700"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                                        />
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="absolute left-0 top-0">
                                                <input
                                                    type="file"
                                                    accept=".jpeg, .png, .jpg"
                                                    class="absolute h-40 w-40"
                                                    style="opacity: 0;"
                                                    @change="
                                                        uploadEmployeePhoto
                                                    "
                                                />
                                            </div>
                                        </div>
                                        <div
                                            class="img-extension mt-3 text-gray-400 font-nunito italic"
                                        >
                                            <div
                                                class="d-inline-block align-items-center"
                                            >
                                                <span>Only</span>
                                                <span>.jpg</span>
                                                <span>.png</span>
                                                <span>.jpeg</span>
                                                <span>allowed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 gap-3"
                                    >
                                        <div
                                            class="mt-4 flex flex-col space-y-1"
                                        >
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                First Name :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="First Name"
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
                                                v-model="f_name"
                                            />
                                        </div>
                                        <div
                                            class="mt-4 flex flex-col space-y-1"
                                        >
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Last name :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Last name"
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
                                                v-model="l_name"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 gap-3"
                                    >
                                        <div
                                            class="mt-4 flex flex-col space-y-1"
                                        >
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Username :
                                            </h1>
                                            <input
                                                type="text"
                                                placeholder="Username"
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
                                                v-model="username"
                                            />
                                        </div>
                                        <div
                                            class="mt-4 flex flex-col space-y-1"
                                        >
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
                                                placeholder="Email"
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
                                                v-model="email"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-3">
                                        <div
                                            class="mt-4 flex flex-col space-y-1"
                                        >
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                NID No :
                                            </h1>
                                            <input
                                                type="number"
                                                placeholder="123 123 1234"
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
                                                v-model="nid_no"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="grid grid-cols-1 lg:grid-cols-2 gap-3"
                                    >
                                        <div
                                            class="mt-4 flex flex-col space-y-1"
                                        >
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Password :
                                            </h1>
                                            <input
                                                type="password"
                                                placeholder="Password"
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
                                                v-model="password"
                                            />
                                        </div>
                                        <div
                                            class="mt-4 flex flex-col space-y-1"
                                        >
                                            <h1
                                                class="
                                        ml-2
                                        text-gray-700
                                        font-nunito
                                        text-md
                                    "
                                            >
                                                Confirm Password :
                                            </h1>
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
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
                                                v-model="c_password"
                                            />
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
                                        @click="part_one_completed = false"
                                    >
                                        Previous
                                    </button>
                                    <button
                                        type="submit"
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
                                        @click.prevent="pay"
                                    >
                                        Submit Payment
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
                @click.prevent="close"
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
import { StripeElementCard } from '@vue-stripe/vue-stripe';
import TestElement from './TestElement'
import {onMounted, ref} from "vue";
import axios from 'axios'
let stripe = Stripe('pk_test_51HOPT1EAelaEtGNycSiPyOb4Oa19Kqdq3Mv7QhSq92uTpARrp1JlEzVvlllQNcxzLWzQwsUGYakuyIgDe5unJEeK00u6uVMruJ'),
    elements = stripe.elements(),
    card = undefined;
export default {
    props: ["planItem"],
    components:{ TestElement, StripeElementCard },
    // setup(props){
        // const part_one_completed = ref(false)
        // let stripe = ref(null)
        // let elements = ref(null)
        // let element = ref(null)

        // const appearance  = ref(
        //     {
        //         style: {
        //             base: {
        //                 color: '#32325d',
        //                 lineHeight: '18px',
        //                 fontFamily: '"Raleway", Helvetica, sans-serif',
        //                 fontSmoothing: 'antialiased',
        //                 fontSize: '16px',
        //                 '::placeholder': {
        //                     color: '#aab7c4'
        //                 }
        //             },
        //             invalid: {
        //                 color: '#fa755a',
        //                 iconColor: '#fa755a'
        //             }
        //         },
        //         hidePostalCode: true
        //     }
        // )

        // function submit_reset(){
        //     stripe.createToken(element).then(function(result) {
        //         console.log('_token', this.csrf)
        //         console.log(result.token)
        //     })
        // }

        // onMounted(async () => {
        //     const ELEMENT_TYPE = "card";
        //
        //     stripe = Stripe('pk_test_51HOPT1EAelaEtGNycSiPyOb4Oa19Kqdq3Mv7QhSq92uTpARrp1JlEzVvlllQNcxzLWzQwsUGYakuyIgDe5unJEeK00u6uVMruJ')
        //     elements = stripe.elements()
        //     element = elements.getElement(ELEMENT_TYPE)
        // })

    //     return{
    //         part_one_completed,
    //         stripe,
    //         element,
    //         submit_reset
    //     }
    // },
    data() {
        return {
            part_one_completed : false,
            csrf: document.head.querySelector('meta[name="csrf-token"]')
                .content,
            image: null,
            f_name: null,
            l_name: null,
            username: null,
            email: null,
            nid_no: null,
            password: null,
            c_password: null,
            name_on_card: null,
            address_of_cardholder: null,
            city_of_cardholder: null,
            postal_code_of_cardholder: null,
            country_of_cardholder: null,
            phone_of_cardholder: null,
            emergency_contact_of_cardholder: null
        };
    },
    watch: {},
    methods: {
        uploadEmployeePhoto(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            if (file["size"] < 2111775) {
                reader.onloadend = file => {
                    this.image = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops..",
                    text: "You are uploading a large image",
                    footer: ""
                });
            }
        },
        pay() {
            let data = {
                plan: this.planItem,
                user: {
                    image: this.image,
                    f_name: this.f_name,
                    l_name: this.l_name,
                    username: this.username,
                    email: this.email,
                    nid: this.nid_no,
                    password: this.password,
                    confirm_password: this.c_password
                },
                card: {
                    name: this.name_on_card,
                    address: this.address_of_cardholder,
                    city: this.city_of_cardholder,
                    postal_code: this.postal_code_of_cardholder,
                    country: this.country_of_cardholder,
                    phone: this.phone_of_cardholder,
                    emergency_contact: this.emergency_contact_of_cardholder,
                    _token: this.csrf,
                }
            }


            stripe.createToken(card).then(function(result) {
                axios.post("/api/site/checkout", {
                    data: data,
                    stripeToken: result.token.id
                });

            })
            .then((response) => {
                this.close()
                this.redirectToLogin()

            });
            // console.log(data)
        },
        stripeTokenFromChild(data){
            console.log(data)
        },
        submit() {
            stripe.createToken(card).then(function(result) {
                console.log(result)
            });
        },
        close() {
            this.$emit("close");
        },
        redirectToLogin() {
            this.$emit("goToLogin");
        },

    },
    mounted: function async ()  {
            card = elements.create('card');
            card.mount(this.$refs.card);

    },
};
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
    background: white;
}
.choose_file input[type="file"] {
    -webkit-appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
}
</style>
