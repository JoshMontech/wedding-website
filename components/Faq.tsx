"use client";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Hammersmith_One } from "next/font/google";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
const hammersmithOne = Hammersmith_One({ subsets: ["latin"], weight: "400" });

export type QuestionAnswer = {
  question: ReactNode;
  answer: ReactNode;
};

export const FAQS: QuestionAnswer[] = [
  {
    question: `Why does my invitation say "After Party"?`,
    answer: `Our ceremony is family only, and the venue is extremely small. But we still want to celebrate with all the people who we love, and the after party is more suited to that!`,
  },
  {
    question: `What can I expect?`,
    answer: `For our out of town guests, we recommend looking at this as a trip to Austin, with the bonus of coming to our wedding! What that means is please plan to entertain yourselves in the days leading up to and/or after the wedding if you’re staying in town.
The after party will have buffet-style dinner suitable for both vegan and omnivore diets, as well as vegan and nut-free desserts. 3 drinks (including tip) will be covered.`,
  },
  {
    question: `Will the after party be an open bar?`,
    answer: `Not quite! We are passing out 3 drink tickets per person covering the drink and the associated tips, but after you use all your tickets, the bartender will be happy to open an individual tab for you.
Water is free, but all other beverages need to be paid for, including non-alcoholic drinks (soda, tea, etc) and mocktails. Even for the kiddos!
Not going to use all three of your drink tickets? Give ’em to a friend!`,
  },
  {
    question: `What should I wear?`,
    answer: `Semi-formal or cocktail attire. This blog has great definitions! https://emilypost.com/advice/attire-guide-dress-codes-from-casual-to-white-tie
No white :)`,
  },
  {
    question: `I can’t make it or am not invited to the ceremony – can I still watch?`,
    answer: `The wedding can be livestreamed here: https://chapeldulcinea.org/livestream/`,
  },
  {
    question: `Can I take pictures or videos?`,
    answer: `Yep! We are not unplugged and will likely set up a shared Google Photo Album for folks to add to.`,
  },
  {
    question: `How should I get to and from the ceremony? The reception?`,
    answer: `Individuals will need to provide their own transportation`,
  },
  {
    question: `Are there plans for after the reception?`,
    answer: `We will be heading to a hotel, but there are plenty of nightlife options nearby and in walking distance. The reception is by the Convention Center; Rainey Street is about 10 minutes to walk, Dirty 6th is around a 5 minute walk, and West 6th is around a 20 minute walk.`,
  },
  {
    question: `Do I have a plus one?`,
    answer: `If your invitation is addressed to you + Guest then you do. If it is just addressed to you, you do not.`,
  },
  {
    question: `Do you have a registry?`,
    answer: `We understand a lot of our friends and family are spending a lot of time and money just to come to town for the wedding so gifts are not expected or necessary.
If you would like to send something else, please see our registry, in the Links section.`,
  },
  {
    question: `What if it’s raining?`,
    answer: `Both events will be held rain or shine. The ceremony is outdoors but covered. After party is fully covered.`,
  },
];

const FaqComponent = ({ faq }: { faq: QuestionAnswer }) => {
  return (
    <Disclosure as="div" className="w-full max-w--full">
      <DisclosureButton className="w-full border-b pb-2 text-left font-semibold">
        Q: {faq.question}
      </DisclosureButton>
      <div className="overflow-hidden py-2">
        <DisclosurePanel
          transition
          className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          A: {faq.answer}
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
          src="/faq.jpg"
        />
      </div>
      <div className="absolute bg-white-primary/70 z-10 w-full h-full flex-1 flex flex-col px-8 gap-4 items-center justify-start pt-16 overflow-auto">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>FAQ</h3>
        {FAQS.map((faq, i) => (
          <FaqComponent faq={faq} key={i} />
        ))}
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
          src="/faq.jpg"
        />
      </div>
      <div className="h-full flex-1 flex flex-col px-8 gap-4 items-center justify-center overflow-auto">
        <h3 className={`text-5xl ${hammersmithOne.className}`}>FAQ</h3>
        {FAQS.map((faq, i) => (
          <FaqComponent faq={faq} key={i} />
        ))}
      </div>
    </div>
  );
};

const Faq = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return isDesktop ? <DesktopContent /> : <MobileContent />;
};

export default dynamic(() => Promise.resolve(Faq), { ssr: false });
