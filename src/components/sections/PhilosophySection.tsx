"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import { engineeringPhilosophy } from "@/content/resume";
import GlowCard from "@/components/effects/GlowCard";

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

const glowColors = [
  "99, 102, 241",
  "139, 92, 246",
  "6, 182, 212",
  "16, 185, 129",
  "245, 158, 11",
  "236, 72, 153",
  "99, 102, 241",
  "139, 92, 246",
];

export default function PhilosophySection({ lang, t }: SectionProps) {
  const phil = t.philosophy as Record<string, string>;

  return (
    <section id="philosophy" className="section aurora-bg">
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 100 }}
            >
              <GlowCard
                style={{ padding: "1.5rem", height: "100%" }}
                glowColor={glowColors[i % glowColors.length]}
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `rgba(${glowColors[i % glowColors.length]}, 0.12)`,
                    border: `1px solid rgba(${glowColors[i % glowColors.length]}, 0.2)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  {iconMap[principle.icon] || "🔷"}
                </motion.div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  {principle.title[lang]}
                </h3>
                <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                  {principle.description[lang]}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
