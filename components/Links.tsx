"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Hammersmith_One } from "next/font/google";
import Link from "next/link";
import {
  ATTENDEE_TYPE,
  useWeddingStore,
} from "@/app/hooks/useAttendeeTypeStore";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

const MobileContent = ({
  setAttendeeTypeCallback,
}: {
  setAttendeeTypeCallback: (attendeeType: ATTENDEE_TYPE | null) => void;
}) => {
  return (
    <div className="h-full flex bg-white-primary relative">
      <div className="absolute h-full w-full z-[0]">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/links.jpg"
        />
      </div>
      <div className="absolute bg-white-primary/70 z-10 w-full h-full flex-1 flex flex-col px-8 gap-4 items-center justify-start pt-16">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>LINKS</h3>
        <ul className="text-base list-disc text-left">
          <li>
            <Link
              target="_blank"
              className="text-blue-800 underline"
              href={
                "https://www.amazon.com/wedding/share/bekah-and-josh-montgomery"
              }
            >
              Our Wedding Registry
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-800 underline"
              href={"https://photos.app.goo.gl/EnnD4aALovdAZLxF6"}
              target="_blank"
            >
              Our Engagement Photos
            </Link>
          </li>
          <li>
            <button
              className="text-blue-800 underline"
              onClick={() => setAttendeeTypeCallback(null)}
            >
              Change your attendee type
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DesktopContent = ({
  setAttendeeTypeCallback,
}: {
  setAttendeeTypeCallback: (attendeeType: ATTENDEE_TYPE | null) => void;
}) => {
  return (
    <div className="h-full flex bg-white-primary">
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>LINKS</h3>
        <ul className="text-base list-disc text-left">
          <li>
            <Link
              target="_blank"
              className="text-blue-800 underline"
              href={
                "https://www.amazon.com/wedding/share/bekah-and-josh-montgomery"
              }
            >
              Our Wedding Registry
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-800 underline"
              href={"https://photos.app.goo.gl/EnnD4aALovdAZLxF6"}
              target="_blank"
            >
              Our Engagement Photos
            </Link>
          </li>
          <li>
            <button
              className="text-blue-800 underline"
              onClick={() => setAttendeeTypeCallback(null)}
            >
              Change your attendee type
            </button>
          </li>
        </ul>
      </div>
      <div className="h-full w-1/3">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/links.jpg"
        />
      </div>
    </div>
  );
};

const Links = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const { setAttendeeType } = useWeddingStore();

  return isDesktop ? (
    <DesktopContent setAttendeeTypeCallback={setAttendeeType} />
  ) : (
    <MobileContent setAttendeeTypeCallback={setAttendeeType} />
  );
};

export default dynamic(() => Promise.resolve(Links), { ssr: false });
