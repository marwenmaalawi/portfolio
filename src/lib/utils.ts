// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Lang = "en" | "fr";

export function t<T extends { en: string; fr: string }>(obj: T, lang: Lang): string {
  return obj[lang];
}
