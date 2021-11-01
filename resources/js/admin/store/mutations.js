export const SET_ACTIVE_USER = (state, data) => {
    state.activeUser = data;
}

export const SET_CATEGORIES = (state, data) => {
    state.categories = data;
}

export const ADD_CATEGORY = (state, category) => {
    let alreadyHave = state.categories.find(item => item.name === category.name);
    if(!alreadyHave){
        let author = state.activeUser.username
        state.categories.unshift({
            'name' : category.name,
            'slag' : category.name,
            'status': category.status,
            'author': author,
        });
    }else{
        Toast.this({
            icon: "Error",
            title: "Category is already there!"
        });
    }
}

export const UPDATE_CATEGORY = (state, data) => {
    let author = state.activeUser.username
    let itemInCategories = state.categories.find(item => {
        return item.id === data.id;
    });

    if (itemInCategories) {
        itemInCategories.name = data.name;
        itemInCategories.slag = data.name;
        itemInCategories.status = data.status;
        itemInCategories.author = author;
    }
}

export const DELETE_CATEGORY = (state, id) => {
    state.categories = state.categories.filter(item => {
        return item.id !== id;
    })
}

export const ADD_PRODUCT_TO_CART = (state, data) => {
    let productInCart = state.cart.find(item => {
        return item.product.id === data.product.id;
    });

    if (productInCart) {
        productInCart.quantity += data.quantity;
        productInCart.price = (productInCart.quantity * productInCart.product.sell).toFixed(2);
        return;
    }

    state.cart.unshift({
        product: data.product,
        quantity: data.quantity,
        price: data.product.sell
    })
}

export const INCREMENT_ITEM = (state, data) => {
    let productInCart = state.cart.find(item => {
        return item.product.id === data.product.id;
    });

    if(productInCart) {
        productInCart.quantity += 1;
        productInCart.price = (productInCart.quantity * productInCart.product.sell).toFixed(2);
        return;
    }
}

export const DECREMENT_ITEM = (state, data) => {
    let productInCart = state.cart.find(item => {
        return item.product.id === data.product.id;
    });

    if(productInCart) {
        if(productInCart.quantity > 1) {
            productInCart.quantity -= 1;
            productInCart.price = (productInCart.quantity * productInCart.product.sell).toFixed(2);
            return;
        }
    }
}

export const REMOVE_ITEM_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id
    })
}

export const CLEAR_CART = (state) => {
    state.cart = [];
}
