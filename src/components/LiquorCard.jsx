import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Optional: use a shopping cart icon

function LiquorCard({ liquor, handleAddToCart }) {
  return (
    <div className="card h-100 shadow-sm bg-light rounded-4 w-100">
      <img 
        src={liquor.image_url} 
        className="card-img-top" 
        alt={liquor.name} 
        style={{ height: "250px", objectFit: "cover" }} 
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{liquor.name}</h5>
        <p className="card-text"><strong>Brand:</strong> {liquor.brand}</p>
        <p className="card-text"><strong>Type:</strong> {liquor.type}</p>
        <p className="card-text"><strong>Volume:</strong> {liquor.volume_ml}ml</p>
        <p className="card-text"><strong>Price:</strong> KSh {liquor.price}</p>
        <p className="card-text"><strong>Availability:</strong> {liquor.availability ? "In Stock" : "Out of Stock"}</p>
        <button 
          className="btn btn-sm btn-warning mt-auto"
          onClick={() => handleAddToCart(liquor)}
          disabled={!liquor.availability}
        >
          <FaShoppingCart className="me-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default LiquorCard;
