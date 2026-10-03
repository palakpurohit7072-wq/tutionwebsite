import React from "react";
// import { FaWhatsapp, FaPhoneAlt, FaHeart } from "react-icons/fa";


import { FaHeart } from "react-icons/fa";
import ContactActions from "../Component/ContactActions";
import "../styles/contact.css";
// Decorative leaves (left side)
const Leaves = () => (
  <svg className="cta-leaves d-none d-md-block" width="90" height="100" viewBox="0 0 90 100" aria-hidden="true">
    <path d="M45 98V55" stroke="#6fcf8a" strokeWidth="3" strokeLinecap="round" />
    <path d="M45 60C18 60 6 38 6 14c26 0 39 16 39 46z" fill="#4caf6e" />
    <path d="M45 50C45 24 60 6 86 4c0 24-14 44-41 46z" fill="#2e8b4f" />
  </svg>
);

export default function CtaBanner() {
  return (
    <section id ="contact" className="container my-4">
      <div className="cta-banner">
        <Leaves />

        <div className="row align-items-center g-3 w-100 mx-0">
          {/* Text */}
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <h2 className="cta-title">Let's Build a Brighter Future Together</h2>
            <p className="cta-text mb-0">Have questions? Feel free to reach out!</p>
          </div>

          {/* Buttons */}
         <div className="col-12 col-lg-5">
  <ContactActions variant="contact" />
</div>

          {/* Handwritten text */}
          <div className="col-lg-2 d-none d-lg-block cta-script">
            Learn
            <br />
            Grow
            <br />
            Shine <FaHeart size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
