import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="z-20 sticky top-0 left-0 w-full h-[100px] bg-white-primary flex px-4 justify-between items-center">
      <Logo />
      <div></div>
    </header>
  );
};

export default NavBar;
