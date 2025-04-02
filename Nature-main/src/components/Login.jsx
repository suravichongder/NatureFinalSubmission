import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../services/registerapi";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // State variables for registration form
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // State variables for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-danger");

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  // Phone number validation function
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageColor("text-danger");
    if (!validateEmail(email)) {
      setMessage("Invalid email format");
      return;
    }
    if (!validatePhone(phone)) {
      setMessage("Phone number must be 10 digits");
      return;
    }
    if (!validatePassword(password)) {
      setMessage(
        "Password must be at least 8 characters long and contain both letters and numbers. Make sure it contains no special characters"
      );
      return;
    }
    try {
      const userData = { userName, email, phone, password, isAdmin };
      const response = await registerUser(userData);
      console.log("Account created successfully:", response);
      setMessage("Account created successfully");
      setMessageColor("text-success");
      // Clear the form fields
      setUserName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setIsAdmin(false);
      document.querySelector('input[name="role"]:checked').checked = false;
    } catch (error) {
      console.error("Error creating account:", error);
      setMessage("Error creating account");
    }
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginMessage("");
    if (!validateEmail(loginEmail)) {
      setLoginMessage("Invalid email format");
      return;
    }
    if (!validatePassword(loginPassword)) {
      setLoginMessage(
        "Password must be at least 8 characters long and contain both letters and numbers"
      );
      return;
    }
    try {
      const userData = { email: loginEmail, password: loginPassword };
      const response = await loginUser(userData);

      if (response != null) {
        console.log("Login successful:", response);
        localStorage.setItem("token", response.token); // Store the token
        navigate("/"); // Redirect to a dashboard or another page after successful login
        // Clear the form fields
        setLoginEmail("");
        setLoginPassword("");
      }
    } catch (error) {
      console.error("Error logging in:", error.response.data.error);
      setLoginMessage(error.response.data.error);
    }
  };

  // Handle role change for registration form
  const handleRoleChange = (e) => {
    setIsAdmin(e.target.value === "true");
  };

  const isRegisterFormValid = userName && email && phone && password;
  const isLoginFormValid = loginEmail && loginPassword;

  return (
    <div className="container mt-5">
      <h3 className="text-center">AUTHENTICATION</h3>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleRegister} className="border p-4">
            <h2>Add Account</h2>
            <div className="form-group">
              <label htmlFor="userName">Username:</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Role:</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="role"
                  value="true"
                  onChange={handleRoleChange}
                />
                <label className="form-check-label">Admin</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="role"
                  value="false"
                  onChange={handleRoleChange}
                />
                <label className="form-check-label">User</label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isRegisterFormValid}
            >
              Create Account
            </button>
            {message && <p className={`mt-3 ${messageColor}`}>{message}</p>}
          </form>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleLogin} className="border p-4">
            <h2>Already a User?</h2>
            <div className="form-group">
              <label htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                className="form-control"
                name="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password:</label>
              <input
                type="password"
                className="form-control"
                name="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isLoginFormValid}
            >
              Login
            </button>
            {loginMessage && <p className="mt-3 text-danger">{loginMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
