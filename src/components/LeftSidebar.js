import React from "react";
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
function LeftSidebar() {
  return (
    <div className="flex  justify-center  bg-white min-h-screen overflow-y-auto h-screen overflow-x-hidden  ">
      <div className="flex flex-col p-4">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp w-8 h-8 mb-2"
          fill="rgb(59 130 246)"
        >
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
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
            <div className="text-md font-medium text-gray-500">
              @bhattarai123
            </div>
          </div>
          <div className="font-bold">...</div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
