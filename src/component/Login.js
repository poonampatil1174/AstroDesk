import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!mobile || !password) {
      setError("All fields are required");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const validUser = users.find((user) => user.mobile === mobile && user.password === password);

    if (validUser) {
      setError("");
      alert("Login Successful! 🎉");

      // Store logged-in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));

      // Redirect to dashboard (or home page)
      navigate("/dashboard"); // Change "/dashboard" to your actual page
    } else {
      setError("Invalid mobile number or password!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-3" style={{color:"black"}}>Login</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn  w-100" >Login</button>
        </form>

        <p className="mt-3 text-center"style={{color:"black"}}>
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
