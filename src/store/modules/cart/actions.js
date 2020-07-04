import * as types from './actionTypes';

export function addToCart(product) {
    return {
        type: types.ADD_TO_CART,
        product,
    };
}

export function removeTocart(product) {
    return {
        type: types.REMOVE_TO_CART,
        id: product.id,
    };
}

export function updateAmount(id, amount) {
    return {
        type: types.UPDATE_AMOUNT_TO_CART,
        id,
        amount,
    };
}
