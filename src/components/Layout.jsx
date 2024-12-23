import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};

export default Layout;






