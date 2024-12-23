import React from "react";
import { Link, useLocation } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderData || null;

  if (!orderDetails) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Order not found!</h1>
        <p>Sorry, something went wrong. Please try again.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Thank you for your order, {orderDetails.customerName}!</h1>
      <p>Your order has been placed successfully.</p>
      
      <h3>Order Details:</h3>
      <div>
        {orderDetails.cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <img
              src={item.image?.url || "https://via.placeholder.com/100"}
              alt={item.title}
              style={{ width: "50px", height: "auto", marginRight: "10px" }}
            />
            <span>{item.title} x {item.quantity} - ${item.discountedPrice.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <h3>Total Amount: ${orderDetails.totalAmount}</h3>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
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
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
