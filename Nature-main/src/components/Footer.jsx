import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AllLogo from "../images/Logo/AllLogo.jpg";
import visaLogo from "../images/Logo/visaLogo.jpg";
import "../styles/style.css"; // Import your CSS file

function Footer() {
  const sections = [
    {
      title: "Follow Us",
      content: (
        <>
          <img src={AllLogo} alt="logo" className="img-fluid mb-3" />
          <br />
          We also accept:
          <br />
          <img src={visaLogo} alt="visaLogo" className="img-fluid" />
        </>
      ),
    },
    {
      title: "Support",
      links: [
        { to: "/", text: "Home" },
        { to: "/products", text: "Products available" },
        { to: "/about", text: "About Us" },
        { to: "/contact", text: "Contact us" },
        { to: "/feedback", text: "Feedback" },
      ],
    },
    {
      title: "My Accounts",
      links: [
        { to: "/account", text: "My account" },
        { to: "/orders", text: "My orders" },
        { to: "/credit-slips", text: "My credit slips" },
        { to: "/addresses", text: "My addresses" },
        { to: "/personal-info", text: "My personnel information" },
      ],
    },
    {
      title: "Useful Links",
      links: [
        { to: "/specials", text: "Specials" },
        { to: "/new-products", text: "New Products" },
        { to: "/best-sellers", text: "Best sellers" },
        { to: "/stores", text: "Our store(s)!" },
        { to: "/contact", text: "Contact us" },
        { to: "/shipping-policy", text: "Shipping and Delivery policy" },
        { to: "/privacy-policy", text: "Privacy Policy" },
        { to: "/faq", text: "Frequently Asked Questions" },
        { to: "/terms", text: "Terms and Conditions of Use" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row d-flex flex-wrap footer-section">
          {sections?.map((section, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-2 p-0">
              <h4 className="footer-title border-bottom border-white">
                {section?.title ?? "Section"}
              </h4>
              <div className="footer-middle-section">
                {section?.content ? (
                  <p className="text-white p-2 m-0">{section?.content}</p>
                ) : (
                  <p className="text-white p-1 m-0">
                    {section?.links?.map((link, linkIndex) => (
                      <React.Fragment key={linkIndex}>
                        <Link to={link?.to ?? "#"} className="text-white">
                          {link?.text ?? "Link"}
                        </Link>
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="row footer-bottom-section">
          <div className="col-12 p-0">
            <div className="text-center bg-black text-white py-1">
              <h6 className="footer-bottom-text">
                ©2017 Nature's Paradise, All rights reserved.
                <br />
                Written by Nature's Paradise.
                <br />
                Visit us at: natureparadise.in or at MG Road, Bangalore, KA,
                India{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
