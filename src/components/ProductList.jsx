
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/liquors")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
    //.then(() => navigate("/cart"));
  };

  return (
    <div className="row justify-content-center">
      {products.map(product => (
        <div className="card m-3 p-3 text-center" key={product.id} style={{ width: "18rem" }}>
          <img src={product.image_url} alt={product.name} className="mb-3 product-image" />
          <h5>{product.name}</h5>
          <p>Type: {product.type}</p>
          <p>Brand: {product.brand}</p>
          <p>Volume: {product.volume_ml} ml</p>
          <p>Price: Ksh {product.price}</p>
          <p>Availability: {product.availability}</p>
          <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}


export default ProductList;