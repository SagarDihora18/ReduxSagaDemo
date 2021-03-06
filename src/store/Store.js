import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/Sagas';
import rootReducers from '../reducers/Reducers';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}