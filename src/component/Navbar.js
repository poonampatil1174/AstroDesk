import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light "
      // style={{
      //   backgroundColor: "rgb(241, 201, 177)",
      //   color: "white",
      //   border: "none",

      // }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          AstroDesk
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/appointment">
                Appointments
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/remedies">
                Remedies
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/kundali-milan">
                Kundali Milan
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/kundali-creation">
                Kundali Creation
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/E-Commerce">
                E-Commerce
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/blogs">
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
