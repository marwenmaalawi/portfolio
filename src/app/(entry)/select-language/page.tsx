"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { storeLang } from "@/features/language";

const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), {
  ssr: false,
  loading: () => null,
});

const languages = [
  {
    code: "en",
    flag: "🇺🇸",
    label: "English",
    sub: "Continue in English",
  },
  {
    code: "fr",
    flag: "🇫🇷",
    label: "Français",
    sub: "Continuer en Français",
  },
];

/* ─── Glitch Text Animation ─── */
function GlitchText({ children }: { children: string }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <motion.span
        animate={{
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 rgba(99,102,241,0.3), -2px 0 0 rgba(6,182,212,0.3)",
            "0 0 0 transparent",
            "-1px 0 0 rgba(139,92,246,0.2), 1px 0 0 rgba(236,72,153,0.2)",
            "0 0 0 transparent",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function LanguageSelectorPage() {
  const router = useRouter();

  function handleSelect(lang: string) {
    storeLang(lang);
    router.push(`/${lang}`);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        background: "var(--bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Particle Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticleField particleCount={100} connectionDistance={130} color="99, 102, 241" />
      </div>

      {/* Aurora gradients */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
      `}</style>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
          maxWidth: 640,
          width: "100%",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ textAlign: "center" }}
        >
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 0.875rem",
              borderRadius: 9999,
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              marginBottom: "2rem",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="glow-dot" />
            <span style={{ fontSize: "0.75rem", color: "#6ee7b7", fontWeight: 600 }}>
              Available for new opportunities
            </span>
          </motion.div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="gradient-text text-glow">
              <GlitchText>Mohamed Marwen</GlitchText>
            </span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>Maalawi</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
              color: "var(--text-secondary)",
              fontWeight: 400,
              marginBottom: "0.5rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            Full-Stack Software Engineer
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              width: 48,
              height: 2,
              background: "var(--gradient-primary)",
              margin: "1.25rem auto",
              borderRadius: 2,
              boxShadow: "0 0 12px rgba(99,102,241,0.3)",
            }}
          />

          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", fontWeight: 400 }}>
            Select your preferred language to continue.
          </p>
        </motion.div>

        {/* Language Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            display: "flex",
            gap: "1.25rem",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {languages.map((lang, i) => (
            <motion.button
              key={lang.code}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 60px rgba(99,102,241,0.25), 0 0 30px rgba(99,102,241,0.1)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(lang.code)}
              className="lang-card"
              style={{ flex: "1 1 180px", maxWidth: 240 }}
            >
              <div style={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  className="flag"
                  style={{ fontSize: "3.5rem", lineHeight: 1 }}
                  whileHover={{ rotateY: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {lang.flag}
                </motion.div>
              </div>
              <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                  {lang.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 400 }}>
                  {lang.sub}
                </div>
              </div>
              {/* Glow arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(99,102,241,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a5b4fc",
                  fontSize: "0.8rem",
                  boxShadow: "0 0 12px rgba(99,102,241,0.2)",
                }}
              >
                →
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}
        >
          Your preference will be saved automatically.
        </motion.p>
      </div>
    </main>
  );
}
