// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/style.css"; // Import the CSS file

// function Nav({ setSelectedCategory }) {
//   const location = useLocation();
//   const [activeLink, setActiveLink] = useState(location.pathname);
//   const [dropdownOpen, setDropdownOpen] = useState(false); // useState for dropdown state

//   const handleClick = (path, category) => {
//     setActiveLink(path);
//     if (category) {
//       setSelectedCategory(category);
//     }
//   };

//   const handleMouseEnter = () => {
//     setDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-dark">
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav text-white">
//           <li className="nav-item mx-2">
//             <Link
//               className={`nav-link ${
//                 activeLink === "/home" ? "bg-success text-white" : "text-white"
//               }`}
//               to="/"
//               onClick={() => handleClick("/")}
//               aria-label="Home"
//             >
//               HOME
//             </Link>
//           </li>
//           <li
//             className={`nav-item dropdown mx-2 ${dropdownOpen ? "show" : ""}`} // Conditional class for dropdown
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link
//               className={`nav-link dropdown-toggle ${
//                 activeLink === "/product"
//                   ? "bg-success text-white"
//                   : "text-white"
//               }`}
//               to="/product"
//               id="navbarDropdown"
//               role="button"
//               aria-haspopup="true"
//               aria-expanded={dropdownOpen}
//               onClick={() => handleClick("/product")}
//               aria-label="Products"
//             >
//               PRODUCTS
//             </Link>
//             <div
//               className={`dropdown-menu bg-dark ${dropdownOpen ? "show" : ""}`}
//             >
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_BONSAI ?? "#"}
//               >
//                 Bonsai
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_FLOWER ?? "#"}
//               >
//                 Flower saplings
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_FRUIT_SAPLING ?? "#"}
//               >
//                 Fruit saplings
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_ORGANIC_MANURE ?? "#"}
//               >
//                 Organic manure
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_GARDENING_TOOLS ?? "#"}
//               >
//                 Gardening tools
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_VEGETABLE_SAPLING ?? "#"}
//               >
//                 Vegetable saplings
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_FRUIT_SEEDS ?? "#"}
//               >
//                 Fruit seeds
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_VEGETABLE_SEEDS ?? "#"}
//               >
//                 Vegetable seeds
//               </Link>
//               <Link
//                 className="dropdown-item text-white"
//                 to={process.env.REACT_APP_CATEGORY_SPECIAL_OFFERS ?? "#"}
//               >
//                 Special Offers
//               </Link>
//             </div>
//           </li>
//           <li className="nav-item mx-2">
//             <Link
//               className={`nav-link ${
//                 activeLink === "/about" ? "bg-success text-white" : "text-white"
//               }`}
//               to="/about"
//               onClick={() => handleClick("/about")}
//               aria-label="About Us"
//             >
//               ABOUT US
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link
//               className={`nav-link ${
//                 activeLink === "/contact"
//                   ? "bg-success text-white"
//                   : "text-white"
//               }`}
//               to="/contact"
//               onClick={() => handleClick("/contact")}
//               aria-label="Contact Us"
//             >
//               CONTACT US
//             </Link>
//           </li>
//           <li className="nav-item mx-2">
//             <Link
//               className={`nav-link ${
//                 activeLink === "/feedback"
//                   ? "bg-success text-white"
//                   : "text-white"
//               }`}
//               to="/feedback"
//               onClick={() => handleClick("/feedback")}
//               aria-label="Feedback"
//             >
//               FEEDBACK
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css"; // Import the CSS file

function Nav({ setSelectedCategory }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [dropdownOpen, setDropdownOpen] = useState(false); // useState for dropdown state

  const handleClick = (path, category) => {
    setActiveLink(path);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-white">
          <li className="nav-item mx-2">
            <Link
              className={`nav-link ${
                activeLink === "/home" ? "bg-success text-white" : "text-white"
              }`}
              to="/"
              onClick={() => handleClick("/")}
              aria-label="Home"
            >
              HOME
            </Link>
          </li>
          <li
            className={`nav-item dropdown mx-2 ${dropdownOpen ? "show" : ""}`} // Conditional class for dropdown
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              className={`nav-link dropdown-toggle ${
                activeLink === "/product"
                  ? "bg-success text-white"
                  : "text-white"
              }`}
              to="/product"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => handleClick("/product")}
              aria-label="Products"
            >
              PRODUCTS
            </Link>
            <div
              className={`dropdown-menu bg-dark ${dropdownOpen ? "show" : ""}`}
            >
              <Link
                className="dropdown-item text-white"
                to={"/category/Bonsai"}
              >
                Bonsai
              </Link>
              <Link className="dropdown-item text-white" to="/category/Flower">
                Flower saplings
              </Link>
              <Link
                className="dropdown-item text-white"
                to="/category/fruitSapling"
              >
                Fruit saplings
              </Link>
              <Link
                className="dropdown-item text-white"
                to="/category/organicManure"
              >
                Organic manure
              </Link>
              <Link
                className="dropdown-item text-white"
                to="/category/gardeningTools"
              >
                Gardening tools
              </Link>
              <Link
                className="dropdown-item text-white"
                to="/category/vegetableSapling"
              >
                Vegetable saplings
              </Link>
              <Link
                className="dropdown-item text-white"
                to="/category/fruitSeeds"
              >
                Fruit seeds
              </Link>
              <Link
                className="dropdown-item text-white"
                to="/category/vegetableSeeds"
              >
                Vegetable seeds
              </Link>
              <Link
                className="dropdown-item text-white"
                to="/category/specialOffers"
              >
                Special Offers
              </Link>
            </div>
          </li>
          <li className="nav-item mx-2">
            <Link
              className={`nav-link ${
                activeLink === "/about" ? "bg-success text-white" : "text-white"
              }`}
              to="/about"
              onClick={() => handleClick("/about")}
              aria-label="About Us"
            >
              ABOUT US
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className={`nav-link ${
                activeLink === "/contact"
                  ? "bg-success text-white"
                  : "text-white"
              }`}
              to="/contact"
              onClick={() => handleClick("/contact")}
              aria-label="Contact Us"
            >
              CONTACT US
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link
              className={`nav-link ${
                activeLink === "/feedback"
                  ? "bg-success text-white"
                  : "text-white"
              }`}
              to="/feedback"
              onClick={() => handleClick("/feedback")}
              aria-label="Feedback"
            >
              FEEDBACK
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
