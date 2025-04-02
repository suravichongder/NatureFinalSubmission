import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../styles/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_CONTACT_URL, formData)
      .then((response) => {
        console.log(response.data);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("There was an error sending the message!", error);
        if (error.response) {
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);
        }
      });
  };

  const isFormValid = formData?.name && formData?.email && formData?.message;

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-7">
          <div className="card p-4 bg-light">
            <h2 className="card-title">Contact Us</h2>
            <div className="card-body">
              <p className="card-text">
                If you have any questions or need assistance, feel free to reach
                out to us.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData?.name ?? ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData?.email ?? ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    value={formData?.message ?? ""}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isFormValid}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
