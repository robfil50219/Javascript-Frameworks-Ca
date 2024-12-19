import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(20); // Number of products to show initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.data || []); // Access products from the `data` field
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 20); // Show 20 more products
  };

  const handleLoadLess = () => {
    setVisibleProducts((prev) => Math.max(20, prev - 20)); // Show 20 fewer products but not less than 20
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>"Reach New Heights in Shopping with ShopSphere!"</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Four columns
          gap: "40px", // Space between items
          justifyContent: "center",
          margin: "20px auto",
          maxWidth: "1400px", // Restrict the maximum width
        }}
      >
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
          >
            <img
              src={product.image?.url || "https://via.placeholder.com/300"}
              alt={product.image?.alt || product.title || "Product Image"}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5px",
              }}
            />
            <h3 style={{ fontSize: "1.5rem", margin: "10px 0" }}>{product.title}</h3>
            <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
              Price: ${product.discountedPrice.toFixed(2)}
              {product.price !== product.discountedPrice && (
                <span style={{ color: "red", fontSize: "1rem" }}>
                  {" "}
                  ({Math.round(
                    ((product.price - product.discountedPrice) / product.price) * 100
                  )}
                  % off)
                </span>
              )}
            </p>
            <p style={{ fontSize: "1rem", color: "#555", margin: "10px 0" }}>
              {product.description}
            </p>
            <Link
              to={`/product/${product.id}`} // Link to the product page with its ID
              style={{
                padding: "10px 20px",
                backgroundColor: "#00A0A0",
                color: "white",
                border: "none",
                borderRadius: "5px",
                textDecoration: "none",
                fontSize: "1rem",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {visibleProducts > 20 && (
          <button
            onClick={handleLoadLess}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#FF6347",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Load Less
          </button>
        )}
        {visibleProducts < products.length && (
          <button
            onClick={handleLoadMore}
            style={{
              padding: "10px 20px",
              backgroundColor: "#00A0A0",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Homepage;










