import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css"; // Import the external CSS file

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseURL}products/${id}`);
        setProduct(response?.data ?? null);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id, baseURL]); // Dependency array to re-run the effect when the product ID or baseURL changes

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async () => {
    if (!token) {
      // If no token, redirect to login page
      navigate("/login");
      return;
    }
    try {
      const response = await axios.post(
        `${baseURL}products/${id}/add-to-cart`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response?.data) {
        setMessage(response.data);
        navigate("/cart");
      } else {
        console.error("No response data received");
        setMessage("Error adding product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setMessage("Error adding product to cart");
    }
  };

  return (
    <div className="product-detail container text-center">
      <h1>{product?.name ?? "Product Name"}</h1>
      <div className="row justify-content-center">
        {product?.images?.map((uploads, index) => (
          <div key={index} className="col-md-4">
            <img
              src={`${baseURL}${uploads?.replace(/\\/g, "/") ?? ""}`}
              alt={product?.name ?? "Product"}
              className="img-fluid product-image"
            />
          </div>
        ))}
      </div>
      <p>
        <b>Description:</b> {product?.description ?? "No description available"}
      </p>
      <p>
        <b>Position:</b> {product?.position ?? "No position available"}
      </p>
      <p>
        <b>Price:</b> ${product?.price ?? "N/A"}
      </p>
      <button className="btn btn-primary buy-button" onClick={handleAddToCart}>
        Buy Product
      </button>
      <button
        className="btn btn-secondary back-button"
        onClick={() => navigate("/product")}
      >
        Back to Products
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductDetail;
