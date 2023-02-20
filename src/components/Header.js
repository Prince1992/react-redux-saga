import { useSelector } from 'react-redux';

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log('redux', result.length);
  return (
    <div
      style={{
        backgroundColor: 'orange',
        height: '7rem',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
      }}
    >
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
    </div>
  );
};

export default Header;
