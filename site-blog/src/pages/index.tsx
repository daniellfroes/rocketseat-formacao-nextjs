import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/feature";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <Features />
      </article>
    </>
  );
}
