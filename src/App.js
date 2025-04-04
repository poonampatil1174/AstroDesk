import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// ✅ Import Components
import Navbar from './component/Navbar';
import Login from "./component/Login";
import Register from './component/Register';
import Dashboard from './component/Dashboard';

// ✅ Import Pages
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Remedies from './pages/Remedies';
import Blogs from './pages/Blogs';
import KundaliMilan from './pages/KundaliMilan';
import KundaliCreation from './pages/KundaliCreation';
import Ecommerce from './pages/Ecommerce';  
import Support from './pages/Support';      
import Profile from './pages/Profile';      

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/remedies" element={<Remedies />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/kundali-milan" element={<KundaliMilan />} />
        <Route path="/kundali-creation" element={<KundaliCreation />} />
        <Route path="/E-Commerce" element={<Ecommerce />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />

        {/* 404 Page */}
        <Route path="*" element={<h2>404 Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
