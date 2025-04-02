import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import axios from "axios";
import "../styles/style.css";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
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
      .post(process.env.REACT_APP_FEEDBACK_URL, formData)
      .then((response) => {
        console.log(response.data);
        alert("Feedback submitted successfully!");
        setFormData({
          name: "",
          email: "",
          feedback: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the feedback!", error);
      });
  };

  const isFormValid = formData?.name && formData?.email && formData?.feedback;

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-7">
          <div className="card p-4 bg-light">
            <h4 className="card-title">Feedback</h4>
            <div className="card-body">
              <p className="card-text">
                We value your feedback and suggestions. Please let us know how
                we can improve.
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
                  <label htmlFor="feedback" className="form-label">
                    Feedback:
                  </label>
                  <textarea
                    name="feedback"
                    className="form-control"
                    rows="4"
                    value={formData?.feedback ?? ""}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isFormValid}
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
