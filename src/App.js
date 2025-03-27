import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import Register from './component/Register';
import Dashboard from './component/Dashboard';

function App() {
  return (
   
     <Router>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </Router>
  
  );
}

export default App;
