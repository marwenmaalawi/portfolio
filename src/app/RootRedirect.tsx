"use client";

import { useLanguageRedirect } from "@/features/language";

export default function RootRedirect() {
  useLanguageRedirect();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "var(--bg-base)",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          border: "2px solid rgba(234, 88, 12, 0.2)",
          borderTopColor: "var(--accent-secondary)",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
