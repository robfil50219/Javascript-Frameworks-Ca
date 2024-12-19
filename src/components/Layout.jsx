import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const mainStyle = {
    flex: 1,
    padding: "20px",
  };

  const footerStyle = {
    backgroundColor: "#0F4452",
    padding: "10px",
    color: "white",
    textAlign: "center",
  };

  return (
    <div style={layoutStyle}>
      <header
        style={{
          backgroundColor: "#00A0A0",
          padding: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>ShopSphere</h1>
      </header>
      <main style={mainStyle}>{children}</main>
      <footer style={footerStyle}>
        <p>© 2024 ShopSphere</p>
        <Link
          to="/contact"
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "#0F4452",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Contact Us
        </Link>
      </footer>
    </div>
  );
};

export default Layout;


