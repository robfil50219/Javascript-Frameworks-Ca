import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data); // Set the fetched product data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{ width: "300px", height: "auto" }}
      />
      <p>{product.description}</p>
      <p>
        Price: ${product.discountedPrice.toFixed(2)}{" "}
        {product.price !== product.discountedPrice && (
          <span style={{ color: "red" }}>
            (Save {Math.round(
              ((product.price - product.discountedPrice) / product.price) * 100
            )}%)
          </span>
        )}
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
