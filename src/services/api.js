import axios from 'axios';
import store from './../store';
import * as Actions from './../store/modules/loading/actions';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
    (request) => {
        // TODO
        store.dispatch(Actions.loadingRequest());
        return request;
    },
    (error) => {
        // TODO
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // TODO
        store.dispatch(Actions.loadingSuccess());
        return response;
    },
    (error) => {
        // TODO
        return Promise.reject(error);
    }
);

export default api;
