import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLang } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";
import { personalInfo } from "@/content/resume";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Params = Promise<{ lang: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};

  const t = getTranslations(lang);
  const meta = t.meta as Record<string, string>;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://marwenmaalawi.dev";

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "Mohamed Marwen Maalawi",
      "Full-Stack Engineer",
      "NestJS",
      "Next.js",
      "React Native",
      "Spring Boot",
      "Software Engineer Tunisia",
      "Senior Developer",
    ],
    authors: [{ name: personalInfo.name }],
    creator: personalInfo.name,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/${lang}`,
      title: meta.og_title,
      description: meta.og_description,
      siteName: personalInfo.name,
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.og_title,
      description: meta.og_description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
