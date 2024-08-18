"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Hammersmith_One } from "next/font/google";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

const MobileContent = () => {
  return (
    <div className="h-full flex bg-white-primary relative">
      <div className="absolute h-full w-full z-[0]">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/aboutus.jpg"
        />
      </div>
      <div className="absolute bg-white-primary/70 z-10 w-full h-full flex-1 flex flex-col px-8 gap-4 items-center justify-start pt-16">
        <h3 className={`text-4xl ${hammersmithOne}`}>OUR STORY</h3>
        <div className="">
          We met nearly 6 years ago on Hinge in April 2019. Our first date, we
          met at a coffee shop and loved the date so much we stayed until they
          closed. The rest is history; since then we&apos;ve been to 5
          countries, 2 world wonders, and many other adventures along the way.
          We&apos;re looking forward to furthering our journey as we take this
          next step in marriage!
        </div>
      </div>
    </div>
  );
};

const DesktopContent = () => {
  return (
    <div className="h-full flex bg-white-primary">
      <div className="h-full w-1/3">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/aboutus.jpg"
        />
      </div>
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center">
        <h3 className={`text-6xl ${hammersmithOne}`}>OUR STORY</h3>
        <div className="lg:text-sm lg:max-w-[600px]">
          We met nearly 6 years ago on Hinge in April 2019. We met at a coffee
          shop and loved the date so much we stayed until they closed. The rest
          is history; since then we&apos;ve been to 5 countries, 2 world
          wonders, and many other adventures along the way. We&apos;re looking
          forward to furthering our journey as we take this next step in
          marriage!
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return isDesktop ? <DesktopContent /> : <MobileContent />;
};

export default dynamic(() => Promise.resolve(AboutUs), { ssr: false });
