import clsx from "clsx";
import React, { ReactNode } from "react";

const Section = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const classes = clsx(
    "w-full h-auto min-h-[calc(100vh-100px)] relative",
    className
  );
  return <div className={classes}>{children}</div>;
};

export default Section;
