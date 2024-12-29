import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items from localStorage on page load
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const changeQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.discountedPrice * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderData = {
      customerName,
      address,
      creditCard,
      cartItems,
      totalAmount: calculateTotal(),
    };


    setTimeout(() => {
      alert("Order placed successfully!");
      setIsSubmitting(false);
      localStorage.removeItem("cart");
      setCartItems([]);
      navigate("/checkout-success", { state: { orderData } });
    }, 2000);
  };

  const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: "#00A0A0",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                borderBottom: "1px solid #ddd",
                marginBottom: "10px",
              }}
            >
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <img
                  src={item.image?.url || "https://via.placeholder.com/100"}
                  alt={item.title}
                  style={{ width: "100px", height: "auto", borderRadius: "5px" }}
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.discountedPrice.toFixed(2)}</p>
                  <p>
                    Quantity:{" "}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        changeQuantity(item.id, Number(e.target.value))
                      }
                      min="1"
                      style={{
                        width: "50px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    />
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                style={{ ...buttonStyles, backgroundColor: "#FF5733" }}
              >
                Remove
              </button>
            </div>
          ))}
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <h2>Total: ${calculateTotal()}</h2>
          </div>
        </div>
      )}

      {cartItems.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>Billing Information</h3>
          <form onSubmit={handleCheckout}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="customerName">Name</label>
              <input
                type="text"
                id="customerName"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                style={{
                  padding: "10px",
                  width: "100%",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                style={{
                  padding: "10px",
                  width: "100%",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="creditCard">Credit Card Number</label>
              <input
                type="text"
                id="creditCard"
                placeholder="Credit Card Number"
                value={creditCard}
                onChange={(e) => setCreditCard(e.target.value)}
                required
                style={{
                  padding: "10px",
                  width: "100%",
                  marginTop: "5px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <button type="submit" style={buttonStyles} disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Complete Purchase"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartPage;


