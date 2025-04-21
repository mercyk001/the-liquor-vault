import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  // Define the routes as an array of objects
  const routesData = [
    {
      path: "/cart",
      element: <div className="text-center p-5">
        🛒 This is the Shopping Cart page.
        </div>
    },
    {
      path: "/checkout",
      element: <div className="text-center p-5">
        💳 This is the Checkout page.
        </div>
    },
    {
      path: "/contact",
      element: <div className="text-center p-5">
        📞 Contact us at: 0700 000 000
        </div>
    }
  ];

  return (
    <Router>
      <div className="container app-background bg-primary-subtle text-dark vh-100">
        <h1 className='display-4 text-center fw-bold'>THE LIQUOR VAULT</h1>
        <h2 className="lead text-center fw-bold">-Unlock your Memories-</h2>
        <p className='text-center'>Browse our fine selection of drinks and order your favorites!</p>
        
        <div className="nav-links">
          <Link to="/cart" className="nav-link text-dark fw-bold">🛒 Shopping Cart</Link>
          <Link to="/checkout" className="nav-link text-dark fw-bold">💳 Checkout</Link>
          <Link to="/contact" className="nav-link text-dark fw-bold">📞 Contact Us</Link>
        </div>
        
        <Routes>
          {routesData.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;