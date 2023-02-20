import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from './constant';

export const addToCard = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
