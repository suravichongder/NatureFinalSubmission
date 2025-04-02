import React from "react";
import Menu from "./Menu";
import MainContent from "./MainContent";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" style={{ display: "flex", marginTop: "1%" }}>
          <Menu />
        </div>
        <div
          className="col-md-10"
          style={{ marginLeft: "-2.5%", display: "inherit", marginTop: "1%" }}
        >
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default Home;
