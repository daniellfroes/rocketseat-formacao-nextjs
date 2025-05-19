import {
  CustomerStorySection,
  FeaturesSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections";

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeaturesSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  );
}
