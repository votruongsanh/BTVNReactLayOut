import logo from './logo.svg';
import './App.css';
import Header from './Component/BaiTapthucHanhLayout/BT3Header';
import BT3Header from './Component/BaiTapthucHanhLayout/BT3Header';
import BT3Content from './Component/BaiTapthucHanhLayout/BT3Content';
import Footer from './Component/BaiTapthucHanhLayout/Footer';

function App() {
  return (
    <div className="App">
      <BT3Header />
      <BT3Content />
      <Footer />
    </div>
  );
}

export default App;
