import React from "react";
import { FaHeart, FaQuoteLeft } from "react-icons/fa";
import "../styles/footer.css";

// ================= LOGO =================

const Logo = () => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 64 64"
    aria-hidden="true"
  >
    <path
      d="M32 58V34"
      stroke="#1b6b3a"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <path
      d="M32 36C14 36 8 22 8 10c16 0 24 10 24 26z"
      fill="#55b96f"
    />

    <path
      d="M32 30C32 14 42 4 58 4c0 14-8 26-26 26z"
      fill="#1b6b3a"
    />
  </svg>
);

// ================= FOOTER =================

export default function Footer() {
  return (
    <footer className="sm-footer">

      {/* Decorative background elements */}
      <span className="sm-footer-shape sm-shape-one"></span>
      <span className="sm-footer-shape sm-shape-two"></span>
      <span className="sm-footer-leaf sm-leaf-one">🍃</span>
      <span className="sm-footer-leaf sm-leaf-two">🌿</span>

      <div className="container position-relative">

        {/* ================= MAIN FOOTER ================= */}

        <div className="sm-footer-main">

          {/* ================= BRAND ================= */}

          <div className="sm-footer-brand-card">

            <div className="sm-footer-brand-top">

              <div className="sm-footer-logo-box">
                <Logo />
              </div>

              <div>
                <h3 className="sm-brand">
                  Sprouting <span>Minds</span>
                </h3>

                <p className="sm-tagline">
                  Learn&nbsp; • &nbsp;Grow&nbsp; • &nbsp;Shine
                </p>
              </div>

            </div>

            <p className="sm-footer-description">
              A nurturing space where young minds learn with clarity,
              grow with confidence and take small steps towards
              brighter futures.
            </p>

            <div className="sm-footer-highlight">
              <span className="sm-highlight-icon">🌱</span>

              <span>
                Small steps. Big dreams. Brighter futures.
              </span>
            </div>

          </div>

          {/* ================= QUOTE ================= */}

          <div className="sm-footer-quote-card">

            <div className="sm-quote-icon">
              <FaQuoteLeft />
            </div>

            <p className="sm-quote">
              Every child has a spark.
              <br />
              We help it shine brighter.
            </p>

            <div className="sm-quote-divider">
              <span></span>
              <FaHeart />
              <span></span>
            </div>

            <p className="sm-quote-small">
              Learning today, growing every day.
            </p>

            <div className="sm-growing-badge">
              ✨ Nurturing Young Minds
            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="sm-footer-bottom">

          <div className="sm-copyright">
            © 2024 <strong>Sprouting Minds</strong>. All rights reserved.
          </div>

          <div className="sm-footer-made">
            Made with
            <FaHeart />
            for brighter futures
          </div>

        </div>

      </div>
    </footer>
  );
}