import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactActions from "../Component/ContactActions";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sm-navbar sticky-top">
      <div className="container">
        {/* logo */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#home"
          onClick={closeMenu}
        >
          <i className="fa-solid fa-seedling sm-brand-icon"></i>
          <div className="sm-brand-text">
            <div className="sm-title">
              Sprouting <span>Minds</span>
            </div>
            <div className="sm-tagline">Learn &bull; Grow &bull; Shine</div>
          </div>
        </a>

        {/* hamburger / cross button */}
        <button
          className={`navbar-toggler ${open ? "" : "collapsed"}`}
          type="button"
          aria-controls="navMenu"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* menus */}
        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="navMenu"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" onClick={closeMenu}>
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#subjects">
                Subjects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-us">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <ContactActions variant="navbar" showCall={false} />
        </div>
      </div>
    </nav>
  );
}
