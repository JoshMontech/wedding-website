import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="relative">
      <FaRegHeart className="size-16" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-base">
        B&J
      </div>
    </div>
  );
};

export default Logo;
