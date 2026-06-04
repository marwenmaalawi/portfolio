"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import { summary, spokenLanguages, personalInfo } from "@/content/resume";



const traits = {
  en: ["Fast Execution", "Technical Ownership", "Strong Autonomy", "Production Mindset", "Business Awareness"],
  fr: ["Exécution Rapide", "Propriété Technique", "Forte Autonomie", "Mindset Production", "Conscience Métier"],
};

export default function AboutSection({ lang, t }: SectionProps) {
  const about = t.about as Record<string, string | string[]>;

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">{String(about.section_label)}</span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
                color: "var(--text-primary)",
              }}
            >
              <span className="gradient-text">{String(about.positioning_label)}</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              {summary[lang]}
            </p>

            {/* Trait pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {traits[lang].map((trait) => (
                <span key={trait} className="badge">
                  {trait}
                </span>
              ))}
            </div>

            {/* Location & Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent-secondary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {personalInfo.email}
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill="currentColor" />
                </svg>
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Positioning card */}
            <div className="glass-card-accent" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {lang === "en" ? "Core Positioning" : "Positionnement"}
              </div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {String(about.positioning)}
              </p>
            </div>

            {/* Languages */}
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "0.75rem", color: "var(--accent-secondary)", fontWeight: 600, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {lang === "en" ? "Languages" : "Langues"}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {spokenLanguages.map((sl) => (
                  <div key={sl.language} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-primary)", fontWeight: 500 }}>
                      {sl.language}
                    </span>
                    <span className="badge">
                      {sl.level[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {[
                { label: lang === "en" ? "Years Experience" : "Ans d'Expérience", value: "3+" },
                { label: lang === "en" ? "Production Systems" : "Systèmes Production", value: "10+" },
                { label: lang === "en" ? "Tech Stack" : "Stack Technique", value: "15+" },
                { label: lang === "en" ? "Team Collaboration" : "Collaboration Équipe", value: "✓" },
              ].map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.25rem" }} className="gradient-text">
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}




