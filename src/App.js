import './App.css';
import Footer from './Comonents/Footer/Footer.jsx';
import Header from './Comonents/Header/Header';
import Navbar from './Comonents/Navbar/Navbar';

function App() {

  const menus = ["Home", "About", "Services", "Contact us"];

  return (
    <div className="App">
      <Header projectName="Voucher Management System" />
      <Navbar menus={menus} />
      <Footer companyName="plutos One" />
    </div>
  );
}

export default App;