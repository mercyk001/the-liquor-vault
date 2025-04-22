import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function LandingPage() {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail(''); // Reset email input after submission
  };

  return (
    <div className="landing-page text-center vh-100 d-flex flex-column justify-content-center">
      <h1 className="display-4">Welcome to The Liquor Vault</h1>
      <p className="lead">Unlock the good times with our premium selection of liquors!</p>

      {/* Form for email subscription or just interaction */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email" 
            value={email} 
            onChange={handleInputChange} 
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Subscribe</button>
      </form>

      {/* Button to proceed to shopping page */}
      <NavLink to="/products" className="btn btn-outline-light btn-lg mt-4">
        Start Shopping
      </NavLink>
    </div>
  );
}

export default LandingPage;
