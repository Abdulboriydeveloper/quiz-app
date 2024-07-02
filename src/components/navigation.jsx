import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/navigation.css';

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand page-scroll" to="/">
          Mutolaa Suniiy Idrok
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link page-scroll">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link page-scroll">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link page-scroll">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quiz" className="nav-link page_quiz">
                Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
