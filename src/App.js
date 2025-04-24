import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import LiquorList from './components/LiquorList'; // Import your LiquorList page
import Cart from './pages/Cart'; // Import Cart page if you have one
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs'; // Import ContactUs page if you have one
import CartIcon from './components/CartIcon'; // Import CartIcon component
import Checkout from './pages/Checkout'; // Import Checkout page if you have one





function App() {
  const [cart, setCart] = useState([]);

  const appStyle = {
    backgroundImage: `url("https://images.pexels.com/photos/17681855/pexels-photo-17681855/free-photo-of-assortment-of-liquors-displayed-on-shelves-in-a-bar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backgroundBlendMode: "darken",
    color: "white"
  };

  return (
    <Router>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/liquors"
            element={<LiquorList cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>

       
        <CartIcon itemCount={cart.length} />
      </div>
    </Router>
  );
}

export default App;
