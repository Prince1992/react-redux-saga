import { addToCard } from '../redux/action';
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
  return (
    <div>
      <button onClick={() => handleAddTocard()}>Add to cart</button>
    </div>
  );
}

export default Main;
