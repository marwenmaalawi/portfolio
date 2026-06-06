"use client";

import Link from "next/link";
import type { Lang } from "@/lib/utils";
import { personalInfo } from "@/content/resume";

interface FooterProps {
  lang: Lang;
}

const year = new Date().getFullYear();

export default function Footer({ lang }: FooterProps) {
  const isEn = lang === "en";

  return (
    <footer
      style={{
        borderTop: "1px solid var(--bg-border)",
        padding: "2.5rem 0",
        marginTop: "4rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 7,
              background: "var(--gradient-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "white",
            }}
          >
            M
          </div>
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
            }}
          >
            {personalInfo.name}
          </span>
        </div>

        {/* Micro-CTA: availability signal */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 0.875rem",
            borderRadius: 9999,
            background: "rgba(16, 185, 129, 0.07)",
            border: "1px solid rgba(16, 185, 129, 0.18)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 6px #10b981",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: "0.75rem", color: "#166534", fontWeight: 600 }}>
            {isEn
              ? "Open to new opportunities · Available for freelance"
              : "Ouvert aux nouvelles opportunités · Disponible en freelance"}
          </span>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: personalInfo.email, href: `mailto:${personalInfo.email}` },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-secondary)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-muted)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.375rem",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            {isEn ? "Built with Next.js · Deployed on Vercel" : "Construit avec Next.js · Déployé sur Vercel"}
          </p>
          <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", opacity: 0.6 }}>
            © {year} {personalInfo.name} · {isEn ? "All rights reserved." : "Tous droits réservés."}
          </p>
        </div>

        {/* Language toggle */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link
            href="/en"
            style={{
              fontSize: "0.75rem",
              color: lang === "en" ? "var(--accent-secondary)" : "var(--text-muted)",
              textDecoration: "none",
              fontWeight: lang === "en" ? 600 : 400,
              transition: "color 0.2s",
            }}
          >
            🇺🇸 EN
          </Link>
          <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>·</span>
          <Link
            href="/fr"
            style={{
              fontSize: "0.75rem",
              color: lang === "fr" ? "var(--accent-secondary)" : "var(--text-muted)",
              textDecoration: "none",
              fontWeight: lang === "fr" ? 600 : 400,
              transition: "color 0.2s",
            }}
          >
            🇫🇷 FR
          </Link>
        </div>
      </div>
    </footer>
  );
}
