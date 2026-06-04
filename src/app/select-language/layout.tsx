import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Language — Mohamed Marwen Maalawi",
  description: "Select your preferred language to explore the portfolio.",
  robots: { index: false, follow: false },
};

export default function SelectLanguageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
