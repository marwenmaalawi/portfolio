import type { Lang } from "@/lib/utils";
import en from "@/translations/en.json";
import fr from "@/translations/fr.json";

type Translations = typeof en;

export function getTranslations(lang: Lang): Translations {
  return lang === "fr" ? fr : en;
}

export function isValidLang(lang: string): lang is Lang {
  return lang === "en" || lang === "fr";
}

export const SUPPORTED_LANGS: Lang[] = ["en", "fr"];
export const DEFAULT_LANG: Lang = "en";
