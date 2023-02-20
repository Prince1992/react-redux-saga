import { combineReducers } from 'redux';
import { productData } from './product-reducer';
import { cartData } from './reducer';

export default combineReducers({ cartData, productData });
