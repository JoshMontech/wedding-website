"use client";
import React from "react";
import Logo from "./Logo";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";

const NavBar = () => {
  const scrollToSection = useSmoothScroll();

  return (
    <header className="z-20 sticky top-0 left-0 w-full h-[100px] bg-white-primary flex px-4 justify-between items-center">
      <Logo />
      <div onClick={() => scrollToSection("faq")}>button</div>
    </header>
  );
};

export default NavBar;
