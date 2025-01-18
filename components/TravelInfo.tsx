"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Hammersmith_One } from "next/font/google";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

// Where to stay
// For our out of town guests, we recommend staying closer to the reception area - it’s in the more fun part of Austin and is closer to where we live.
// DM us for recs or help picking an airbnb location
// Pro tip: Airbnb/vrbo don’t give exact addresses til after you book, but you can tell roughly how far it is from things you care about by using Maps to locate something super close to the airbnb, like a park or shop or if a nearby road is labeled on airbnb you can just search that road in Maps.
// Things to do in Austin (free and otherwise)
// Downtown
// Walk around South Congress, stop at Torchy’s for a taco, and if there in the evening check out some of the live music you’re sure to stumble across!
// Check out the library - it’s super dope! Make sure to go to the Central Library location
// Blanton Art Museum
// Get a tour of the capital
// Mueller
// Walk around the pond
// Watch a movie at Alamo drafthouse
// Check out the Saturday Farmers market
// Domain
// Shopping, bars and restaurants
// South Austin
// Walk around Auditorium Shores, hang out at Zilker, or take a dip at Barton Springs
// Grab a vegan bite at Bouldin Creek Cafe
// Check out the Umlauf Sculpture Garden
// Food Recs:
// Our Favorite….
// Tacos: Veracruz & Tacodeli
// Tex Mex: Chuy’s
// Sweets: Amy’s Ice Cream
// Austin Classics: Kerbey Lane (diner),
// Vegan spots: Zucchini Kill (cupcakes), Bouldin Creek (cafe), Bistro Vonish (kolaches), Nissi’s Veg Mex (vegan Tex Mex)
// BBQ: Terry Blacks & Style Switch
type QuestionAnswer = { question: string; answerList: string[] };
const INFOS: QuestionAnswer[] = [
  {
    question: "Where to stay",
    answerList: [
      "For our out of town guests, we recommend staying closer to the reception area - it's in the more fun part of Austin and is closer to where we live.",
      "DM us for recs or help picking an airbnb location.",
      "Pro tip: Airbnb/vrbo don't give exact addresses til after you book, nbut you can tell roughly how far it is from things you care about by using Maps to locate something super close to the airbnb, like a park or shop or if a nearby road is labeled on airbnb you can just search that road in Maps.",
    ],
  },
  {
    question: "Things to do South",
    answerList: [
      "Walk around South Congress, stop at Torchy’s for a taco, or get a drink on dirty 6th st!",
      "Check out the central library - it's a spectacle!",
      "View some historic art at the Blanton Art Museum",
      "Get a tour of the Texas state capital!",
    ],
  },
  {
    question: "Things to do North",
    answerList: [
      "Walk around the Mueller park pond",
      "Watch a movie and grab a meal at our favorite theatre, Alamo Drafthouse",
      "Check out the Saturday farmers market",
    ],
  },
  {
    question: "Food recs",
    answerList: [
      "Tacos: Veracruz & Tacodeli",
      "Tex Mex: Chuy's and Dos Salsas",
      "Sweets: Amy's Ice Cream",
      "BBQ: Terry Blacks",
      "Vegan spots: Zucchini Kill Desserts, Bouldin Creek Cafe",
    ],
  },
];

const FaqAnswerList = ({ answers }: { answers: string[] }) => {
  return (
    <ul className="flex flex-col gap-2 list-disc">
      {answers.map((answer, i) => (
        <li key={i}>{answer}</li>
      ))}
    </ul>
  );
};

const FaqComponent = ({ faq }: { faq: QuestionAnswer }) => {
  return (
    <Disclosure as="div" className="w-full max-w-md md:max-w-full">
      <DisclosureButton className="w-full border-b pb-2 text-left font-semibold">
        {faq.question}
      </DisclosureButton>
      <div className="overflow-hidden py-2">
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          <FaqAnswerList answers={faq.answerList} />
        </DisclosurePanel>
      </div>
    </Disclosure>
  );
};

const MobileContent = () => {
  return (
    <div className="h-full flex bg-white-primary relative">
      <div className="absolute h-full w-full z-[0]">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/travel-info.jpg"
        />
      </div>
      <div className="absolute bg-white-primary/70 z-10 w-full h-full flex-1 flex flex-col px-8 gap-4 items-center justify-start pt-16 overflow-auto">
        <h3 className={`text-4xl font-semibold ${hammersmithOne.className}`}>
          TRAVEL & AUSTIN
        </h3>
        <div className="w-full">
          {INFOS.map((info, i) => (
            <FaqComponent faq={info} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopContent = () => {
  return (
    <div className="h-full flex bg-white-primary overflow-auto">
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>
          TRAVEL & AUSTIN INFO
        </h3>
        <div className="w-full">
          {INFOS.map((info, i) => (
            <FaqComponent faq={info} key={i} />
          ))}
        </div>
      </div>
      <div className="h-full w-1/3">
        <Image
          alt="about us"
          width={1352}
          height={2048}
          className="size-full object-cover"
          src="/travel-info.jpg"
        />
      </div>
    </div>
  );
};

const TravelInfo = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return isDesktop ? <DesktopContent /> : <MobileContent />;
};

export default dynamic(() => Promise.resolve(TravelInfo), { ssr: false });
