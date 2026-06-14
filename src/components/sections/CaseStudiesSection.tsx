"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionProps } from "@/types";
import { caseStudies } from "@/content/resume";
import GlowCard from "@/components/effects/GlowCard";

export default function CaseStudiesSection({ lang, t }: SectionProps) {
  const cs = t.case_studies as Record<string, string>;
  const [activeId, setActiveId] = useState<string>(caseStudies[0].id);

  const activeStudy = caseStudies.find((c) => c.id === activeId) ?? caseStudies[0];

  return (
    <section id="case-studies" className="section" style={{ background: "var(--bg-surface)" }}>
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">{cs.section_label}</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
            {cs.section_title}
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "2rem" }} className="case-study-grid">
          {/* Left — Tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {caseStudies.map((study, i) => (
              <motion.button
                key={study.id}
                onClick={() => setActiveId(study.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  padding: "0.875rem 1rem",
                  borderRadius: 10,
                  border: activeId === study.id
                    ? "1px solid rgba(99,102,241,0.4)"
                    : "1px solid transparent",
                  background: activeId === study.id
                    ? "rgba(99,102,241,0.1)"
                    : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Active indicator glow */}
                {activeId === study.id && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      background: "var(--gradient-primary)",
                      borderRadius: "0 3px 3px 0",
                      boxShadow: "0 0 12px rgba(99,102,241,0.4)",
                    }}
                  />
                )}
                <span style={{ fontSize: "0.825rem", fontWeight: 600, color: activeId === study.id ? "#a5b4fc" : "var(--text-primary)" }}>
                  {study.title[lang]}
                </span>
                <span style={{ fontSize: "0.725rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <span style={{ fontSize: "0.6rem" }}>●</span>
                  {study.company} · {study.category[lang]}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right — Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <GlowCard style={{ padding: "2rem" }}>
                {/* Header */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", margin: 0 }}>
                      {activeStudy.title[lang]}
                    </h3>
                    <span className="badge">{activeStudy.category[lang]}</span>
                  </div>
                  <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", margin: 0 }}>
                    {activeStudy.company}
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }} className="cs-detail-grid">
                  {/* Problem */}
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                      🔍 {cs.problem}
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                      {activeStudy.problem[lang]}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                      ✅ {cs.solution}
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
                      {activeStudy.solution[lang]}
                    </p>
                  </div>
                </div>

                {/* Challenges */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.625rem" }}>
                    ⚡ {cs.challenges}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {[...activeStudy.challenges[lang]].map((ch, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                        style={{
                          padding: "0.25rem 0.625rem",
                          borderRadius: 6,
                          background: "rgba(99,102,241,0.06)",
                          border: "1px solid rgba(99,102,241,0.12)",
                          fontSize: "0.775rem",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  style={{
                    padding: "1rem 1.25rem",
                    borderRadius: 10,
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#6ee7b7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.375rem" }}>
                    🚀 {cs.impact}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#a7f3d0", lineHeight: 1.6, margin: 0 }}>
                    {activeStudy.impact[lang]}
                  </p>
                </motion.div>

                {/* Technologies */}
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                    {cs.technologies}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {[...activeStudy.technologies].map((tech) => (
                      <motion.span
                        key={tech}
                        className="tech-pill"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(99,102,241,0.2)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .case-study-grid { grid-template-columns: 1fr !important; }
          .cs-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
