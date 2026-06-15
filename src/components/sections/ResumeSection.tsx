"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import type { SectionProps } from "@/types";
import type { Lang } from "@/lib/utils";
import GlowCard from "@/components/effects/GlowCard";
import PDFViewerModal from "@/components/effects/PDFViewerModal";

const CustomPDFViewer = dynamic(() => import("../effects/CustomPDFViewer"), {
  ssr: false,
  loading: () => <div style={{ padding: "4rem", textAlign: "center", color: "var(--text-muted)" }}>Chargement du document...</div>
});

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
  
  const defaultPdf = lang === "en" ? "/resumes/resume-en.pdf" : "/resumes/resume-fr.pdf";
  const [activePdfUrl, setActivePdfUrl] = useState<string>(defaultPdf);

  useEffect(() => {
    setActivePdfUrl(lang === "en" ? "/resumes/resume-en.pdf" : "/resumes/resume-fr.pdf");
  }, [lang]);

  const handleSelectPdf = (url: string) => {
    setActivePdfUrl(url);
    const element = document.getElementById('pdf-preview');
    if (element) {
      const yOffset = -80; // Offset for header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.25rem" }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div onClick={() => handleSelectPdf(card.file)} style={{ height: "100%", cursor: "pointer" }}>
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

        {/* Inline PDF Preview */}
        <motion.div
          id="pdf-preview"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: "4rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
              {lang === "en" ? "Live Preview" : "Aperçu en direct"}
            </h3>
            <a href={activePdfUrl} download className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", textDecoration: "none" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ marginRight: 6 }}>
                <path d="M8 1v9M5 7l3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {lang === "en" ? "Download PDF" : "Télécharger"}
            </a>
          </div>
          
          <div className="glass-card" style={{ height: "80vh", minHeight: "600px", padding: 0, overflow: "hidden", borderRadius: 16, display: "flex", flexDirection: "column", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            {/* Native Window Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1.25rem", background: "rgba(15, 23, 42, 0.03)", borderBottom: "1px solid var(--bg-border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
              </div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>
                {activePdfUrl.split('/').pop()}
              </div>
              <div style={{ width: 42 }}></div> {/* Balance spacer */}
            </div>

            {/* Viewer Body */}
            <div style={{ flex: 1, position: "relative", width: "100%", overflow: "hidden", background: "#f1f5f9" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", padding: "1rem" }}>
                <CustomPDFViewer url={activePdfUrl} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
