"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LANG_STORAGE_KEY = "mmm-preferred-lang";

export function getStoredLang(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(LANG_STORAGE_KEY);
}

export function storeLang(lang: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

export function useLanguageRedirect() {
  const router = useRouter();

  useEffect(() => {
    const stored = getStoredLang();
    if (stored === "en" || stored === "fr") {
      router.replace(`/${stored}`);
    } else {
      router.replace("/select-language");
    }
  }, [router]);
}
