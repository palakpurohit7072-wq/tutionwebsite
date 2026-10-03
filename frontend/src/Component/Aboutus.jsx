import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/aboutus.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "👩‍🏫",
    title: "Expert Guidance",
    desc: "B.Sc. + B.Ed. qualified teacher",
    bg: "feature-icon-green",
  },
  {
    icon: "📝",
    title: "Regular Tests",
    desc: "Build confidence & track progress",
    bg: "feature-icon-blue",
  },
  {
    icon: "🎯",
    title: "Special Attention",
    desc: "Extra support for weaker subjects",
    bg: "feature-icon-orange",
  },
  {
    icon: "💡",
    title: "Concept-Based Teaching",
    desc: "Learn with clarity & understanding",
    bg: "feature-icon-red",
  },
];

const moreInfo = [
  {
    label: "Teacher",
    value: "Khushboo Choudhary",
  },
  {
    label: "Qualification",
    value: "B.Sc. + B.Ed.",
  },
  {
    label: "Classes",
    value: "3rd to 8th",
  },
  {
    label: "Subjects",
    value: "Maths, Science, English, Hindi, History, Geography",
  },
  {
    label: "Additional Subjects",
    value: "Marathi, Computer, GK, Moral Science",
  },
  {
    label: "Learning Support",
    value: "Special attention towards weaker subjects",
  },
];

