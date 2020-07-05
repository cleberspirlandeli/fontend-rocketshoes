import * as types from './actionTypes';
import produce from 'immer';

export default function loading(state = false, action) {
    switch (action.type) {
        case types.LOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
            };

        case types.LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}
