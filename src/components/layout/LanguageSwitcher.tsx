"use client";

import { useRouter } from "next/navigation";
import { storeLang } from "@/features/language";
import type { Lang } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLang: Lang;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter();

  function switchTo(lang: Lang) {
    storeLang(lang);
    router.push(`/${lang}`);
  }

  const other: Lang = currentLang === "en" ? "fr" : "en";
  const labels: Record<Lang, { flag: string; label: string }> = {
    en: { flag: "🇺🇸", label: "EN" },
    fr: { flag: "🇫🇷", label: "FR" },
  };

  return (
    <button
      onClick={() => switchTo(other)}
      title={`Switch to ${other === "en" ? "English" : "Français"}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.375rem",
        padding: "0.375rem 0.625rem",
        borderRadius: 8,
        background: "var(--bg-card)",
        border: "1px solid var(--bg-border)",
        color: "var(--text-secondary)",
        fontSize: "0.75rem",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s ease",
        letterSpacing: "0.05em",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.4)";
        (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--bg-border)";
        (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
      }}
    >
      <span style={{ fontSize: "0.875rem" }}>{labels[other].flag}</span>
      <span>{labels[other].label}</span>
    </button>
  );
}
