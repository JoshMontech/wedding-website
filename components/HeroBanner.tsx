import React from "react";
import Image from "next/image";
import { Hammersmith_One } from "next/font/google";
import Section from "./Section";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

const HeroBanner = () => {
  return (
    <>
      <div className="absolute top-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-semibold text-xl">Let&apos;s Celebrate</span>
        <h1
          className={`text-bold text-4xl lg:text-6xl ${hammersmithOne} text-nowrap`}
        >
          BEKAH & JOSH
        </h1>
        <span>April 19, 2025</span>
      </div>
      <Image
        width={2048}
        height={1352}
        fetchPriority="high"
        className="object-cover h-full w-full"
        src="/herobanner.jpg"
        alt="hero-banner"
      />
    </>
  );
};

export default HeroBanner;
