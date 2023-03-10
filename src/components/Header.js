import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/product-action';

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log('redux', result.length);

  return (
    <div
      style={{
        backgroundColor: 'orange',
        height: '7rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link to="./">
        <h1 style={{ marginLeft: '15px' }}>E-Comm</h1>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search Product"
          style={{ width: '500px', height: '40px' }}
          onChange={(e) => dispatch(productSearch(e.target.value))}
        />
      </div>

      <Link to="/cart">
        <div style={{ marginRight: '10px' }}>
          <div
            style={{
              backgroundColor: 'green',
              borderRadius: '10px',
              color: 'white',
              marginLeft: '10px',
              marginRight: '10px',
            }}
          >
            {result.length}
          </div>
          <img
            style={{ width: '30px' }}
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Test"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
