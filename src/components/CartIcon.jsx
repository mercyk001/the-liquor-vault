import React from "react";
import { useNavigate } from "react-router-dom";

function CartIcon({ itemCount }) {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-warning position-fixed bottom-0 end-0 m-4 rounded-circle"
      onClick={() => navigate("/cart")}
    >
      🛒 {itemCount}
    </button>
  );
}

export default CartIcon;
