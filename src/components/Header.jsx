import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">ShopSphere</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;

