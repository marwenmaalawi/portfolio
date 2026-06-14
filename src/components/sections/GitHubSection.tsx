"use client";

import { motion } from "framer-motion";
import type { SectionProps } from "@/types";
import { personalInfo } from "@/content/resume";
import GlowCard from "@/components/effects/GlowCard";

const workflowItems = {
  en: [
    { icon: "🌿", title: "Branching Strategy", desc: "Git Flow with feature branches, develop and main. Release branches for versioning. Hotfix branches for production patches." },
    { icon: "🔍", title: "Code Reviews", desc: "Thorough PR reviews focusing on correctness, performance, maintainability and alignment with architecture decisions." },
    { icon: "📋", title: "Pull Requests", desc: "Descriptive PRs with context, screenshots when relevant, test evidence and linked issues for full traceability." },
    { icon: "🚀", title: "CI/CD Integration", desc: "GitHub Actions pipelines for automated linting, testing, build verification and deployment to staging and production." },
    { icon: "📦", title: "Release Management", desc: "Semantic versioning, release notes, changelogs and tagged releases for every production deployment." },
    { icon: "🤝", title: "Team Collaboration", desc: "Async-first communication, issue tracking, milestone planning and transparent engineering documentation." },
  ],
  fr: [
    { icon: "🌿", title: "Stratégie de Branchement", desc: "Git Flow avec branches feature, develop et main. Branches de release pour le versioning. Branches hotfix pour les patches production." },
    { icon: "🔍", title: "Code Reviews", desc: "Reviews de PR approfondies focalisées sur la correction, la performance, la maintenabilité et l'alignement avec les décisions d'architecture." },
    { icon: "📋", title: "Pull Requests", desc: "PRs descriptives avec contexte, screenshots si pertinents, preuves de tests et issues liées pour une traçabilité complète." },
    { icon: "🚀", title: "Intégration CI/CD", desc: "Pipelines GitHub Actions pour le linting automatisé, les tests, la vérification du build et le déploiement en staging et production." },
    { icon: "📦", title: "Gestion des Releases", desc: "Versioning sémantique, notes de release, changelogs et releases taguées pour chaque déploiement production." },
    { icon: "🤝", title: "Collaboration d'Équipe", desc: "Communication async-first, suivi des issues, planification des milestones et documentation d'ingénierie transparente." },
  ],
};

export default function GitHubSection({ lang, t }: SectionProps) {
  const gh = t.github as Record<string, string | string[]>;
  const items = workflowItems[lang];

  return (
    <section id="github" className="section aurora-bg">
      <hr className="section-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem" }}
        >
          <span className="section-label">{String(gh.section_label)}</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-primary)", margin: 0 }}>
              {String(gh.section_title)}
            </h2>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {String(gh.view_profile)}
            </a>
          </div>
        </motion.div>

        {/* GitHub Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rotating-border"
          style={{ padding: "1.75rem", marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", borderRadius: "var(--radius-lg)" }}
        >
          <div style={{ fontSize: "3rem" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(165,180,252,0.8)">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
              github.com/{personalInfo.githubUsername}
            </div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              {lang === "en"
                ? "Production-quality repositories · Clean commit history · Documented code"
                : "Dépôts de qualité production · Historique de commits propre · Code documenté"}
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: "0.8rem", padding: "0.5rem 1rem" }}
          >
            {lang === "en" ? "View Profile →" : "Voir le Profil →"}
          </a>
        </motion.div>

        {/* Workflow Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
            >
              <GlowCard style={{ padding: "1.25rem 1.5rem", height: "100%" }}>
                <motion.div
                  style={{ fontSize: "1.25rem", marginBottom: "0.625rem" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.375rem" }}>
                  {item.title}
                </div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
