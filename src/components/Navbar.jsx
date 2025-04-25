import React from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
    setTimeout(() => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <div>
        <h2 className="text-white mb-0">The Liquor Vault</h2>
        <small className="text-light">Unlock the Vault, Create Great Memories!</small>
      </div>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={handleGoHome}>Home</button>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/liquors">Liquors</Link>
             </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkout">Checkout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
