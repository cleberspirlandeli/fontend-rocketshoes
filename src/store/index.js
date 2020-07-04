import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const config =
    process.env.NODE_ENV === 'development'
        ? compose(
              applyMiddleware(sagaMiddleware),
              window.__REDUX_DEVTOOLS_EXTENSION__ &&
                  window.__REDUX_DEVTOOLS_EXTENSION__()
          )
        : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, config);
sagaMiddleware.run(rootSaga);

export default store;
