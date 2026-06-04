"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import type { Lang } from "@/lib/utils";



const resumeCards = (t: Record<string, string>, lang: Lang) => [
  {
    id: "en",
    flag: "🇺🇸",
    title: t.en_title,
    desc: t.en_desc,
    file: "/resumes/resume-en.pdf",
    highlight: lang === "en",
    color: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.3)",
  },
  {
    id: "fr",
    flag: "🇫🇷",
    title: t.fr_title,
    desc: t.fr_desc,
    file: "/resumes/resume-fr.pdf",
    highlight: lang === "fr",
    color: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.3)",
  },
  {
    id: "exec",
    flag: "💼",
    title: t.executive_title,
    desc: t.executive_desc,
    file: "/resumes/resume-executive.pdf",
    highlight: false,
    color: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.25)",
  },
  {
    id: "tech",
    flag: "⚙️",
    title: t.technical_title,
    desc: t.technical_desc,
    file: "/resumes/resume-technical.pdf",
    highlight: false,
    color: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.25)",
  },
];

export default function ResumeSection({ lang, t }: SectionProps) {
  const res = t.resume as Record<string, string>;
  const cards = resumeCards(res, lang);

  return (
    <section id="resume" className="section" style={{ background: "var(--bg-surface)" }}>
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
              <a
                href={card.file}
                download
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: "1.5rem",
                  borderRadius: 14,
                  background: card.highlight ? card.color : "var(--bg-card)",
                  border: `1px solid ${card.highlight ? card.border : "var(--bg-border)"}`,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 8px 30px rgba(99,102,241,0.2)";
                  el.style.borderColor = card.border;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = card.highlight ? card.border : "var(--bg-border)";
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
                <div style={{ fontSize: "2rem" }}>{card.flag}</div>
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
                  {res.download}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




