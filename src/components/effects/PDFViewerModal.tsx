"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFViewerModal({ isOpen, onClose, pdfUrl, title }: PDFViewerModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 1000,
              height: "90vh",
              background: "var(--bg-surface)",
              borderRadius: "16px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              margin: "0 1rem",
              border: "1px solid var(--border-light)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1rem 1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--border-light)",
                background: "var(--bg-base)",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                {title}
              </h3>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                {/* Download Button */}
                <a
                  href={pdfUrl}
                  download
                  className="btn btn-primary"
                  style={{ padding: "0.4rem 1rem", fontSize: "0.85rem", height: "auto" }}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginRight: 6 }}>
                    <path d="M8 1v9M5 7l3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Download PDF
                </a>
                {/* Close Button */}
                <button
                  onClick={onClose}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)", e.currentTarget.style.background = "var(--bg-card)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)", e.currentTarget.style.background = "transparent")}
                  aria-label="Close modal"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Iframe Content */}
            <div style={{ flex: 1, background: "#f3f4f6", position: "relative" }}>
              <object
                data={`${pdfUrl}#view=FitH&toolbar=0`}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ border: "none" }}
              >
                <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-secondary)" }}>
                  <p>Aperçu non disponible sur ce navigateur mobile.</p>
                  <p style={{ marginTop: "0.5rem" }}>
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-primary)", textDecoration: "underline" }}>
                      Cliquez ici pour l'ouvrir
                    </a>
                  </p>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
