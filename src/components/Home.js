import { addToCard, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
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
    </div>
  );
}

export default Main;
