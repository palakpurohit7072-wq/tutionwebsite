import React from "react";
import "../styles/oursubjects.css";

const subjects = [
  {
    icon: "🧮",
    title: "Mathematics",
    tagline: "Practice • Logic • Confidence",
    bg: "subject-icon-red",
  },
  {
    icon: "🧪",
    title: "Science",
    tagline: "Understand • Explore • Grow",
    bg: "subject-icon-green",
  },
  {
    icon: "📖",
    title: "English",
    tagline: "Read • Write • Communicate",
    bg: "subject-icon-blue",
  },
  {
    icon: "अ",
    title: "Hindi",
    tagline: "Learn • Express • Excel",
    bg: "subject-icon-orange",
  },
  {
    icon: "🌐",
    title: "Social Science",
    tagline: "Discover • Understand • Apply",
    bg: "subject-icon-purple",
  },
];

export default function OurSubjects() {
  /* =========================================
     DESKTOP MOUSE MOVE
  ========================================= */

  const handlePointerMove = (e) => {
    const card = e.currentTarget;

    /*
      Mobile par pointer movement ki zarurat nahi.
      Sirf mouse/desktop par tilt calculate hoga.
    */
    if (window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    /* Spotlight position */

    const mouseX = (x / rect.width) * 100;
    const mouseY = (y / rect.height) * 100;

    card.style.setProperty("--mouse-x", `${mouseX}%`);
    card.style.setProperty("--mouse-y", `${mouseY}%`);

    /* 3D Tilt */

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };


  /* =========================================
     POINTER LEAVE
  ========================================= */

  const handlePointerLeave = (e) => {
    const card = e.currentTarget;

    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
  };


  /* =========================================
     MOBILE TOUCH START
  ========================================= */

  const handlePointerDown = (e) => {
    const card = e.currentTarget;

    /*
      Mobile tap ke time spotlight ko
      card ke center ke aas-paas rakho.
    */

    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "45%");

    card.classList.add("mobile-active");
  };


  /* =========================================
     MOBILE TOUCH END
  ========================================= */

  const handlePointerUp = (e) => {
    const card = e.currentTarget;

    /*
      Animation ko thoda visible rehne do.
    */

    setTimeout(() => {
      card.classList.remove("mobile-active");
    }, 750);
  };


  /* =========================================
     RENDER
  ========================================= */

  return (
    <section
      id="subjects"
      className="subjects-section py-5"
    >
      <div className="container">

        {/* =====================================
            BADGE
        ===================================== */}

        <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
          <span className="subjects-badge">
            🌿 Our Subjects
          </span>
        </div>


        {/* =====================================
            HEADING
        ===================================== */}

        <h2 className="subjects-heading mb-4">
          Subjects We Teach
        </h2>


        {/* =====================================
            SUBJECT CARDS
        ===================================== */}

        <div className="row g-3">

          {subjects.map((subject, index) => (
            <div
              className="col-6 col-md-4 col-lg"
              key={subject.title}
            >

              <div
                className="subject-card h-100"

                style={{
                  "--card-delay": `${index * 90}ms`,
                }}

                onPointerMove={handlePointerMove}

                onPointerLeave={handlePointerLeave}

                onPointerDown={handlePointerDown}

                onPointerUp={handlePointerUp}

                onPointerCancel={handlePointerUp}
              >

                {/* =================================
                    SPOTLIGHT
                ================================= */}

                <div className="card-spotlight" />


                {/* =================================
                    SHINE
                ================================= */}

                <div className="card-glare" />


                {/* =================================
                    ICON
                ================================= */}

                <div
                  className={`subject-icon ${subject.bg}`}
                >
                  <span>
                    {subject.icon}
                  </span>
                </div>


                {/* =================================
                    TITLE
                ================================= */}

                <h5 className="subject-title">
                  {subject.title}
                </h5>


                {/* =================================
                    TAGLINE
                ================================= */}

                <p className="subject-tagline mb-0">
                  {subject.tagline}
                </p>


                {/* =================================
                    BOTTOM GLOW
                ================================= */}

                <div className="card-bottom-glow" />

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

