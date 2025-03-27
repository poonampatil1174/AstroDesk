import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get logged-in user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      // If no user is logged in, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="container mt-5">
      {user ? (
        <div className="card p-4 shadow">
          <h2>Welcome, {user.fullName}! 🎉</h2>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
