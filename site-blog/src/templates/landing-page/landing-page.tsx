import {
  CallToActionSection,
  CustomerStorySection,
  FeaturesSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections";

export function LandingPage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  );
}
