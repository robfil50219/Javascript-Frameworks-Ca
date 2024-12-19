import React, { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#00A0A0",
          padding: "10px 20px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>ShopSphere</h1>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "none", // Hidden on larger screens
          }}
          className="hamburger-menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <nav
          style={{
            display: menuOpen ? "block" : "none", // Show menu on toggle
            position: "absolute",
            top: "60px",
            right: "10px",
            backgroundColor: "#0F4452",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
          className="menu-links"
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
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Links for larger screens */}
        <nav className="desktop-menu">
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
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
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: "20px" }}>{children}</main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#0F4452",
          padding: "10px",
          color: "white",
          textAlign: "center",
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



