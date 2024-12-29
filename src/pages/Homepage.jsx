import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 21;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(0, indexOfLastProduct);

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const showLess = () => {
    setCurrentPage(currentPage - 1);
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1 className="slogan">Discover Your Next Favorite Product at ShopSphere</h1>

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
  {currentProducts.map((product) => (
    <div key={product.id} className="product-card">
      {/* Show discount badge if discounted */}
      {product.discountedPrice < product.price && (
        <span className="discount-badge">
          {`-${Math.round(
            ((product.price - product.discountedPrice) / product.price) * 100
          )}%`}
        </span>
      )}

      <img
        src={product.image?.url}
        alt={product.title}
        className="product-image"
      />
      <h3>{product.title}</h3>
      <p>
        {product.discountedPrice < product.price ? (
          <>
            <span className="original-price">${product.price?.toFixed(2)}</span>{" "}
            <span className="discounted-price">
              ${product.discountedPrice?.toFixed(2)}
            </span>
          </>
        ) : (
          <span>${product.price?.toFixed(2)}</span>
        )}
      </p>
      {/* Display Product Rating */}
      <p className="product-rating">
        Rating: ⭐ {product.rating ? product.rating.toFixed(1) : "0"}
      </p>
      <Link to={`/product/${product.id}`} className="view-product-button">
        View Product
      </Link>
    </div>
  ))}
</div>



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























