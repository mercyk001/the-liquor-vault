import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then(res => res.json())
      .then(data => setCartItems(data));
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="text-center">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart. Please add some products.</p>
      ) : (
        <>
          <ul className="list-unstyled">
            {cartItems.map(item => (
              <li key={item.id}>{item.name} — Ksh {item.price}</li>
            ))}
          </ul>
          <h4>Total: Ksh {totalPrice.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
}

export default Cart;