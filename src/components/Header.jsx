import React, { useState } from "react";
import { Link } from "react-router-dom";  

const Header = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0); 
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchQuery(e.target.value); 
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header style={{ padding: "10px 20px", backgroundColor: "#00A0A0", position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",  
          width: "100%",
        }}
      >
       
        <h1 style={{ margin: 0, color: "white", flex: "none" }}>ShopSphere</h1>

        
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange}
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              border: "none",
              width: "250px",
            }}
          />
        </div>

       
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
            }}
          >
            <span style={{ fontSize: "24px" }}>🛒</span> 
            {cartCount > 0 && (
              <span
                style={{
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "white",
                  padding: "5px 10px",
                  fontSize: "14px",
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














