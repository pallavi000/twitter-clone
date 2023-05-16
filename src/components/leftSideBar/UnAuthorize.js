import React, { useState } from "react";
import { Cog8ToothIcon, HashtagIcon } from "@heroicons/react/24/outline";

const navElements = [
  {
    icon: <HashtagIcon className="h-6 w-6" />,
    name: "Explore",
  },
  {
    icon: <Cog8ToothIcon className="h-6 w-6" />,
    name: "Setting",
  },
];

function UnAuthorize() {
  return (
    <>
      {navElements.map((nav) => {
        return (
          <div className="flex items-center gap-4 my-1 py-3 cursor-pointer px-2 hover:bg-gray-200 hover:rounded-3xl ">
            {nav.icon}
            <div className="font-medium text-xl">{nav.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default UnAuthorize;
