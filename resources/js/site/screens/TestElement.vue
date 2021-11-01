<template>
    <div class="" id="stripe-element-mount-point" />
</template>

<script>
import { ref, onMounted} from 'vue'
let stripe = Stripe('pk_test_51HOPT1EAelaEtGNycSiPyOb4Oa19Kqdq3Mv7QhSq92uTpARrp1JlEzVvlllQNcxzLWzQwsUGYakuyIgDe5unJEeK00u6uVMruJ'),
    elements = stripe.elements(),
    card = undefined;
export default {
    emits: ['showsidebar'],
    setup({emit}){
        // let stripe = ref(null)
        // let loading = ref(true)
        // let elements = ref(null)
        //
        // onMounted(async () => {
        //     const ELEMENT_TYPE = "card";
        //
        //     stripe = Stripe('pk_test_51HOPT1EAelaEtGNycSiPyOb4Oa19Kqdq3Mv7QhSq92uTpARrp1JlEzVvlllQNcxzLWzQwsUGYakuyIgDe5unJEeK00u6uVMruJ')
        //     elements = stripe.elements()
        //     const element = elements.create(ELEMENT_TYPE)
        //     element.mount("#stripe-element-mount-point")
        //     element.on('token', function(event){
        //         console.log(event)
        //     })
        //     loading.value = false
        // })

        return{

        }
    },
    data(){
        return{
            stripeOptions: {
                // see https://stripe.com/docs/stripe.js#element-options for details
                style: {
                    base: {
                        color: '#32325d',
                        lineHeight: '18px',
                        fontFamily: '"Raleway", Helvetica, sans-serif',
                        fontSmoothing: 'antialiased',
                        fontSize: '16px',
                        '::placeholder': {
                            color: '#aab7c4'
                        }
                    },
                    invalid: {
                        color: '#fa755a',
                        iconColor: '#fa755a'
                    }
                },
                hidePostalCode: true
            }
        }
    },
    methods:{
        something(){
            let data = null
            stripe.createToken(card).then(function(result) {
                data = result.token.id
            })
            this.$emit('stripeTokenFromChild', data)
        }
    },
    mounted: function () {
        card = elements.create('card');
        card.mount("#stripe-element-mount-point");
    },
}
</script>

<style scoped>

</style>
