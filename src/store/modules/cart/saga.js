import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from './../../../services/api';
import * as types from './actionTypes';
import { addToCartSuccess } from './actions';

export default all([takeLatest(types.ADD_TO_CART_REQUEST, addToCard)]);

export function* addToCard({ id }) {
    const response = yield call(api.get, `/products/${id}`);
    console.log('response.data', response.data);

    yield put(addToCartSuccess(response.data));
}
