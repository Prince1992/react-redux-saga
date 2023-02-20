import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from './constant';

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('ADD to cart', action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      console.log('Remove  to cart', action);
      data.length = data.length ? data?.length - 1 : [];
      return [...data];
    case EMPTY_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
