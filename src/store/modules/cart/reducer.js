import * as types from './actionTypes';
import produce from 'immer';

export default function cart(state = [], action) {
    console.log(action);

    switch (action.type) {
        case types.ADD_TO_CART_SUCCESS:
            return produce(state, (draft) => {
                const productIndex = draft.findIndex(
                    (p) => p.id == action.product.id
                );

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                }
            });

        case types.REMOVE_TO_CART:
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id == action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case types.UPDATE_AMOUNT_TO_CART: {
            if (action.amount < 1) {
                return state;
            }

            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id == action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return state;
    }
    return [];
}
