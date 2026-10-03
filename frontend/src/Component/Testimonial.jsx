import React from "react";
import "../styles/testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "The teachers are very supportive and the study environment is excellent. My child has shown great improvement!",
    name: "Priya Sharma",
    role: "Parent of Class 6 Student",
  },
  {
    quote:
      "Concepts are explained so clearly. The regular tests really help in tracking progress. Highly recommended!",
    name: "Rohit Mehta",
    role: "Parent of Class 8 Student",
  },
  {
    quote:
      "A friendly and motivating place for students. My daughter actually looks forward to her classes!",
    name: "Sneha Verma",
    role: "Parent of Class 5 Student",
  },
  {
    quote:
      "The teachers give personal attention and explain every concept patiently. We are very happy with the progress.",
    name: "Anita Patel",
    role: "Parent of Class 7 Student",
  },
  {
    quote:
      "The regular tests and feedback have helped my son become much more confident in his studies.",
    name: "Vikas Jain",
    role: "Parent of Class 9 Student",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testi-section py-5">
      <div className="container">

        {/* Heading */}
        <div className="mb-2">
          <span className="testi-badge mb-3">
            ⭐ What Parents Say
          </span>

          <h2 className="testi-heading mt-2 mb-0">
            Trusted by Parents, Loved by Students
          </h2>
        </div>

        {/* Slider */}
        <div className="testi-slider-wrapper">

          {/* Previous Arrow */}
          <button
            className="testi-nav testi-prev"
            aria-label="Previous testimonial"
          >
            <span className="testi-arrow">‹</span>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".testi-prev",
              nextEl: ".testi-next",
            }}
            pagination={{
              el: ".testi-pagination",
              clickable: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testi-swiper"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="testi-card h-100">

                  <p className="testi-quote mb-3">
                    "{item.quote}"
                  </p>

                  <div className="d-flex align-items-center justify-content-between flex-wrap">

                    <div className="d-flex align-items-center">
                      <div>
                        <h6 className="testi-name mb-0">
                          {item.name}
                        </h6>

                        <p className="testi-role mb-0">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="testi-stars mt-2 mt-sm-0">
                      ★★★★★
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Arrow */}
          <button
            className="testi-nav testi-next"
            aria-label="Next testimonial"
          >
            <span className="testi-arrow">›</span>
          </button>

          {/* Pagination */}
          <div className="testi-pagination"></div>

        </div>

      </div>
    </section>
  );
}