import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-center">
        <NavLink className="navbar-brand" to="/">THE LIQUOR VAULT</NavLink>
        <NavLink className="nav-link" to="/cart">Cart</NavLink>
        <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
}

export default Header;