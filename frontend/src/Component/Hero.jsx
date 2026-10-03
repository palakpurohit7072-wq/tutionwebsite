import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import "../styles/hero.css";
import heroGirl from "../assets/images/hero-girl.png";
import ContactActions from "../Component/ContactActions";

gsap.registerPlugin(SplitText);

const features = [
  { icon: "📖", text: "Concept Based Learning" },
  { icon: "👥", text: "Small Batches" },
  { icon: "⭐", text: "Personal Attention" },
  { icon: "📊", text: "Regular Performance Updates" },
];

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // --------------------------------
      // Initial states
      // --------------------------------

      gsap.set(".hero-badge", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".hero-heading", {
        opacity: 1,
      });

      gsap.set(".hero-word", {
        opacity: 0,
        y: 70,
        rotateX: -70,
      });

      gsap.set(".hero-text", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".hero-actions", {
        opacity: 0,
        y: 25,
      });

      gsap.set(".feature-item", {
        opacity: 0,
        y: 30,
        scale: 0.9,
      });

      gsap.set(".hero-image", {
        opacity: 0,
        scale: 0.75,
        y: 50,
        rotate: -3,
      });

      gsap.set(".floating-note", {
        opacity: 0,
        scale: 0.7,
      });

      gsap.set(".sun-icon", {
        opacity: 0,
        scale: 0,
        rotate: -90,
      });

      gsap.set(".book", {
        opacity: 0,
        x: 60,
        rotate: 8,
        scale: 0.8,
      });

      gsap.set(".mug-note", {
        opacity: 0,
        y: 20,
      });

      // --------------------------------
      // HERO TIMELINE
      // --------------------------------

      tl.to(".hero-badge", {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })

      // Heading words
      .to(
        ".hero-word",
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "back.out(1.4)",
        },
        "-=0.25"
      )

      // Paragraph
      .to(
        ".hero-text",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.25"
      )

      // Buttons
      .to(
        ".hero-actions",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.3"
      )

      // Feature cards
      .to(
        ".feature-item",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "back.out(1.5)",
        },
        "-=0.2"
      )

      // Girl
      .to(
        ".hero-image",
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.5)",
        },
        "-=0.9"
      )

      // Left note
      .to(
        ".note-left",
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.65"
      )

      // Right note
      .to(
        ".note-right",
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.5"
      )

      // Sun
      .to(
        ".sun-icon",
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: "back.out(2)",
        },
        "-=0.5"
      )

      // Books
      .to(
        ".book",
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.13,
          ease: "back.out(1.8)",
        },
        "-=0.4"
      )

      // Mug note
      .to(
        ".mug-note",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.25"
      );

      // --------------------------------
      // Girl floating animation
      // --------------------------------

      gsap.to(".hero-image", {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // --------------------------------
      // Notes floating
      // --------------------------------

      gsap.to(".note-left", {
        y: -8,
        rotate: -3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

      gsap.to(".note-right", {
        y: -10,
        rotate: 4,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.3,
      });

      // --------------------------------
      // Sun gentle rotation
      // --------------------------------

      gsap.to(".sun-icon", {
        rotate: 360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      // --------------------------------
      // Books gentle movement
      // --------------------------------

      gsap.to(".book", {
        y: -2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "sine.inOut",
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // --------------------------------
  // Mouse parallax
  // --------------------------------

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(".hero-image-wrap", {
      x: x * 12,
      y: y * 8,
      duration: 0.8,
      ease: "power2.out",
      overwrite: true,
    });

    gsap.to(".note-left", {
      x: x * -15,
      y: y * -8,
      duration: 0.8,
      ease: "power2.out",
      overwrite: true,
    });

    gsap.to(".note-right", {
      x: x * 18,
      y: y * 10,
      duration: 0.8,
      ease: "power2.out",
      overwrite: true,
    });
  };

  return (
    <section
      id="home"
      className="hero-section"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-7">

            <span className="hero-badge">
              🌱 Nurturing Young Minds
            </span>

            <h1 className="hero-heading">
              {"Small Steps Today, Brighter Futures Tomorrow"
                .split(" ")
                .map((word, index) => (
                  <span
                    className="hero-word"
                    key={index}
                    style={{
                      display: "inline-block",
                      marginRight: "0.25em",
                      perspective: "500px",
                    }}
                  >
                    {word}
                  </span>
                ))}
            </h1>

            <p className="hero-text">
              At Sprouting Minds, we help students learn with clarity, build
              confidence and achieve their goals.
            </p>

            <div className="hero-actions">
              <ContactActions variant="hero" />
            </div>

            <div className="feature-list">
              {features.map((item, index) => (
                <div className="feature-item" key={index}>
                  <span className="feature-icon">
                    {item.icon}
                  </span>

                  <span className="feature-text">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-5">

            <div className="hero-image-wrap">

              <span className="floating-note note-left">
                Learn
                <br />
                Grow
                <br />
                Shine 💚
              </span>

              <span className="floating-note note-right">
                Better
                <br />
                Students
                <br />
                Brighter
                <br />
                Futures ❤️
              </span>

              <span className="sun-icon">
                ☀️
              </span>

              <img
                src={heroGirl}
                alt="Happy student ready to learn"
                className="hero-image"
              />

              <div className="book-stack">

                <div className="book book-1">
                  DREAM
                </div>

                <div className="book book-2">
                  PRACTICE
                </div>

                <div className="book book-3">
                  LEARN
                </div>

                <div className="book book-4">
                  IMPROVE
                </div>

                <div className="book book-5">
                  SUCCEED
                </div>

              </div>

              <div className="mug-note">
                Good Ideas Start Here ❤️
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