export default function Aboutus() {
  const [expanded, setExpanded] = useState(false);

  const sectionRef = useRef(null);
  const moreRef = useRef(null);

  /* =====================================================
     GSAP SCROLL ANIMATIONS
  ===================================================== */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /* ================================================
         ACCESSIBILITY
      ================================================= */

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".about-image-wrap",
            ".about-badge",
            ".about-heading",
            ".about-text",
            ".about-teacher-card",
            ".about-btn",
            ".about-feature-item",
          ],
          {
            clearProps: "all",
          }
        );

        return;
      }

      /* ================================================
         DESKTOP / TABLET
      ================================================= */

      const desktopAnimation = gsap.matchMedia();

      desktopAnimation.add("(min-width: 768px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        });

        timeline
          .from(".about-image-wrap", {
            x: -70,
            opacity: 0,
            scale: 0.92,
            duration: 0.9,
            ease: "power3.out",
          })

          .from(
            ".about-badge",
            {
              y: 20,
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            "-=0.55"
          )

          .from(
            ".about-heading",
            {
              y: 35,
              opacity: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.3"
          )

          .from(
            ".about-text",
            {
              y: 20,
              opacity: 0,
              duration: 0.5,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.3"
          )

          .from(
            ".about-teacher-card",
            {
              y: 25,
              opacity: 0,
              scale: 0.97,
              duration: 0.55,
              ease: "back.out(1.4)",
            },
            "-=0.2"
          )

          .from(
            ".about-btn",
            {
              y: 20,
              opacity: 0,
              duration: 0.45,
              ease: "power2.out",
            },
            "-=0.25"
          )

          .from(
            ".about-feature-item",
            {
              x: 45,
              opacity: 0,
              duration: 0.55,
              stagger: 0.13,
              ease: "power3.out",
            },
            "-=0.5"
          );
      });

      /* ================================================
         MOBILE
      ================================================= */

      desktopAnimation.add("(max-width: 767px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        });

        timeline
          .from(".about-image-wrap", {
            y: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
            ease: "power2.out",
          })

          .from(
            ".about-badge",
            {
              y: 15,
              opacity: 0,
              duration: 0.4,
            },
            "-=0.25"
          )

          .from(
            ".about-heading",
            {
              y: 25,
              opacity: 0,
              duration: 0.55,
              ease: "power2.out",
            },
            "-=0.15"
          )

          .from(
            ".about-text",
            {
              y: 15,
              opacity: 0,
              duration: 0.4,
              stagger: 0.1,
            },
            "-=0.2"
          )

          .from(
            ".about-teacher-card",
            {
              y: 20,
              opacity: 0,
              duration: 0.45,
            },
            "-=0.15"
          )

          .from(
            ".about-btn",
            {
              y: 15,
              opacity: 0,
              duration: 0.4,
            },
            "-=0.15"
          )

          .from(
            ".about-feature-item",
            {
              y: 20,
              opacity: 0,
              duration: 0.45,
              stagger: 0.1,
            },
            "-=0.2"
          );
      });

      /* ================================================
         FLOATING DECORATIONS
      ================================================= */

      gsap.to(".about-plant", {
        y: -8,
        rotation: 2,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".about-books", {
        y: -6,
        rotation: -2,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
      });

      gsap.to(".about-mug", {
        y: -5,
        rotation: 2,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.7,
      });

      /* Cleanup matchMedia */

      return () => {
        desktopAnimation.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =====================================================
     SHOW MORE / SHOW LESS
  ===================================================== */

  const handleToggle = () => {
    if (!moreRef.current) return;

    if (!expanded) {
      /* OPEN */

      setExpanded(true);

      requestAnimationFrame(() => {
        if (!moreRef.current) return;

        const contentHeight = moreRef.current.scrollHeight;

        gsap.fromTo(
          moreRef.current,
          {
            height: 0,
            opacity: 0,
          },
          {
            height: contentHeight,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            onComplete: () => {
              if (moreRef.current) {
                gsap.set(moreRef.current, {
                  height: "auto",
                });
              }
            },
          }
        );
      });
    } else {
      /* CLOSE */

      gsap.to(moreRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setExpanded(false);
        },
      });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section py-5"
    >
      <div className="container">
        <div className="row align-items-center g-4">

          {/* =================================================
              LEFT IMAGE / VISUAL
          ================================================= */}

          <div className="col-lg-4 col-md-6">
            <div className="about-image-wrap">

              {/* Background decorative glow */}
              <div className="about-glow"></div>

              {/* Main frame */}
              <div className="about-frame-card">
                <p className="about-frame-text mb-1">
                  A Brighter Future Starts Here
                </p>

                <span className="about-frame-heart">
                  ❤️
                </span>
              </div>

              {/* Decorations */}
              <span className="about-plant">
                🪴
              </span>

              <span className="about-books">
                📚
              </span>

              <span className="about-mug">
                ☕
              </span>

            </div>
          </div>

          {/* =================================================
              CENTER CONTENT
          ================================================= */}

          <div className="col-lg-5 col-md-6">

            {/* Badge */}
            <span className="about-badge">
              🌿 About Sprouting Minds
            </span>

            {/* Heading */}
            <h2 className="about-heading my-3">
              Helping Young Minds Learn,
              Grow & Shine.
            </h2>

            {/* Paragraph */}
            <p className="about-text mb-3">
              At{" "}
              <strong>
                Sprouting Minds Tuition Classes
              </strong>
              , we believe every child can learn and grow
              with the right guidance, encouragement and
              individual attention.
            </p>

            {/* Paragraph */}
            <p className="about-text mb-4">
              Led by{" "}
              <strong>
                Khushboo Choudhary (B.Sc. + B.Ed.)
              </strong>
              , our classes focus on strong concepts,
              regular practice and confidence building,
              with special attention given to students
              who need extra support.
            </p>

            {/* =================================================
                TEACHER CARD
            ================================================= */}

            <div className="about-teacher-card">

              <div className="about-teacher-icon">
                👩‍🏫
              </div>

              <div className="about-teacher-content">

                <h5 className="about-teacher-name">
                  Khushboo Choudhary
                </h5>

                <p className="about-teacher-qualification">
                  B.Sc. + B.Ed.
                </p>

              </div>

            </div>

            {/* =================================================
                MORE INFORMATION
            ================================================= */}

            <div
              ref={moreRef}
              className={`about-more ${
                expanded ? "open" : ""
              }`}
              aria-hidden={!expanded}
            >
              <div className="about-more-inner">

                <p className="about-text about-more-intro">
                  Our teaching approach combines concept
                  clarity, regular testing and personalized
                  support so that students can understand
                  topics better and become more confident
                  in their studies.
                </p>

                {/* More information */}
                <ul className="about-more-list">

                  {moreInfo.map((item) => (
                    <li key={item.label}>
                      <strong>
                        {item.label}:
                      </strong>{" "}
                      {item.value}
                    </li>
                  ))}

                </ul>

                {/* =================================================
                    CONFIDENCE BOX
                ================================================= */}

                <div className="about-confidence-box">

                  <span className="about-confidence-icon">
                    🌱
                  </span>

                  <div>

                    <strong>
                      Regular Tests for Confidence Building
                    </strong>

                    <p>
                      Tests help students practice regularly,
                      understand their progress and prepare
                      with greater confidence.
                    </p>

                  </div>

                </div>

              </div>
            </div>

            {/* =================================================
                KNOW MORE BUTTON
            ================================================= */}

            <button
              type="button"
              className="btn about-btn"
              onClick={handleToggle}
              aria-expanded={expanded}
            >
              {expanded
                ? "Show Less ↑"
                : "Know More →"}
            </button>

          </div>

          {/* =================================================
              RIGHT FEATURES
          ================================================= */}

          <div className="col-lg-3">
            <div className="about-features">

              {features.map((feature) => (
                <div
                  className="about-feature-item"
                  key={feature.title}
                >

                  {/* Icon */}
                  <div
                    className={`feature-icon ${feature.bg}`}
                  >
                    <span>
                      {feature.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="feature-content">

                    <h6 className="feature-title mb-0">
                      {feature.title}
                    </h6>

                    <p className="feature-desc mb-0">
                      {feature.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
