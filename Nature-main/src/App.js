import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import NewProduct from "./components/NewProduct";
import "./styles/style.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import OrderList from "./components/OrderList";
import ProductCategory from "./components/ProductCategory";
import About from "./components/About";
import LoginPage from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => (
  <Router>
    <div className="conatiner">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/category/:category" element={<ProductCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/cart" element={<PrivateRoute element={Cart} />} />{" "}
        {/* Private route */}
        <Route
          path="/orders"
          element={<PrivateRoute element={OrderList} />}
        />{" "}
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
