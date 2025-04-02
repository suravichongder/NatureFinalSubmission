import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import saplings from "../images/Sapling.jpg";
import "../styles/style.css";

const MainContent = () => {
  return (
    <img
      style={{ marginLeft: "3%", width: "100%" }}
      src={saplings}
      alt="sapling"
      className="img-fluid"
    />
  );
};

export default MainContent;
