"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Hammersmith_One } from "next/font/google";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

const MobileAboutUsContent = () => {
  return <div>mobile</div>;
};

const DesktopAboutUsContent = () => {
  return (
    <div className="h-full flex bg-white-primary">
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center">
        <h3 className={`text-5xl ${hammersmithOne}`}>TRAVEL INFO</h3>
        <div className="text-3xl">Coming Soon...</div>
      </div>
      <div className="h-full w-1/3">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/aboutus.jpg"
        />
      </div>
    </div>
  );
};

const TravelInfo = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return isDesktop ? <DesktopAboutUsContent /> : <MobileAboutUsContent />;
};

export default dynamic(() => Promise.resolve(TravelInfo), { ssr: false });
