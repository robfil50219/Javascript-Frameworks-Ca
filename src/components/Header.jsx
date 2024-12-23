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
    <header className="header">
      <div className="header-container">
        {/* Logo that links to the homepage */}
        <Link to="/" className="logo">
          <h1>ShopSphere</h1>
        </Link>

        <div className="header-actions">
          {/* Cart Icon */}
          <Link to="/cart" className="cart-link">
            <span className="cart-icon">🛒</span> 
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </Link>

          {/* Hamburger Menu */}
          <div onClick={toggleMenu} className="hamburger-menu">
            ☰
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          <ul className="mobile-menu-list">
            <li>
              <Link to="/" className="mobile-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="mobile-menu-item">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mobile-menu-item">
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
















