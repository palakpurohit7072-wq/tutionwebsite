import React from "react";
import "../styles/Whychooseus.css";

const features = [
  {
    icon: "👤",
    title: "Personalized Learning Plans",
    desc: "Focus on individual learning needs",
    bg: "wcu-icon-green",
  },
  {
    icon: "📊",
    title: "Regular Tests",
    desc: "Track progress and improve consistently",
    bg: "wcu-icon-purple",
  },
  {
    icon: "💡",
    title: "Experienced Faculty",
    desc: "Guidance with care and commitment",
    bg: "wcu-icon-yellow",
  },
  {
    icon: "✅",
    title: "Safe & Positive Environment",
    desc: "Learn with confidence",
    bg: "wcu-icon-blue",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="wcu-section py-5">
      <div className="container">
        <span className="wcu-badge mb-3">🌿 Why Choose Us?</span>
        <h2 className="wcu-heading mt-2 mb-5">
          Because Your Child Deserves the Best
        </h2>

        <div className="row align-items-stretch">
          {/* Features: ab 10/12 width milti hai (pehle sirf 8/12 thi) */}
          <div className="col-12 col-lg-10">
            <div className="row g-4 g-lg-0 h-100">
              {features.map((item, idx) => (
                <div
                  className={`col-12 col-sm-6 col-lg-3 wcu-col ${
                    idx !== 0 ? "wcu-col-divider" : ""
                  }`}
                  key={item.title}
                >
                  <div className="d-flex align-items-start wcu-feature">
                    <div className={`wcu-icon ${item.bg}`}>
                      <span>{item.icon}</span>
                    </div>
                    <div>
                      <h6 className="wcu-title mb-1">{item.title}</h6>
                      <p className="wcu-desc mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote box: 4/12 se 2/12 kiya */}
          <div className="col-12 col-lg-2 mt-5 mt-lg-0 d-flex justify-content-center justify-content-lg-end align-items-center">
            <div className="wcu-quote-box">
              <svg
                className="wcu-leaf wcu-leaf-1"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10 C20 30 10 70 30 110 C40 125 55 130 55 130 C55 130 45 90 55 60 C62 40 75 25 90 15 C70 5 60 5 50 10 Z"
                  fill="#2f9e5b"
                />
              </svg>
              <svg
                className="wcu-leaf wcu-leaf-2"
                viewBox="0 0 100 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10 C20 30 10 70 30 110 C40 125 55 130 55 130 C55 130 45 90 55 60 C62 40 75 25 90 15 C70 5 60 5 50 10 Z"
                  fill="#3fae6a"
                />
              </svg>
              <p className="wcu-quote mb-0">
                Good Students <br /> Brighter Futures{" "}
                <span className="wcu-heart">❤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
