import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function RightSidebar() {
  const trends = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="p-4 px-8 overflow-y-auto h-screen">
      <div className="flex items-center gap-4 py-3 px-4  rounded-3xl bg-[#f5f5ff] mb-8">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input
          className="bg-[#f5f5ff] w-full outline-0 text-gray-800"
          placeholder="Search Twitter"
        />
      </div>
      <div className="p-4  rounded-md bg-[#f5f5ff] ">
        <div className="font-bold text-2xl mb-4 ">Trends For You</div>
        {trends.map((trend) => {
          return (
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col ">
                <div className="text-sm text-gray-500">Trending in Nepal</div>
                <div className="font-medium text-black">Cha ccha cha</div>
              </div>
              <div className="font-bold text-gray-800">...</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightSidebar;
