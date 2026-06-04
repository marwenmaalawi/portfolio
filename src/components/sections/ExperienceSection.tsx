"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import { experience } from "@/content/resume";



const typeColors: Record<string, string> = {
  fulltime: "badge-green",
  freelance: "badge-yellow",
};

const typeLabels = {
  fulltime: { en: "Full-time", fr: "Temps plein" },
  freelance: { en: "Freelance", fr: "Freelance" },
};

export default function ExperienceSection({ lang, t }: SectionProps) {
  const exp = t.experience as Record<string, string>;

  return (
    <section id="experience" className="section" style={{ background: "var(--bg-surface)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">{exp.section_label}</span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            {exp.section_title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {experience.map((job, i) => {
            const role = typeof job.role === "object" ? job.role[lang] : job.role;
            const company = typeof job.company === "object" ? job.company[lang] : job.company;
            const period = job.period[lang];
            const responsibilities = job.responsibilities[lang];
            const isLast = i === experience.length - 1;

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.5rem",
                  position: "relative",
                  paddingBottom: isLast ? 0 : "2.5rem",
                }}
              >
                {/* Timeline column */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 40 }}>
                  {/* Dot */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: i === 0
                        ? "var(--gradient-primary)"
                        : "var(--bg-card)",
                      border: i === 0
                        ? "none"
                        : "1px solid rgba(99,102,241,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                      boxShadow: i === 0 ? "0 0 20px rgba(99,102,241,0.4)" : "none",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 6a6 6 0 1 0 0-6 6 6 0 0 0 0 6z" fill={i === 0 ? "white" : "rgba(99,102,241,0.6)"} />
                    </svg>
                  </div>

                  {/* Line */}
                  {!isLast && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        background: "linear-gradient(to bottom, rgba(99,102,241,0.3), rgba(99,102,241,0.05))",
                        marginTop: 4,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="glass-card" style={{ padding: "1.5rem 1.75rem", marginBottom: 0 }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                          {role}
                        </h3>
                        <span className={`badge ${typeColors[job.type]}`}>
                          {typeLabels[job.type][lang]}
                        </span>
                        {i === 0 && (
                          <span className="badge badge-green" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                            <span className="glow-dot" style={{ width: 6, height: 6 }} />
                            {exp.current}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "var(--accent-secondary)", fontWeight: 600, margin: 0 }}>
                        {company}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: "0.775rem",
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.625rem" }}>
                      {exp.responsibilities}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {[...responsibilities].map((r, ri) => (
                        <li key={ri} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                          <span style={{ color: "var(--accent-primary)", marginTop: "0.3rem", flexShrink: 0, fontSize: "0.6rem" }}>◆</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div>
                    <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.5rem" }}>
                      {exp.technologies}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                      {[...job.technologies].map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




