/* eslint-disable react-hooks/exhaustive-deps */
import { addToCard, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/product-action';
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  const handleAddTocard = (item) => {
    dispatch(addToCard(item));
  };
  const removeFromCard = (id) => {
    dispatch(removeFromCart(id));
  };
  const emptyCartHandler = () => {
    dispatch(emptyCart());
  };

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <button
        style={{ margin: '5px 5px 5px 5px' }}
        onClick={() => emptyCartHandler()}
      >
        Empty Cart
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              width: '20%',
              height: '60%',
              border: '1px solid',
              margin: '5px 5px 5px 5px',
            }}
          >
            <img
              src={item.imgUrl}
              alt="Test"
              style={{ width: '30%', marginLeft: '15px' }}
            />
            <li style={{ marginLeft: '15px', listStyle: 'none' }}>
              {item.name}
            </li>
            <li style={{ marginLeft: '15px', listStyle: 'none' }}>
              {item.color}
            </li>
            <li style={{ marginLeft: '15px', listStyle: 'none' }}>
              {item.category}
            </li>
            <li style={{ marginLeft: '15px', listStyle: 'none' }}>
              {item.price}
            </li>
            <button
              style={{ marginLeft: '10px', marginRight: '10px' }}
              onClick={() => handleAddTocard(item)}
            >
              Add to cart
            </button>
            <button
              style={{ marginLeft: '10px', marginRight: '10px' }}
              onClick={() => removeFromCard(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
