import './App.css';
import { addToCard } from './redux/action';
import { useDispatch } from 'react-redux';

function App() {
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
    <div className="App">
      <button onClick={() => handleAddTocard()}>Add to cart</button>
    </div>
  );
}

export default App;
