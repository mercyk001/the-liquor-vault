import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart }) {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      location: location,
      paymentMethod: paymentMethod,
      cartItems: cart,
      timestamp: new Date().toISOString()
    };

    fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to place order");
        return res.json();
      })
      .then((data) => {
        alert("Order placed successfully!");
        navigate("/");
      })
      .catch((error) => {
        alert("Something went wrong. Please try again.");
        console.error("Order error:", error);
      });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Checkout</h2>
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Delivery Location</label>
          <input
            type="text"
            id="location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Tononoka, Mombasa"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-dark">Payment Method</label>
          <div className="form-check text-dark">
            <input
              type="radio"
              name="paymentMethod"
              value="Mpesa"
              id="mpesa"
              className="form-check-input"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
            <label htmlFor="mpesa" className="form-check-label">Mpesa</label>
          </div>

          <div className="form-check text-dark">
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              id="card"
              className="form-check-input"
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
            <label htmlFor="card" className="form-check-label">Card</label>
          </div>
        </div>

        <button type="submit" className="btn btn-warning w-100">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
