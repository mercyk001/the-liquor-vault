
import { Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';  
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="container vh-100">
      {/* Header is rendered on all pages */}
      <Header />
      <Routes>
        {/* Define the route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      
      {/* Shopping Cart icon */}
      <NavLink to="/cart" className="floating-cart">
        🛒
      </NavLink>
    </div>
  );
}

export default App;
