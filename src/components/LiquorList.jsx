
import React, { useEffect, useState } from "react";
import LiquorCard from "../components/LiquorCard";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LiquorList({ cart, setCart }) {
  const [liquors, setLiquors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/liquors")
      .then((res) => res.json())
      .then((data) => setLiquors(data));
  }, []);

    const handleAddToCart = (liquor) => {
  if (Array.isArray(cart)) {
    setCart([...cart, liquor]);
  } else {
    console.error("cart is not an array:", cart);
  }
};




  return (
    <div className="liquor-list position-relative">
      <div className="container my-4">
        <div className="row">
          {liquors.map((liquor) => (
            <div className="col-md-4 mb-4" key={liquor.id}>
              <LiquorCard liquor={liquor} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart Icon */}
      <button
        className="btn btn-dark rounded-circle position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() => navigate("/cart")}
      >
        <FaShoppingCart size={24} color="white" />
      </button>
    </div>
  );
}

export default LiquorList;
