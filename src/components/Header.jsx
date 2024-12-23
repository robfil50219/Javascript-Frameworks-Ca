import React, { useState } from "react";
import { Link } from "react-router-dom";  

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header style={{ padding: "10px 20px", backgroundColor: "#00A0A0", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        {/* Logo that links to the homepage */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ margin: 0, color: "white", flex: "none" }}>ShopSphere</h1>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Cart Icon */}
          <Link
            to="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
              gap: "5px",
              position: "relative",  
            }}
          >
            <span style={{ fontSize: "24px" }}>🛒</span> 
          </Link>

          {/* Hamburger Menu */}
          <div onClick={toggleMenu} style={{ cursor: "pointer", fontSize: "24px", color: "white" }}>
            ☰
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          style={{
            backgroundColor: "#0F4452",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            position: "absolute",
            top: "60px",
            right: "10px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

























