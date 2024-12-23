import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Local state for search input
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const productsPerPage = 20; // Display 20 products per page

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

  // Paginate the products to display only 20 per page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(0, indexOfLastProduct);

  // Handle the "Load More" button click
  const loadMore = () => {
    setCurrentPage(currentPage + 1); // Increment page number
  };

  // Handle the "Show Less" button click
  const showLess = () => {
    setCurrentPage(currentPage - 1); // Decrement page number
  };

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
          onChange={(e) => setSearch(e.target.value)} // Handle search input change
          className="search-bar-input"
        />
      </div>

      <div className="product-list">
        {currentProducts.map((product) => (
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

      {/* Load More / Show Less Button */}
      {filteredProducts.length > currentPage * productsPerPage && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={loadMore} className="load-more-button">
            Load More
          </button>
        </div>
      )}

      {currentPage > 1 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={showLess} className="show-less-button">
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Homepage;





















