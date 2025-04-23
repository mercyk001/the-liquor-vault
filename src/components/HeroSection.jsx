


import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
//import './HeroSection.css'; // Optional for extra styles

function HeroSection() {
  return (
    <div 
      className="hero-section d-flex justify-content-center align-items-center text-center text-light"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/17681855/pexels-photo-17681855/free-photo-of-assortment-of-liquors-displayed-on-shelves-in-a-bar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover", 
        backgroundPosition: "center center", 
        height: "100vh", 
        backgroundRepeat: "no-repeat",
        position: "relative" // Needed for the overlay to position correctly
      }}
    >
      {/* Dark overlay */}
      <div className="overlay"></div>

      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Premium Liquors at Your Doorstep</h1>
        <p className="lead mb-4">Explore the finest selection of wines, spirits, and liquors delivered directly to you.</p>
        {/* Use Link from React Router to navigate to LiquorList */}
        <Link to="/liquors" className="btn btn-primary btn-lg shadow-lg">Shop Now</Link>
      </div>
    </div>
  );
}

export default HeroSection;
