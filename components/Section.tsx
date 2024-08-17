import clsx from "clsx";
import React, { ReactNode } from "react";

const Section = ({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) => {
  const classes = clsx("w-full min-h-[calc(100vh-100px)] relative", className);
  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
};

export default Section;
