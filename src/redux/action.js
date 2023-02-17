export const addToCard = (data) => {
  console.warn('action called', data);
  return {
    type: 'Add_TO_Cart',
    data: data,
  };
};
