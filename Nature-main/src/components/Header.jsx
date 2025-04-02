import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TreeBigLogo from "../images/Logo/logoTreeBig.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import leavesfinal from "../images/Nature/leavesFinal.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="container-fluid py-3"
      style={{
        backgroundImage: `url(${leavesfinal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row align-items-center">
        <div className="col-12 col-md-3 text-center text-md-left">
          <img
            src={TreeBigLogo}
            alt="Tree logo"
            className="img-fluid"
            style={{ width: "80px", height: "auto" }}
          />
        </div>

        <div className="col-12 col-md-6 text-center">
          <h2>
            Nature's Paradise
            <br />
            <span>Make your Home a Greener Place !!</span>
          </h2>
        </div>
        <div className="col-12 col-md-3 text-center text-md-right">
          {token ? (
            <div className="d-flex justify-content-center justify-content-md-end">
              <button className="btn btn-success me-2" onClick={logout}>
                Logout
              </button>
              <Link to="/cart" className="btn btn-outline-success">
                <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <Link to="/login" className="btn btn-success">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
