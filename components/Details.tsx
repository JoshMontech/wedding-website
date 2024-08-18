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
          src="/details.jpg"
        />
      </div>
      <div className="absolute bg-white-primary/70 z-10 w-full h-full flex-1 flex flex-col px-8 gap-4 items-center justify-start pt-16">
        <h3 className={`text-4xl ${hammersmithOne}`}>DETAILS</h3>
        <ul className="flex flex-col gap-4">
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHO:</span>
            <span>Our cherished friends and family</span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHAT:</span>
            <span>Small Family Ceremony + Friends and Family Celebration</span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHEN:</span>
            <span>
              April 19th, 2025 - Ceremony 3-5pm, Celebration 5:30-9:30pm
            </span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHERE:</span>
            <ul className="flex flex-col gap-2">
              <li>
                Ceremony: Chapel Dulcinea, 16221 Crystal Hills Drive, Austin,
                Texas 78737
              </li>
              <li>
                Celebration: Central District Brewing, 417 Red River St, Austin,
                TX 78701
              </li>
            </ul>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHY:</span>
            <div>
              To share this experience with you and those who make our lives
              great!
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DesktopContent = () => {
  return (
    <div className="h-full flex bg-white-primary">
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center">
        <h3 className={`text-6xl ${hammersmithOne}`}>DETAILS</h3>
        <ul className="flex flex-col gap-4">
          <li className="inline-flex gap-2 items-center">
            <span className="font-bold text-xl">WHO:</span>
            <span>Our cherished friends and family</span>
          </li>
          <li className="inline-flex gap-2 items-center">
            <span className="font-bold text-xl">WHAT:</span>
            <span>Family Ceremony + Friends & Family Celebration</span>
          </li>
          <li className="inline-flex gap-2 items-center">
            <span className="font-bold text-xl">WHEN:</span>
            <span>
              April 19th, 2025 - Ceremony 3-5pm, Celebration 5:30-9:30pm
            </span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHERE:</span>
            <ul className="flex flex-col gap-2">
              <li>
                Ceremony: Chapel Dulcinea, 16221 Crystal Hills Drive, Austin,
                Texas 78737
              </li>
              <li>
                Celebration: Central District Brewing, 417 Red River St, Austin,
                TX 78701
              </li>
            </ul>
          </li>
          <li className="inline-flex gap-2 items-center">
            <span className="font-bold text-xl">WHY:</span>
            <div>
              To share this experience with you and those who make our lives
              great!
            </div>
          </li>
        </ul>
      </div>
      <div className="h-full w-1/3">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/details.jpg"
        />
      </div>
    </div>
  );
};

const Details = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return isDesktop ? <DesktopContent /> : <MobileContent />;
};

export default dynamic(() => Promise.resolve(Details), { ssr: false });
