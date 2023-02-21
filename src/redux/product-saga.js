import { put, takeEvery } from 'redux-saga/effects';
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProductList() {
  let data = yield fetch('http://localhost:3500/product');
  data = yield data.json();
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}
function* searchProduct(query) {
  let data = yield fetch(`http://localhost:3500/product?q=${query.query}`);
  data = yield data.json();
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProductList);
  yield takeEvery(SEARCH_PRODUCT, searchProduct);
}
export default productSaga;
