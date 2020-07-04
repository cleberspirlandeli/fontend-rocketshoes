import * as types from './actionTypes';

export function addToCartRequest(id) {
    return {
        type: types.ADD_TO_CART_REQUEST,
        id,
    };
}

export function addToCartSuccess(product) {
    return {
        type: types.ADD_TO_CART_SUCCESS,
        product,
    };
}

export function removeTocart(product) {
    return {
        type: types.REMOVE_TO_CART,
        id: product.id,
    };
}

export function updateAmountRequest(id, amount) {
    return {
        type: types.UPDATE_AMOUNT_TO_CART_REQUEST,
        id,
        amount,
    };
}

export function updateAmountSuccess(id, amount) {
    return {
        type: types.UPDATE_AMOUNT_TO_CART_SUCCESS,
        id,
        amount,
    };
}
