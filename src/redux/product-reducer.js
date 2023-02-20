import { PRODUCT_LIST } from './constant';

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log('Product List', action);
      return [action.data];

    default:
      return data;
  }
};
