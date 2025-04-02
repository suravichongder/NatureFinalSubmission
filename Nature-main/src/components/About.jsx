import React from "react";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-11">
          <div className="card p-4 bg-light">
            <h2 className="card-title">About Us</h2>
            <div className="card-body">
              <p className="card-text">
                Welcome to Nature's Paradise! We are dedicated to making your
                home a greener place with our wide range of bonsai, flower
                saplings, fruit saplings, organic manure, gardening tools,
                vegetable saplings, fruit seeds, vegetable seeds, and special
                offers.
              </p>
              <p className="card-text">
                Our mission is to promote sustainable living and help you create
                a beautiful, green environment in your home. We believe in the
                power of nature to transform spaces and bring joy to people's
                lives.
              </p>
              <p className="card-text">
                Visit us at MG Road, Bangalore, KA, India or online at
                natureparadise.in.
              </p>
              <p className="card-text">
                At Nature's Paradise, we are passionate about providing
                high-quality products and exceptional customer service. Our team
                of experts is always ready to assist you with any gardening
                needs and offer personalized advice to help your plants thrive.
              </p>
              <p className="card-text">
                We also host regular workshops and events to educate our
                community about sustainable gardening practices and the benefits
                of growing your own food. Join us to learn more about
                composting, organic farming, and creating a green oasis in your
                urban space.
              </p>
              <p className="card-text">
                Thank you for choosing Nature's Paradise. Together, let's make
                the world a greener place, one plant at a time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
