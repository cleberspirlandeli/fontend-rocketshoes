import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
    (request) => {
        // TODO
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
        return response;
    },
    (error) => {
        // TODO
        return Promise.reject(error);
    }
);

export default api;
