export const catItemCount = (state) => {
    return state.cart.length;
}

export const cartTotalPrice = (state) => {
    let total = 0;

    state.cart.forEach(item => {
        total += Number.parseFloat(item.price);
    })

    return total;
}

export const getTax = (state) => {
    return state.activeUser.shop[0].tax
}

export const getShopDetails = (state) => {
    return state.activeUser.shop[0]
}
