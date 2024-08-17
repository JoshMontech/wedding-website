import AboutUs from "@/components/AboutUs";
import Details from "@/components/Details";
import Faq from "@/components/Faq";
import HeroBanner from "@/components/HeroBanner";
import Links from "@/components/Links";
import Schedule from "@/components/Schedule";
import Section from "@/components/Section";
import TravelInfo from "@/components/TravelInfo";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-between">
      <Section className="h-[calc(100vh-100px)]">
        <HeroBanner />
      </Section>
      <Section className="h-[calc(100vh-100px)]">
        <AboutUs />
      </Section>
      <Section className="h-[calc(100vh-100px)]">
        <Details />
      </Section>
      <Section className="h-[calc(100vh-100px)]">
        <Schedule />
      </Section>
      <Section className="h-[calc(100vh-100px)]">
        <TravelInfo />
      </Section>
      <Section className="h-[calc(100vh-100px)]">
        <Faq />
      </Section>
      <Section className="h-[calc(100vh-100px)]">
        <Links />
      </Section>
    </div>
  );
}
