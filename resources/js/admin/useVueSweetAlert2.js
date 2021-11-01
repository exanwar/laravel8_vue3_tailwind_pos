import { inject } from "vue";

export function useVueSweetAlert2() {
    return inject("$swal");
}
