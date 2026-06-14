"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import type { Lang } from "@/lib/utils";
import GlowCard from "@/components/effects/GlowCard";
import PDFViewerModal from "@/components/effects/PDFViewerModal";

const resumeCards = (t: Record<string, string>, lang: Lang) => [
  {
    id: "en",
    flag: "🇺🇸",
    title: t.en_title,
    desc: t.en_desc,
    file: "/resumes/resume-en.pdf",
    highlight: lang === "en",
    glow: "99, 102, 241",
  },
  {
    id: "fr",
    flag: "🇫🇷",
    title: t.fr_title,
    desc: t.fr_desc,
    file: "/resumes/resume-fr.pdf",
    highlight: lang === "fr",
    glow: "99, 102, 241",
  },
  {
    id: "exec",
    flag: "💼",
    title: t.executive_title,
    desc: t.executive_desc,
    file: "/resumes/resume-executive.pdf",
    highlight: false,
    glow: "16, 185, 129",
  },
  {
    id: "tech",
    flag: "⚙️",
    title: t.technical_title,
    desc: t.technical_desc,
    file: "/resumes/resume-technical.pdf",
    highlight: false,
    glow: "245, 158, 11",
  },
];

export default function ResumeSection({ lang, t }: SectionProps) {
  const res = t.resume as Record<string, string>;
  const cards = resumeCards(res, lang);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const handleOpenPdf = (url: string, title: string) => {
    setSelectedPdf({ url, title });
    setModalOpen(true);
  };

  return (
    <section id="resume" className="section" style={{ background: "var(--bg-surface)" }}>
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "1rem", textAlign: "center" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>{res.section_label}</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            {res.section_title}
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: 480, margin: "0 auto" }}>
            {res.section_subtitle}
          </p>
        </motion.div>

        {/* Single source note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <div className="code-block" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 0.875rem" }}>
            <span style={{ color: "var(--text-muted)" }}>source:</span>
            <span style={{ color: "#a5b4fc" }}>src/content/resume.ts</span>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.25rem" }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div onClick={() => handleOpenPdf(card.file, card.title)} style={{ height: "100%", cursor: "pointer" }}>
                <GlowCard
                  glowColor={card.glow}
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    border: card.highlight ? `1px solid rgba(${card.glow}, 0.3)` : undefined,
                    background: card.highlight ? `rgba(${card.glow}, 0.06)` : undefined,
                  }}
                >
                  {card.highlight && (
                    <div
                      style={{
                        position: "absolute",
                        top: "0.75rem",
                        right: "0.75rem",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.5rem",
                        borderRadius: 9999,
                        background: "var(--gradient-primary)",
                        color: "white",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {lang === "en" ? "RECOMMENDED" : "RECOMMANDÉ"}
                    </div>
                  )}
                  <motion.div
                    style={{ fontSize: "2rem" }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {card.flag}
                  </motion.div>
                  <div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.375rem" }}>
                      {card.title}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                      {card.desc}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--accent-secondary)",
                      marginTop: "auto",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v9M5 7l3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {lang === "en" ? "View PDF" : "Voir le PDF"}
                  </div>
                </GlowCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPdf && (
        <PDFViewerModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          pdfUrl={selectedPdf.url}
          title={selectedPdf.title}
        />
      )}
    </section>
  );
}
