import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Loading from './components/Loading';
import Routes from './routes';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={5500} limit={2} />
            </BrowserRouter>
            <Loading />
        </Provider>
    );
}

export default App;
