import { createStore } from 'vuex'

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

// Create a new store instance.
const store = createStore({
    state,
    actions,
    mutations,
    getters
})

export default store
