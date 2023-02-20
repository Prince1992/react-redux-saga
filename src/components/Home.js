import { addToCard, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/product-action';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data);
  const product = {
    name: 'Nokia',
    type: 'mobile',
    price: 1000,
    color: 'black',
  };
  const handleAddTocard = () => {
    dispatch(addToCard(product));
  };
  const removeFromCard = () => {
    dispatch(removeFromCart(product));
  };
  const emptyCartHandler = () => {
    dispatch(emptyCart());
  };
  return (
    <div>
      <button
        style={{ margin: '5px 5px 5px 5px' }}
        onClick={() => handleAddTocard()}
      >
        Add to cart
      </button>
      <button
        style={{ margin: '5px 5px 5px 5px' }}
        onClick={() => removeFromCard()}
      >
        Remove to cart
      </button>
      <button
        style={{ margin: '5px 5px 5px 5px' }}
        onClick={() => emptyCartHandler()}
      >
        Empty Cart
      </button>
      <button
        style={{ margin: '5px 5px 5px 5px' }}
        onClick={() => dispatch(productList())}
      >
        Product List
      </button>
    </div>
  );
}

export default Main;
