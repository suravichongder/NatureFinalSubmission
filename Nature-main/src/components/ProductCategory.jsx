import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css"; // Import your CSS file

const ProductsByCategory = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(`Fetching products for category: ${category}`);
        const response = await axios.get(`${baseURL}category/${category}`);
        setProducts(response?.data ?? []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category, baseURL]);

  const handleClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="main-product">
      {products?.length === 0 && (
        <div className="error-message">No products found.</div>
      )}
      <div className="container-fluid p-0">
        <div className="text-center mb-4">
          <p className="font-weight-bold bg-dark text-white rounded p-2">
            Products Available
          </p>
          <p className="category-title">Products in {category} Category</p>
        </div>
        <div className="row">
          {products?.length > 0 ? (
            products.map((product) => (
              <div
                key={product?._id ?? ""}
                className="col-md-3 mb-4 product"
                onClick={() => handleClick(product?._id ?? "")}
              >
                {product?.images?.map((upload, index) => (
                  <img
                    key={index}
                    src={`${baseURL}${upload?.replace(/\\/g, "/") ?? ""}`}
                    alt={product?.name ?? "Product"}
                    className="product-image"
                  />
                ))}
                <h2>{product?.name ?? "Product Name"}</h2>
                <p>{product?.price ?? "Price not available"}</p>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No products available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
