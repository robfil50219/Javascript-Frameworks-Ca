import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; 

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header included here for all pages, passing the menu state */}
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Main Content */}
      <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0F4452",
          padding: "10px",
          color: "white",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
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






