import React, { useEffect, useRef, useState } from "react";
import {
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  MapPinIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const icons = [
  {
    icon: <PhotoIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    icon: <GifIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    icon: <FaceSmileIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    icon: <MapPinIcon className="h-6 w-6 text-blue-500" />,
  },
];
function CreateTweet() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
    if (input.length > 0) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  }, [input]);

  return (
    <div className="grid grid-cols-8  pt-[110px] pb-4">
      <div className="col-span-1 p-4 ">
        <div className="h-14 w-14 rounded-full">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            className="h-14 w-14 rounded-full"
          />
        </div>
      </div>
      <div className="col-span-7 flex flex-col mt-4">
        <div className=" flex items-center gap-1 border border-gray-200 px-3 text-sm font-medium text-blue-400 rounded-full w-fit">
          Everyone <ChevronDownIcon className="h-4 w-4 font-medium" />
        </div>
        <div className=" mb-4 border-b border-gray-200 shadow-sm">
          <textarea
            className="text-gray-600 text-xl pt-4 w-full outline-none "
            placeholder="What is happening ?!"
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 ">
            {icons.map((icon) => {
              return <div className="flex items-center gap-1">{icon.icon}</div>;
            })}
          </div>

          <button
            className={` ${
              isSubmitting ? "bg-blue-500" : "bg-blue-300"
            } text-white  font-medium px-6 py-2 rounded-3xl mr-4 `}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTweet;
