import { notFound } from "next/navigation";
import { isValidLang, getTranslations } from "@/lib/i18n";
import type { Lang } from "@/lib/utils";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FeaturedProjectSection from "@/components/sections/FeaturedProjectSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import EngineeringSection from "@/components/sections/EngineeringSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

type Params = Promise<{ lang: string }>;

export default async function PortfolioPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const typedLang = lang as Lang;
  const t = getTranslations(typedLang);

  return (
    <>
      <HeroSection lang={typedLang} t={t} />
      <AboutSection lang={typedLang} t={t} />
      <ExperienceSection lang={typedLang} t={t} />
      <FeaturedProjectSection lang={typedLang} t={t} />
      <CaseStudiesSection lang={typedLang} t={t} />
      <PhilosophySection lang={typedLang} t={t} />
      <EngineeringSection lang={typedLang} t={t} />
      <GitHubSection lang={typedLang} t={t} />
      <ResumeSection lang={typedLang} t={t} />
      <ContactSection lang={typedLang} t={t} />
    </>
  );
}
