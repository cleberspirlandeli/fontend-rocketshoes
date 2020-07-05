import { all, takeLatest, call, select, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from './../../../services/api';
//import history from './../../../services/history';
import * as types from './actionTypes';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from './../../../util/format';

export default all([
    takeLatest(types.ADD_TO_CART_REQUEST, addToCard),
    takeLatest(types.UPDATE_AMOUNT_TO_CART_REQUEST, updateAmount),
]);

export function* addToCard({ id }) {
    const stock = yield call(api.get, `/stock/${id}`);

    const productExists = yield select((state) =>
        state.cart.find((p) => p.id === id)
    );

    const { amount: stockAmount } = stock.data;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque', {
            position: 'top-center',
            toastId: id,
            onClose: (props) => console.log(props),
        });

        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };
        yield put(addToCartSuccess(data));
        //history.push('/cart');
    }
}

export function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        return toast.error('Quantidade solicitada fora de estoque', {
            position: 'top-center',
            toastId: id,
            onClose: (props) => console.log(props),
        });
    }

    yield put(updateAmountSuccess(id, amount));
}
