import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import store from './store';
import Header from './components/Header';
import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={5500} limit={2} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
