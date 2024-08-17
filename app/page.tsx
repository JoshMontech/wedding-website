import HeroBanner from "@/components/HeroBanner";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-between">
      <Section className="h-[calc(100vh-100px)]">
        <HeroBanner />
      </Section>
      <Section>
        <HeroBanner />
      </Section>
    </div>
  );
}
