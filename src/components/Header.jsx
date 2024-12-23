import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Header = () => {
  const [search, setSearch] = useState(""); // Local state for search input

  const handleSearchChange = (e) => {
    setSearch(e.target.value); // Update local search state
  };

  return (
    <header style={{ padding: "10px 20px", backgroundColor: "#00A0A0", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        
        {/* Logo that links to the homepage */}
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1 style={{ margin: 0 }}>ShopSphere</h1>
        </Link>

        {/* Search Bar */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearchChange} // Handle search input change
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
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;















