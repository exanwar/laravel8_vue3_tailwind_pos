import axios from 'axios'

export const getCurrentUser = ({commit}) => {
    axios.get('/api/user')
        .then( ({data}) => {
            commit('SET_ACTIVE_USER', data);
        })
}


export const getCategories = ({commit}) => {
    axios.get("/api/category").then(({ data }) => {
        commit('SET_CATEGORIES', data);
    });
}

export const addCategory = ({commit}, category) => {
    axios.post("/api/category", category)
        .then(() => {
            commit('ADD_CATEGORY', category);
        })
}

export const updateCategory = ({commit}, data) => {
    axios.put("/api/category/" + data.id, data)
        .then(() => {
            commit('UPDATE_CATEGORY', data);
        })
}

export const deleteCategory = ({commit} , id) => {
    axios.delete("/api/category/" + id)
        .then(() => {
            commit('DELETE_CATEGORY', id);
        })
}

export const addToCart = ({commit}, {product,quantity}) => {
    let data = {
        product: product,
        quantity: quantity,
        price: (product.price*quantity).toFixed(2)
    }
    commit('ADD_PRODUCT_TO_CART', data);
}

export const addItem = ({commit}, product) => {
    let data = {
        product: product,
        quantity: 1,
    }
    commit('INCREMENT_ITEM', data);
}
export const removeItem = ({commit}, product) => {
    let data = {
        product: product,
        quantity: 1,
    }
    commit('DECREMENT_ITEM', data);
}

export const deleteProductFromCart = ({commit}, product) => {
    commit('REMOVE_ITEM_FROM_CART', product);
}

export const clearCart = ({commit}) => {
    commit('CLEAR_CART');
}
