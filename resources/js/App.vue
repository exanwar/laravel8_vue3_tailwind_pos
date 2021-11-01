<template>
    <div class="container bg-gray-900 text-red-900">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        {{ name }}, I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const name = ref("Hello There");
        return {
            name,
        };
    },
};
</script>
