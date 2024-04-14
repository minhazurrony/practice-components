"use client";

import React, { useState } from "react";

type TooltipProps = {
  content: string;
  position?: "top" | "right" | "bottom" | "left";
};

export const Tooltip = ({
  content,
  position = "top",
  children,
}: React.PropsWithChildren<TooltipProps>) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive((state) => !state);
  };

  return (
    <div
      onMouseEnter={toggleActive}
      onMouseLeave={toggleActive}
      className="relative inline-block"
    >
      {children}
      {active && (
        <div
          className={`absolute ${
            position === "top"
              ? "-left-0 bottom-full mb-1 before:-bottom-[6px] before:rotate-180"
              : position === "right"
                ? "-top-0 left-full ml-1 before:-left-0 before:-rotate-90"
                : position === "bottom"
                  ? "mt-1 before:-top-[6px]"
                  : "-top-0 right-full mr-1 before:-right-[16px] before:rotate-90"
          } z-10 text-nowrap rounded bg-gray-800 px-4 py-2 text-xs text-white before:absolute before:block before:h-0 before:w-0 before:-translate-x-[50%] before:border-x-8 before:border-b-[16px] before:border-x-transparent before:border-b-gray-800`}
        >
          <p className="uppercase">{content}</p>
        </div>
      )}
    </div>
  );
};
