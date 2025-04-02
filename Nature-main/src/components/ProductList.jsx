import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./NewProduct";
import "../styles/style.css";
import Menu from "./Menu";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}products`);
        setProducts(response?.data ?? []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [baseURL]);

  return (
    <div className="main-product">
      <div className="product-list">
        {products?.map(
          (product) =>
            product?._id && (
              <Product key={product?._id ?? ""} product={product} />
            )
        )}
      </div>
    </div>
  );
};

export default ProductList;
