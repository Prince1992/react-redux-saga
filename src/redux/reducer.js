import { ADD_TO_CART, REMOVE_TO_CART } from './constant';

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('ADD to cart', action);
      return 1 + 1;
    case REMOVE_TO_CART:
      console.log('Remove  to cart', action);
      return 1 - 1;
    default:
      return 'No Action Found';
  }
};
