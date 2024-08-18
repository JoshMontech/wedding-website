"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";
import useSectionIntersection from "@/app/hooks/useSectionIntersection";
import { useMediaQuery } from "usehooks-ts";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
const SECTION_IDS = [
  "hero",
  "about",
  "details",
  "schedule",
  "travel",
  "faq",
  "links",
];

const NAV_ITEMS = [
  { id: "about", label: "Our Story" },
  { id: "details", label: "Details" },
  { id: "schedule", label: "Schedule" },
  { id: "travel", label: "Travel Info" },
  { id: "faq", label: "FAQ" },
  { id: "links", label: "Links" },
];

const DesktopHeaderItems = () => {
  const scrollToSection = useSmoothScroll();
  const activeSection = useSectionIntersection(SECTION_IDS);

  return (
    <ul className="inline-flex gap-8 items-center">
      {NAV_ITEMS.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => scrollToSection(item.id)}
            className={`text-gray-800 hover:text-gray-600 transition-colors duration-200 ${
              activeSection === item.id
                ? "font-bold border-b-2 border-gray-800"
                : ""
            }`}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

const MobileHeaderItems = () => {
  const scrollToSection = useSmoothScroll();
  const activeSection = useSectionIntersection(SECTION_IDS);
  return (
    <Menu>
      <MenuButton>
        <FaBars className="size-10" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        transition
        className="z-30 bg-[#fff] flex flex-col justify-start items-start gap-4 border rounded-md p-4 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 mt-2"
      >
        {NAV_ITEMS.map((item) => (
          <MenuItem key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-gray-800 hover:text-gray-600 transition-colors duration-200 ${
                activeSection === item.id
                  ? "font-bold border-b-2 border-gray-800"
                  : ""
              }`}
            >
              {item.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

const NavBar = () => {
  const isDesktop = useMediaQuery("(min-width: 1204px)");
  const scrollToSection = useSmoothScroll();

  return (
    <header className="z-20 sticky top-0 left-0 w-full border-box border-b h-[99px] bg-white-primary flex px-4 justify-between items-center">
      <Logo onClick={() => scrollToSection("hero")} />
      {isDesktop ? <DesktopHeaderItems /> : <MobileHeaderItems />}
    </header>
  );
};

export default NavBar;
