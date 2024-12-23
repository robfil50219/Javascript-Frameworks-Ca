import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Local state for search input

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await response.json();
        setProducts(data.data); // Set the products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1 className="slogan">Discover Your Next Favorite Product at ShopSphere</h1>
      
      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          className="search-bar-input" 
        />
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image?.url}
              alt={product.title}
              className="product-image"
            />
            <h3>{product.title}</h3>
            <p>Price: ${product.discountedPrice?.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;


















