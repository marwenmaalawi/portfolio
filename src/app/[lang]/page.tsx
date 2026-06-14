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
import ScrollReveal from "@/components/effects/ScrollReveal";

type Params = Promise<{ lang: string }>;

export default async function PortfolioPage({ params }: { params: Params }) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  const typedLang = lang as Lang;
  const t = getTranslations(typedLang);

  return (
    <>
      <HeroSection lang={typedLang} t={t} />
      <ScrollReveal>
        <AboutSection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <ExperienceSection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjectSection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <CaseStudiesSection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <PhilosophySection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <EngineeringSection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <GitHubSection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <ResumeSection lang={typedLang} t={t} />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection lang={typedLang} t={t} />
      </ScrollReveal>
    </>
  );
}
