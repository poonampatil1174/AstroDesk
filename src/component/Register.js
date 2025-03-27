import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    // Validation
    if (!user.fullName || !user.mobile || !user.email || !user.password || !user.confirmPassword) {
      setError("All fields are required");
      return;
    }
  
    if (!/^\d{10}$/.test(user.mobile)) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setError("Enter a valid email address");
      return;
    }
  
    if (user.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
  
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if email already exists
    if (users.some((u) => u.email === user.email)) {
      setError("User with this email already exists!");
      return;
    }
  
    // Save new user
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    setError(""); // Clear errors
    alert("Registration Successful! 🎉");
  
    // Redirect to login page
    navigate("/login");
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Register</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" name="fullName" placeholder="Enter full name" value={user.fullName} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="text" className="form-control" name="mobile" placeholder="Enter mobile number" value={user.mobile} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" value={user.email} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Enter password" value={user.password} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm password" value={user.confirmPassword} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
