import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load cart items from localStorage on page load
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Handle the removal of an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Handle changing the quantity of a product
  const changeQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  // Calculate the total price of the items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {loading && <p>Loading cart...</p>}
      {error && <p>Error: {error}</p>}

      {/* Display cart items */}
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "15px", borderBottom: "1px solid #ddd" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                  <img src={item.image?.url || "https://via.placeholder.com/100"} alt={item.title} style={{ width: "100px", height: "auto", borderRadius: "5px" }} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Price: ${item.discountedPrice.toFixed(2)}</p>
                    <p>Quantity: 
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => changeQuantity(item.id, Number(e.target.value))}
                        min="1"
                        style={{ width: "50px", textAlign: "center", marginLeft: "10px" }}
                      />
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    backgroundColor: "#ff0000",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
            <div style={{ marginTop: "20px", textAlign: "right" }}>
              <h2>Total: ${calculateTotal()}</h2>
              <Link to="/checkout">
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#00A0A0",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
