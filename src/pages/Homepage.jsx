import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("default");
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

  const filteredProducts = products
    .filter((product) =>
      product.title?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low-high":
          return a.discountedPrice - b.discountedPrice;
        case "price-high-low":
          return b.discountedPrice - a.discountedPrice;
        case "rating-high-low":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

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

      <div className="search-sort-container">
  {/* Search Bar */}
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="search-bar-input"
  />
  
  {/* Sort Dropdown */}
  <select
    className="sort-dropdown"
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option value="default">Sort By</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
    <option value="rating-desc">Highest Rating</option>
    <option value="rating-asc">Lowest Rating</option>
  </select>
</div>


      {/* Product List */}
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
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
            <p className="product-rating">
              Rating: ⭐ {product.rating ? product.rating.toFixed(1) : "0"}
            </p>
            <Link to={`/product/${product.id}`} className="view-product-button">
              View Product
            </Link>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Buttons */}
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
























