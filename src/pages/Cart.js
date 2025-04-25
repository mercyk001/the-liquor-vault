import React from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

 
  const totalPrice = cart.reduce((sum, item) => sum + item.price_ksh, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Volume (ml)</th>
                <th>Price (KSh)</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img 
                      src={item.image_url} 
                      alt={item.name} 
                      width="60" 
                      height="60" 
                      style={{ objectFit: "cover" }} 
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.type}</td>
                  <td>{item.volume_ml}</td>
                  <td>{item.price_ksh.toLocaleString()}</td>
                  <td>{item.availability ? "In Stock" : "Out of Stock"}</td>
                  <td>
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: <span className="text-warning">KSh {totalPrice.toLocaleString()}</span></h4>
            <Button 
              variant="success" 
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
