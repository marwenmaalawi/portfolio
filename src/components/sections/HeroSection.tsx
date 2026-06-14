"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { SectionProps } from "@/types";
import { personalInfo, specializations } from "@/content/resume";

// Lazy load the 3D scene — no SSR, loaded only on client
const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
  loading: () => null,
});

/* ─── Typing effect for role ─── */
function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let intervalId: NodeJS.Timeout;
    let cursorTimeout: NodeJS.Timeout;

    const startTimeout = setTimeout(() => {
      if (!isMounted) return;
      let i = 0;
      intervalId = setInterval(() => {
        if (!isMounted) {
          clearInterval(intervalId);
          return;
        }
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(intervalId);
          cursorTimeout = setTimeout(() => {
            if (isMounted) setShowCursor(false);
          }, 2000);
        }
      }, 50);
    }, delay * 1000);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
      clearInterval(intervalId);
      clearTimeout(cursorTimeout);
    };
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          style={{ color: "var(--accent-primary)" }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

/* ─── Stagger container for pill animations ─── */
const pillContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 1.3 },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function HeroSection({ lang, t }: SectionProps) {
  const hero = t.hero;
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax float for avatar based on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const avatarRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="aurora-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "4.5rem",
      }}
    >
      {/* 3D Background Scene */}
      {mounted && (
        <div className="hero-3d-container">
          <HeroScene />
        </div>
      )}

      {/* Animated grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "4rem",
            alignItems: "center",
            maxWidth: 1240,
            margin: "0 auto",
          }}
          className="hero-grid"
        >
          {/* Left — Text */}
          <div style={{ maxWidth: 850 }}>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ marginBottom: "1.5rem" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.375rem 0.875rem",
                  borderRadius: 9999,
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="glow-dot" />
                <span style={{ fontSize: "0.8rem", color: "#6ee7b7", fontWeight: 600 }}>
                  {hero.available}
                </span>
              </div>
            </motion.div>

            {/* Name with gradient sweep */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ display: "inline-block", color: "var(--text-primary)" }}
              >
                Mohamed Marwen
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="gradient-text text-glow gradient-sweep"
                style={{ display: "inline-block" }}
              >
                Maalawi
              </motion.span>
            </h1>

            {/* Role — typing effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--accent-secondary)",
                fontWeight: 500,
                marginBottom: "1rem",
                fontFamily: "var(--font-mono)",
                minHeight: "1.8em",
              }}
            >
              <TypingText text={hero.role} delay={1.1} />
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: 560,
              }}
            >
              {hero.tagline}
            </motion.p>

            {/* Specializations — stagger spring */}
            <motion.div
              variants={pillContainerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {specializations.map((spec) => (
                <motion.span
                  key={spec}
                  variants={pillVariants}
                  className="tech-pill"
                  whileHover={{ scale: 1.08, boxShadow: "0 0 18px rgba(99,102,241,0.25)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {spec}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <motion.a
                href="#resume"
                className="btn btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v9M5 7l3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {hero.cta_resume}
              </motion.a>
              <motion.a
                href="#projects"
                className="btn btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {hero.cta_projects}
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-ghost"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {hero.cta_contact}
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              style={{
                marginTop: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3a1.5 1.5 0 0 1 0 3z" fill="currentColor" />
                </svg>
                {personalInfo.location}
              </div>

              {/* LinkedIn — icon only */}
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: "var(--accent-primary)" }}
                style={{ color: "var(--text-muted)", display: "flex", padding: 4 }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              {/* GitHub — icon only */}
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, color: "var(--accent-primary)" }}
                style={{ color: "var(--text-muted)", display: "flex", padding: 4 }}
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right — Avatar with parallax float and continuous breathing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-avatar"
            style={{
              position: "relative",
              flexShrink: 0,
              y: avatarY,
              rotate: avatarRotate,
            }}
          >
            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotateZ: [0, 1.5, -1.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "relative",
              }}
            >
              {/* Hardware Accelerated Animated glow */}
              <motion.div
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  filter: "blur(32px)",
                  willChange: "transform, opacity",
                }}
              />
              {/* Gradient ring container */}
              <div className="avatar-ring" style={{
                position: "relative",
                width: "clamp(280px, 30vw, 420px)",
                height: "clamp(280px, 30vw, 420px)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {/* The image, inset by 3px from the ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: 3,
                    borderRadius: "50%",
                    overflow: "hidden",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/avatar.png"
                    alt="Mohamed Marwen Maalawi"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 8%" }}
                    priority
                    sizes="(max-width: 1024px) 280px, 420px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {hero.scroll}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) and (min-width: 769px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-avatar {
            display: flex !important;
            justify-content: center;
            margin: 0 auto 1.5rem;
            order: -1;
          }
          .hero-avatar > div:last-child > div:last-child {
            width: 140px !important;
            height: 140px !important;
          }
        }
        .gradient-sweep {
          background-size: 200% auto;
          animation: gradientSweep 4s ease-in-out infinite;
        }
        @keyframes gradientSweep {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </section>
  );
}
