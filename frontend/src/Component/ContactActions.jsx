import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "../styles/contact-actions.css";

// ================= CONTACT DETAILS =================

const WHATSAPP_NUMBER = "919987834269";
const CALL_NUMBER = "919987834269";

const DISPLAY_NUMBER = "+91 99878 34269";

const WHATSAPP_MESSAGE =
  "Hello Sprouting Minds, I would like to know more about your classes.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// ===================================================

export default function ContactActions({
  variant = "hero",
  showWhatsApp = true,
  showCall = true,
}) {
  const [showCallModal, setShowCallModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // ================= CALL =================

  const handleCallClick = () => {
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
      window.location.href = `tel:+${CALL_NUMBER}`;
    } else {
      setShowCallModal(true);
    }
  };

  // ================= COPY NUMBER =================

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`+${CALL_NUMBER}`);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      alert(`Number: ${DISPLAY_NUMBER}`);
    }
  };

  // ================= CLOSE MODAL =================

  const closeModal = () => {
    setShowCallModal(false);
    setCopied(false);
  };

  // ================= ESC + SCROLL LOCK =================

  useEffect(() => {
    if (!showCallModal) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showCallModal]);

  return (
    <>
      {/* ================= BUTTONS ================= */}

      <div
        className={
          variant === "contact"
            ? "contact-actions contact-actions-contact"
            : variant === "navbar"
            ? "contact-actions contact-actions-navbar"
            : "contact-actions contact-actions-hero"
        }
      >
        {/* WhatsApp */}

        {showWhatsApp && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-action-btn contact-action-whatsapp"
          >
            <FaWhatsapp size={20} />

            <span>Enquire on WhatsApp</span>

            {variant === "hero" && <span>→</span>}
          </a>
        )}

        {/* Call */}

        {showCall && (
          <button
            type="button"
            onClick={handleCallClick}
            className="contact-action-btn contact-action-call"
          >
            <FaPhoneAlt size={16} />

            <span>Call Now</span>
          </button>
        )}
      </div>

      {/* ================= CALL POPUP ================= */}

      {showCallModal && (
        <div
          className="contact-call-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="contact-call-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-call-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}

            <button
              type="button"
              className="contact-call-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>

            {/* Icon */}

            <div className="contact-call-modal-icon">
              📞
            </div>

            {/* Title */}

            <h3
              id="contact-call-modal-title"
              className="contact-call-modal-title"
            >
              Call Sprouting Minds
            </h3>

            {/* Description */}

            <p className="contact-call-modal-sub">
              Call us on this number and we will be happy to help you.
            </p>

            {/* Number */}

            <div className="contact-call-modal-number">
              {DISPLAY_NUMBER}
            </div>

            {/* Actions */}

            <div className="contact-call-modal-actions">
              <button
                type="button"
                className="contact-call-modal-btn contact-call-modal-copy"
                onClick={handleCopy}
              >
                {copied ? "✅ Copied!" : "📋 Copy Number"}
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-call-modal-btn contact-call-modal-whatsapp"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}