import Header from './components/Header';
import Main from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ margin: '5px', display: 'flex', justifyContent: 'center' }}>
        <Main />
      </div>
    </div>
  );
}

export default App;
