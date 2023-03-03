import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Imgs/estrella.png";

import "./Style Navbar/Navbar.scss";

export default function Navbar() {
  return (
  
    <div className="navbar-container">
      <Link to="/">
        <div className="navbar-wrapper">
          <img src={logo} width={60} height={60} />{" "}
          <div className="navbar-texto">Soberania Alimentaria Formoseña</div>
        </div>
      </Link>
      <div className="navbar-wrapper">
        <div className="navbar-item">
          <Link
            type="button"
            className="btn btn-outline-light me-md-2"
            to="/"
          >
            Catálogo
          </Link>
        </div>
        <div className="navbar-item">
          <Link
            type="button"
            className="btn btn-outline-light me-md-2"
            to="/login"
          >
            Soy parte de SAF
          </Link>
        </div>
      </div>
    </div>
  );
}
