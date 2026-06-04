import type en from "@/translations/en.json";

export type Translations = typeof en;

export type SectionProps = {
  lang: "en" | "fr";
  t: Translations;
};
