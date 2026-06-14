"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionProps } from "@/types";
import { personalInfo } from "@/content/resume";
import GlowCard from "@/components/effects/GlowCard";
import Magnetic from "@/components/effects/Magnetic";

const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), {
  ssr: false,
  loading: () => null,
});

export default function ContactSection({ lang, t }: SectionProps) {
  const contact = t.contact as Record<string, string>;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const links = [
    {
      label: contact.email_label,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      onClick: handleCopyEmail,
      glow: "99, 102, 241",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5l7 6 7-6M3 5h14v10H3V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: contact.github_label,
      value: `@${personalInfo.githubUsername}`,
      href: personalInfo.github,
      onClick: undefined,
      glow: "139, 92, 246",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: contact.linkedin_label,
      value: "Marwen Maalawi",
      href: personalInfo.linkedin,
      onClick: undefined,
      glow: "6, 182, 212",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: contact.location_label,
      value: "Tunis, Tunisia",
      href: null,
      onClick: undefined,
      glow: "16, 185, 129",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C7.24 2 5 4.24 5 7c0 4.37 5 11 5 11s5-6.63 5-11c0-2.76-2.24-5-5-5zm0 6.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }} />

      {/* Particle background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticleField particleCount={60} connectionDistance={100} color="99, 102, 241" />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 3rem" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>{contact.section_label}</span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            <span className="text-glow">{contact.section_title}</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {contact.subtitle}
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem", maxWidth: 1300, margin: "0 auto" }}>
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: "flex" }}
            >
              {link.href ? (
                <Magnetic style={{ width: "100%", height: "100%" }}>
                  <GlowCard
                    as="a"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={link.onClick}
                    glowColor={link.glow}
                    style={{ padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center", width: "100%", height: "100%" }}
                  >
                    <div style={{ color: "var(--accent-secondary)", flexShrink: 0 }}>{link.icon}</div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "0.2rem" }}>
                        {link.label}
                      </div>
                      <div style={{ fontSize: "0.825rem", color: "var(--text-primary)", fontWeight: 500 }}>
                        {link.value}
                      </div>
                    </div>
                    <div style={{ color: "var(--text-muted)", opacity: 0.6, fontSize: "0.85rem", alignSelf: "flex-start", marginTop: "-0.2rem" }}>
                      ↗
                    </div>
                  </GlowCard>
                </Magnetic>
              ) : (
                <GlowCard glowColor={link.glow} style={{ padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "center", width: "100%" }}>
                  <div style={{ color: "var(--accent-secondary)", flexShrink: 0 }}>{link.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: "0.2rem" }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: "0.825rem", color: "var(--text-primary)", fontWeight: 500 }}>
                      {link.value}
                    </div>
                  </div>
                </GlowCard>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              zIndex: 999,
              background: "var(--bg-card-solid)",
              border: "1px solid var(--bg-border-hover)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(99,102,241,0.1)",
              padding: "0.75rem 1.25rem",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backdropFilter: "blur(20px)",
            }}
          >
            <span style={{ color: "#6ee7b7", fontWeight: "bold" }}>✓</span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500 }}>
              {lang === "en" ? "Email copied to clipboard!" : "E-mail copié dans le presse-papiers !"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
