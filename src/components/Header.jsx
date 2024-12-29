import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = ({ setSearchQuery }) => {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 

  // Load cart items from localStorage and update cart count
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCartCount = savedCart.reduce((count, item) => count + item.quantity, 0);
    setCartCount(totalCartCount);
  }, []); // Runs once when the component is mounted

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header style={{ padding: "10px 20px", backgroundColor: "#00A0A0", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        {/* Logo that links to the homepage */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={`${process.env.PUBLIC_URL}/Shopshere-logo2.png`}
            alt="ShopSphere Logo"
            style={{ height: "100px", objectFit: "contain" }}
          />
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
            {cartCount > 0 && (
              <span
                style={{
                  backgroundColor: "rgba(255, 0, 0, 0.6)",
                  borderRadius: "50%",
                  color: "white",
                  padding: "3px 6px",
                  fontSize: "12px",
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                }}
              >
                {cartCount}
              </span>
            )}
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
          ref={menuRef}
          style={{
            backgroundColor: "#0F4452",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            position: "absolute",
            top: "100%",
            right: "0",
            width: "200px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: "1000",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li style={{ marginBottom: "10px" }}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li style={{ marginBottom: "10px" }}>
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




























