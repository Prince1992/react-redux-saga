import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const amount = cartData
    ?.map((item) => item.price)
    .reduce((pre, next) => pre + next);
  console.log(amount);
  return (
    <div>
      <Link to="/">Product List</Link>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <table
          style={{
            fontFamily: 'arial',
            borderCollapse: 'collapse',
            width: '50%',
          }}
        >
          <tr>
            <th style={{ border: '1px solid black' }}>Name</th>
            <th style={{ border: '1px solid black' }}>Color</th>
            <th style={{ border: '1px solid black' }}>Price</th>
            <th style={{ border: '1px solid black' }}>brand</th>
            <th style={{ border: '1px solid black' }}>Category</th>
          </tr>
          {cartData.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black' }}>{item.name}</td>
              <td style={{ border: '1px solid black' }}>{item.color}</td>
              <td style={{ border: '1px solid black' }}>{item.price}</td>
              <td style={{ border: '1px solid black' }}>{item.brand}</td>
              <td style={{ border: '1px solid black' }}>{item.category}</td>
            </tr>
          ))}
        </table>

        <div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid' }}>
            <span style={{ fontWeight: 'bold' }}>Amount :</span>{' '}
            <span style={{ fontWeight: 'bold' }}>{amount}</span>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid' }}>
            <span style={{ fontWeight: 'bold' }}>Discount :</span>{' '}
            <span style={{ fontWeight: 'bold' }}>{amount / 10}</span>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid' }}>
            <span style={{ fontWeight: 'bold' }}>Total :</span>{' '}
            <span style={{ fontWeight: 'bold' }}>{amount - amount / 10}</span>
          </div>
          <div style={{ marginBottom: '15px', borderBottom: '1px solid' }}>
            <span style={{ fontWeight: 'bold' }}>Tax :</span>{' '}
            <span style={{ fontWeight: 'bold' }}>00000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
