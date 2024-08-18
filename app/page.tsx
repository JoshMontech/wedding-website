import AboutUs from "@/components/AboutUs";
import Details from "@/components/Details";
import Faq from "@/components/Faq";
import HeroBanner from "@/components/HeroBanner";
import Links from "@/components/Links";
import Schedule from "@/components/Schedule";
import Section from "@/components/Section";
import TravelInfo from "@/components/TravelInfo";
import useSectionIntersection from "./hooks/useSectionIntersection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-between">
      <Section id="hero" className="h-[calc(100vh-100px)]">
        <HeroBanner />
      </Section>
      <Section id="about" className="h-[calc(100vh-100px)]">
        <AboutUs />
      </Section>
      <Section id="details" className="h-[calc(100vh-100px)]">
        <Details />
      </Section>
      <Section id="schedule" className="h-[calc(100vh-100px)]">
        <Schedule />
      </Section>
      <Section id="travel" className="h-[calc(100vh-100px)]">
        <TravelInfo />
      </Section>
      <Section id="faq" className="h-[calc(100vh-100px)]">
        <Faq />
      </Section>
      <Section id="links" className="h-[calc(100vh-100px)]">
        <Links />
      </Section>
    </div>
  );
}
