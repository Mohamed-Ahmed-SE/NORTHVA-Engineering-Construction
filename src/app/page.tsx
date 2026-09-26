import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { StatementSection } from "@/components/home/StatementSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { TimelineSection } from "@/components/home/TimelineSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <StatisticsSection />
      <FeaturedProjectsSection />
      <ExpertiseSection />
      <StatementSection />
      <SectorsSection />
      <SustainabilitySection />
      <TechnologySection />
      <TimelineSection />
      <ClientsSection />
      <CtaSection />
    </>
  );
}
