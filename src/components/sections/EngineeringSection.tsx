"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import { engineeringPractices, techStack } from "@/content/resume";



const categoryColors: Record<string, { bg: string; border: string; icon: string }> = {
  indigo: { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)", icon: "🏗️" },
  violet: { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)", icon: "⚡" },
  blue: { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)", icon: "📄" },
  emerald: { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", icon: "🚀" },
};

export default function EngineeringSection({ lang, t }: SectionProps) {
  const eng = t.engineering as Record<string, string>;

  return (
    <section id="engineering" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">{eng.section_label}</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
            {eng.section_title}
          </h2>
        </motion.div>

        {/* Practice Categories */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
          {engineeringPractices.map((category, ci) => {
            const colors = categoryColors[category.color] ?? categoryColors.indigo;
            return (
              <motion.div
                key={category.category.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                style={{
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: "1.5rem",
                }}
              >
                <div style={{ fontSize: "1.25rem", marginBottom: "0.625rem" }}>{colors.icon}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.875rem" }}>
                  {category.category[lang]}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {[...category.skills[lang]].map((skill) => (
                    <div key={skill} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--accent-primary)", fontSize: "0.55rem", flexShrink: 0 }}>◆</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
            {lang === "en" ? "Technology Stack" : "Stack Technologique"}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
            {Object.entries(techStack).map(([category, techs]) => {
              const catLabel: Record<string, { en: string; fr: string }> = {
                backend: { en: "Backend", fr: "Backend" },
                frontend: { en: "Frontend", fr: "Frontend" },
                mobile: { en: "Mobile", fr: "Mobile" },
                databases: { en: "Databases", fr: "Bases de données" },
                infrastructure: { en: "Infrastructure", fr: "Infrastructure" },
                integrations: { en: "Integrations", fr: "Intégrations" },
              };
              return (
                <div key={category} className="glass-card" style={{ padding: "1rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                    {catLabel[category]?.[lang] ?? category}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {[...techs].map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




