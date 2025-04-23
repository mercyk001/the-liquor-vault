

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import LiquorList from './components/LiquorList'; // Import your LiquorList page
import HeroSection from './components/HeroSection'; // Import HeroSection if not already done
import Cart from './pages/Cart'; // Import Cart page if you have one
import Navbar from './components/Navbar';



function App() {

  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar /> {/* If you have a Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liquors" element={<LiquorList cart={cart} setCart={setCart}  />} /> {/* Define the route for the LiquorList page */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> {/* Define the route for the Cart page */}
      
      </Routes>
    </Router>
  );
}

export default App;
