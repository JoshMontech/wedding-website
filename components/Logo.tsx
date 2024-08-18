import React from "react";
import { CiHeart } from "react-icons/ci";

const Logo = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className="relative text-black cursor-pointer"
      onClick={() => onClick()}
    >
      <CiHeart className="size-20 fill-black" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 font-bold text-base">
        B&J
      </div>
    </div>
  );
};

export default Logo;
