import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-transparent mt-3">
      <div className="container">
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
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <NavLink className="nav-link font-weight-bold text-white" exact to="/">About</NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
              <NavLink className="nav-link font-weight-bold text-white" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <NavLink className="nav-link font-weight-bold text-white" to="/contact">Contact</NavLink>
            </li>
            <li className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}>
              <NavLink className="nav-link font-weight-bold text-white" to="/resume">Resume</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
