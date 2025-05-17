import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/feature-section";
import { SupportSection } from "@/components/support-section";
import { CustomerStorySection } from "@/components/customer-story-section";
import { CallToActionSection } from "@/components/call-to-action-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeaturesSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToActionSection />
      </article>
    </>
  );
}
