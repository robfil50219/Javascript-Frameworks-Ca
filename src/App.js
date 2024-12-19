import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage"; // Match file name exactly
import ProductPage from "./pages/Productpage"; // Match file name exactly
import CartPage from "./pages/CartPage"; // Match file name exactly
import CheckoutPage from "./pages/CheckoutPage"; // Match file name exactly
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage"; // Match file name exactly
import ContactPage from "./pages/ContactPage"; // Match file name exactly



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


