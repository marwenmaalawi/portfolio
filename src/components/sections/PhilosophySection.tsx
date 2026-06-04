"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import { engineeringPhilosophy } from "@/content/resume";



const iconMap: Record<string, string> = {
  Layers: "🏗️",
  Target: "🎯",
  TrendingUp: "📈",
  Wrench: "🔧",
  Zap: "⚡",
  FileText: "📄",
  CheckCircle: "✅",
  Activity: "🚀",
};

export default function PhilosophySection({ lang, t }: SectionProps) {
  const phil = t.philosophy as Record<string, string>;

  return (
    <section id="philosophy" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            {phil.section_label}
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
            {phil.section_title}
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {engineeringPhilosophy.map((principle, i) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card"
              style={{ padding: "1.5rem", transition: "all 0.25s ease" }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                {iconMap[principle.icon] || "🔷"}
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                {principle.title[lang]}
              </h3>
              <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                {principle.description[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




