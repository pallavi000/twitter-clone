import React, { useState } from "react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  ClipboardDocumentIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { signOut } from "next-auth/react";

const navElements = [
  {
    name: "Home",
    icon: <HomeIcon className="h-6 w-6" />,
  },
  {
    name: "Explore",
    icon: <HashtagIcon className="h-6 w-6" />,
  },
  {
    name: "Notifications",
    icon: <BellIcon className="h-6 w-6" />,
  },
  {
    name: "Messages",
    icon: <EnvelopeIcon className="h-6 w-6" />,
  },
  {
    name: "Lists",
    icon: <ClipboardDocumentIcon className="h-6 w-6" />,
  },
  {
    name: "Bookmarks",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },
  {
    name: "User",
    icon: <UserIcon className="h-6 w-6" />,
  },
  {
    name: "More",
    icon: <EllipsisHorizontalCircleIcon className="h-6 w-6" />,
  },
];
function Authorize() {
  const [showModal, setShowModal] = useState(false);
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
      <button className="bg-blue-500 text-white text-lg font-medium py-3 px-4 my-2 rounded-3xl">
        Tweet
      </button>
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 rounded-full ">
          <img
            className="h-10 w-10 rounded-full"
            height={40}
            width={40}
            src={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            }
          />
        </div>
        <div className="flex flex-col mt-8">
          <div className="text-md font-medium">Pallavi bhattarai</div>
          <div className="text-md font-medium text-gray-500">@bhattarai123</div>
        </div>
        <div className="font-bold" onClick={() => setShowModal(!showModal)}>
          ...
        </div>
        {showModal && (
          <div
            className="bg-white border border-gray-200 p-4 rounded-md"
            onClick={() => signOut()}
          >
            Logout
          </div>
        )}
      </div>
    </>
  );
}

export default Authorize;
