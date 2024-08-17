import { Hammersmith_One } from "next/font/google";
import Image from "next/image";
import React from "react";
import Divider from "./Divider";
import Logo from "./Logo";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

const RsvpCard = () => {
  return (
    <div className="relative w-full  h-full flex flex-col items-center justify-center">
      <Image
        src="/bg-img.png"
        alt="invitation"
        height={2048}
        width={2048}
        className="absolute w-full h-full object-cover z-[-1]"
      />
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-4 text-2xl p-4 lg:p-20 relative text-black bg-white-primary/50 max-w-[900px]">
        <div className={`text-xl`}>TOGETHER WITH THEIR FAMILIES</div>
        <div className={`text-4xl lg:text-6xl ${hammersmithOne.className}`}>
          JOSH MONTGOMERY
        </div>
        <div className={`flex gap-8 text-xl`}>
          <Divider width={100} rounded={true} color={"black"} /> AND{" "}
          <Divider width={100} rounded={true} color={"black"} />
        </div>
        <div className={`text-4xl lg:text-6xl ${hammersmithOne.className}`}>
          BEKAH CURRAN
        </div>
        <div className="text-center text-xl">
          INVITE YOU TO JOIN THEM IN CELEBRATING THEIR UNION
        </div>
        <div className="py-3">
          <Divider width={100} rounded={true} color={"black"} />
        </div>
        <div className="text-center">
          <div className={`${hammersmithOne.className} text-2xl`}>
            April 19, 2025
          </div>
          <div>SATURDAY | SIX O&apos;CLOCK</div>
        </div>
        <div className="text-center">
          <div className={`${hammersmithOne.className} text-2xl`}>
            LOCATION TO BE DECIDED
          </div>
          <div>AUSTIN, TEXAS</div>
        </div>
      </div>
    </div>
  );
};

export default RsvpCard;
