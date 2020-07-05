import * as types from './actionTypes';

export function loadingRequest() {
    return {
        type: types.LOADING_REQUEST,
    };
}

export function loadingSuccess() {
    return {
        type: types.LOADING_SUCCESS,
    };
}
