import React from "react";
import { useNavigate } from "react-router-dom";

function CartIcon({ itemCount }) {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-warning position-fixed bottom-0 end-0 m-4 rounded-circle d-flex align-items-center justify-content-center"
      onClick={() => navigate("/cart")}
      style={{ position: "relative" }}
    >
      <span>🛒</span>
      {/* Badge to show the number of items */}
      {itemCount > 0 && (
        <span
          className="badge bg-danger position-absolute top-0 start-100 translate-middle"
          style={{ fontSize: "14px", padding: "5px" }}
        >
          {itemCount}
        </span>
      )}
    </button>
  );
}

export default CartIcon;
