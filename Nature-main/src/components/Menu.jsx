import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css"; // Import the external CSS file

function Menu() {
  return (
    <div
      className="menu bg-dark text-white p-3 rounded"
      style={{ width: "100%" }}
    >
      <p className="h4">PRODUCT CATEGORIES</p>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/Bonsai"
      >
        Bonsai
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/Flower"
      >
        Flower saplings
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/fruitSapling"
      >
        Fruit saplings
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/organicManure"
      >
        Organic manure
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/gardeningTools"
      >
        Gardening tools
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/vegetableSapling"
      >
        Vegetable saplings
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/fruitSeeds"
      >
        Fruit seeds
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/vegetableSeeds"
      >
        Vegetable seeds
      </Link>
      <Link
        className="links d-block py-2 px-3 text-white"
        to="/category/specialOffers"
      >
        Special Offers
      </Link>
    </div>
  );
}

export default Menu;
