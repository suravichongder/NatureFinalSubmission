import "../styles/style.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const NewProduct = ({ product }) => {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleClick = () => {
    navigate(`/products/${product?._id ?? ""}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      {product?.images?.map((upload, index) => (
        <img
          key={index}
          src={`${baseURL}${upload?.replace(/\\/g, "/") ?? ""}`}
          alt={product?.name ?? "Product"}
        />
      ))}
      <h2 className="product-name">{product?.name ?? "Product Name"}</h2>
    </div>
  );
};

export default NewProduct;
