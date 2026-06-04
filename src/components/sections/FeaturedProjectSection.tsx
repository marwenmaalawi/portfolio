"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { SectionProps } from "@/types";
import { featuredProject } from "@/content/resume";

export default function FeaturedProjectSection({ lang, t }: SectionProps) {
  const feat = t.featured as Record<string, string>;
  const proj = featuredProject;

  const [storefrontTab, setStorefrontTab] = useState<"home" | "catalog">("home");
  const [adminTab, setAdminTab] = useState<"automations" | "newsletter">("automations");

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <span className="section-label">{feat.section_label}</span>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 0.5rem 0" }}>
                <span className="gradient-text">{feat.section_title}</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", margin: 0 }}>
                {feat.section_subtitle}
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href={proj.storefrontUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                <span>🌐</span> {feat.live_storefront}
              </a>
              <a href={proj.adminUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}>
                <span>⚙️</span> {feat.live_admin}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-accent"
          style={{ padding: "2rem", marginBottom: "3rem", borderRadius: 16 }}
        >
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
            {proj.description[lang]}
          </p>
        </motion.div>

        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
            🏗️ {feat.architecture_title}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              {
                layer: lang === "en" ? "Frontend" : "Frontend",
                icon: "🖥️",
                items: proj.stack.frontend,
                color: "rgba(99,102,241,0.1)",
                border: "rgba(99,102,241,0.25)",
              },
              {
                layer: "Backend",
                icon: "⚙️",
                items: proj.stack.backend,
                color: "rgba(139,92,246,0.1)",
                border: "rgba(139,92,246,0.25)",
              },
              {
                layer: lang === "en" ? "Infrastructure" : "Infrastructure",
                icon: "🚀",
                items: proj.stack.infrastructure,
                color: "rgba(16,185,129,0.08)",
                border: "rgba(16,185,129,0.2)",
              },
              {
                layer: "Marketing",
                icon: "📊",
                items: proj.stack.marketing,
                color: "rgba(245,158,11,0.08)",
                border: "rgba(245,158,11,0.2)",
              },
            ].map((layer) => (
              <div
                key={layer.layer}
                style={{
                  background: layer.color,
                  border: `1px solid ${layer.border}`,
                  borderRadius: 12,
                  padding: "1.25rem",
                }}
              >
                <div style={{ fontSize: "1.1rem", marginBottom: "0.625rem" }}>{layer.icon}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
                  {layer.layer}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  {layer.items.map((item) => (
                    <span key={item} className="tech-pill" style={{ alignSelf: "flex-start" }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="screenshots-grid">
            {/* Storefront */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", minHeight: "2rem" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  🌐 {lang === "en" ? "Storefront" : "Boutique Client"}
                </div>
                <div style={{ display: "flex", gap: "0.25rem", background: "rgba(255,255,255,0.03)", padding: "3px", borderRadius: 8, border: "1px solid var(--bg-border)" }}>
                  <button
                    onClick={() => setStorefrontTab("home")}
                    style={{
                      background: storefrontTab === "home" ? "rgba(99,102,241,0.15)" : "transparent",
                      border: "none",
                      color: storefrontTab === "home" ? "var(--text-primary)" : "var(--text-muted)",
                      borderRadius: 6,
                      padding: "0.25rem 0.625rem",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "all 0.2s"
                    }}
                  >
                    {lang === "en" ? "Home" : "Accueil"}
                  </button>
                  <button
                    onClick={() => setStorefrontTab("catalog")}
                    style={{
                      background: storefrontTab === "catalog" ? "rgba(99,102,241,0.15)" : "transparent",
                      border: "none",
                      color: storefrontTab === "catalog" ? "var(--text-primary)" : "var(--text-muted)",
                      borderRadius: 6,
                      padding: "0.25rem 0.625rem",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "all 0.2s"
                    }}
                  >
                    {lang === "en" ? "Catalog" : "Catalogue"}
                  </button>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--bg-border)",
                  background: "var(--bg-card)",
                  aspectRatio: "16/10",
                  position: "relative",
                }}
              >
                <Image
                  src={storefrontTab === "home" ? "/screenshots/storefront_home.png" : "/screenshots/storefront_catalog.png"}
                  alt="Antigravity Sneakers Storefront"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            {/* Admin */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", minHeight: "2rem" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  ⚙️ {lang === "en" ? "Admin Panel" : "Console Admin"}
                </div>
                <div style={{ display: "flex", gap: "0.25rem", background: "rgba(255,255,255,0.03)", padding: "3px", borderRadius: 8, border: "1px solid var(--bg-border)" }}>
                  <button
                    onClick={() => setAdminTab("automations")}
                    style={{
                      background: adminTab === "automations" ? "rgba(99,102,241,0.15)" : "transparent",
                      border: "none",
                      color: adminTab === "automations" ? "var(--text-primary)" : "var(--text-muted)",
                      borderRadius: 6,
                      padding: "0.25rem 0.625rem",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "all 0.2s"
                    }}
                  >
                    Automations
                  </button>
                  <button
                    onClick={() => setAdminTab("newsletter")}
                    style={{
                      background: adminTab === "newsletter" ? "rgba(99,102,241,0.15)" : "transparent",
                      border: "none",
                      color: adminTab === "newsletter" ? "var(--text-primary)" : "var(--text-muted)",
                      borderRadius: 6,
                      padding: "0.25rem 0.625rem",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "all 0.2s"
                    }}
                  >
                    Newsletter
                  </button>
                </div>
              </div>
              <div
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--bg-border)",
                  background: "var(--bg-card)",
                  aspectRatio: "16/10",
                  position: "relative",
                }}
              >
                <Image
                  src={adminTab === "automations" ? "/screenshots/admin_automations.png" : "/screenshots/admin_newsletter.png"}
                  alt="Antigravity Sneakers Admin"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Admin Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.375rem" }}>
              🎛️ {feat.admin_title}
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
              {feat.admin_subtitle}
            </p>
          </div>

          {/* CMS Screenshot */}
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(99,102,241,0.2)",
              background: "var(--bg-card)",
              aspectRatio: "16/8",
              position: "relative",
              marginBottom: "1.5rem",
            }}
          >
            <Image
              src="/screenshots/admin_newsletter.png"
              alt="Antigravity Sneakers CMS Page Builder"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>

          {/* Admin features grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "0.625rem" }}>
            {[...proj.adminFeatures[lang]].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                style={{
                  display: "flex",
                  gap: "0.625rem",
                  alignItems: "flex-start",
                  padding: "0.75rem 1rem",
                  borderRadius: 8,
                  background: "var(--bg-card)",
                  border: "1px solid var(--bg-border)",
                  fontSize: "0.825rem",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "#10b981", marginTop: "0.1rem", flexShrink: 0, fontWeight: 700 }}>✓</span>
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem" }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
            📊 {feat.marketing_title}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
            {proj.marketingIntegrations.map((integration) => (
              <div key={integration.name} className="glass-card" style={{ padding: "1.25rem" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>
                  {integration.name}
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                  {integration.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* E-Commerce Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.5rem" }}>
            🛒 {feat.ecommerce_title}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "0.625rem" }}>
            {[...proj.ecommerceFeatures[lang]].map((feature, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "0.625rem",
                  alignItems: "flex-start",
                  padding: "0.875rem 1rem",
                  borderRadius: 8,
                  background: "rgba(99,102,241,0.05)",
                  border: "1px solid rgba(99,102,241,0.12)",
                  fontSize: "0.825rem",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "var(--accent-secondary)", marginTop: "0.15rem", flexShrink: 0, fontSize: "0.65rem" }}>◆</span>
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .screenshots-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}




