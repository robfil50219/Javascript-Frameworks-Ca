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
      <footer>
  <p>© 2024 ShopSphere</p>
  <div className="footer-link">
    <Link to="/contact">Contact Us</Link>
  </div>
</footer>

    </div>
  );
};

export default Layout;






