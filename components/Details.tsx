"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Hammersmith_One } from "next/font/google";
import {
  ATTENDEE_TYPE,
  useWeddingStore,
} from "@/app/hooks/useAttendeeTypeStore";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

const MobileContent = ({ attendeeType }: { attendeeType: ATTENDEE_TYPE }) => {
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
        <h3 className={`text-4xl ${hammersmithOne.className}`}>DETAILS</h3>
        <ul className="flex flex-col gap-4">
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHAT:</span>
            <span>
              {attendeeType === ATTENDEE_TYPE.FAMILY
                ? "Our wedding's welcome dinner, ceremony, and after-party!"
                : "Our wedding's after-party celebration!"}
            </span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHEN:</span>
            <span>
              {attendeeType === ATTENDEE_TYPE.FAMILY
                ? "April 18th-19th, 2025: (Fri) Welcome dinner 7pm, (Sat) Ceremony 3:30pm-5pm -> After-party 5:30-9:30pm"
                : "Saturday, April 19th 2025, 5:30pm-9:30pm"}
            </span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHERE:</span>
            <ul className="flex flex-col gap-2">
              {attendeeType === ATTENDEE_TYPE.FAMILY ? (
                <>
                  <li>
                    Ceremony: Chapel Dulcinea, 16221 Crystal Hills Drive,
                    Austin, Texas 78737
                  </li>
                  <li>
                    After-party: Central District Brewing, 417 Red River St,
                    Austin, TX 78701
                  </li>
                </>
              ) : (
                <li>
                  After-party: Central District Brewing, 417 Red River St,
                  Austin, TX 78701
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DesktopContent = ({ attendeeType }: { attendeeType: ATTENDEE_TYPE }) => {
  return (
    <div className="h-full flex bg-white-primary">
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>DETAILS</h3>
        <ul className="flex flex-col gap-4">
          <li className="inline-flex gap-2 items-center">
            <span className="font-bold text-xl">WHAT:</span>
            <span>
              {attendeeType === ATTENDEE_TYPE.FAMILY
                ? "Our wedding's welcome dinner, ceremony, and after-party!"
                : "Our wedding's after-party celebration!"}
            </span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHEN:</span>
            <span>
              {attendeeType === ATTENDEE_TYPE.FAMILY
                ? "April 18th-19th, 2025: (Fri) Welcome dinner 7pm, (Sat) Ceremony 3:30pm-5pm -> After-party 5:30-9:30pm"
                : "Saturday, April 19th 2025, 5:30pm-9:30pm"}
            </span>
          </li>
          <li className="inline-flex gap-2 items-start">
            <span className="font-bold text-xl">WHERE:</span>
            <ul className="flex flex-col gap-2">
              {attendeeType === ATTENDEE_TYPE.FAMILY ? (
                <>
                  <li>
                    Ceremony: Chapel Dulcinea, 16221 Crystal Hills Drive,
                    Austin, Texas 78737
                  </li>
                  <li>
                    After-party: Central District Brewing, 417 Red River St,
                    Austin, TX 78701
                  </li>
                </>
              ) : (
                <li>
                  Central District Brewing, 417 Red River St, Austin, TX 78701
                </li>
              )}
            </ul>
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
  const { attendeeType } = useWeddingStore();

  return isDesktop ? (
    <DesktopContent attendeeType={attendeeType} />
  ) : (
    <MobileContent attendeeType={attendeeType} />
  );
};

export default dynamic(() => Promise.resolve(Details), { ssr: false });
