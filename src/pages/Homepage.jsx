import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await response.json();
        setProducts(data.data || []);
        setFilteredProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Shop our Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "5px",
                width: "200px",
              }}
            >
              <img
                src={product.image?.url || "https://via.placeholder.com/300"}
                alt={product.title}
                style={{ width: "100%", height: "auto" }}
              />
              <h3>{product.title}</h3>
              <p>Price: ${product.discountedPrice.toFixed(2)}</p>

              
              <Link
                to={`/product/${product.id}`}  
                style={{
                  display: "inline-block",
                  padding: "10px",
                  backgroundColor: "#00A0A0",
                  color: "white",
                  textDecoration: "none",
                  textAlign: "center",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                View Product
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;














