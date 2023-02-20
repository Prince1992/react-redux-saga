import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import productSaga from './product-saga';
import rootReducer from './rootReducer';
//import { createStore } from 'redux';
//const store = createStore(rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
export default store;
