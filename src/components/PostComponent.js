import React from "react";
import {
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

function PostComponent({ post }) {
  return (
    <div className="  mb-10  border-b border-gray-200">
      <div className="grid grid-cols-10 gap-3 m-4">
        <div className="h-14 w-14 rounded-full col-span-1">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            className="h-14 w-14 rounded-full"
          />
        </div>
        <div className="flex justify-between items-center col-span-9">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <div className="font-bold ">Vijay Kumar Panday</div>
              <div className="text-gray-500">@Vijaykumarko</div>
              <div className="text-gray-500">. 3h</div>
            </div>
            <div className="font-medium w-fit text-gray-900 mt-2">
              <div>
                'अटेन्सन सिकर' को नेपाली अनुवाद के होला ? सबैभन्दा चित्तबुज्दो ३
                जवाफलाई मसंग लन्च ।
              </div>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                className="  w-full object-cover rounded-md"
              />
            </div>
            <div className="flex items-center gap-6 my-4">
              <div className="text-gray-600 flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <ChatBubbleLeftIcon className="h-6 w-6" />
                <span className="text-sm">15.2K</span>
              </div>
              <div className="text-gray-600 flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <ArrowPathRoundedSquareIcon className="h-6 w-6" />
                <span className="text-sm">15.2K</span>
              </div>
              <div className="text-gray-600 flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <HeartIcon className="h-6 w-6" />
                <span className="text-sm">15.2K</span>
              </div>
              <div className="text-gray-600 flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <ChartBarIcon className="h-6 w-6" />
                <span className="text-sm">15.2K</span>
              </div>
              <div className="text-gray-600 flex gap-1 items-center cursor-pointer hover:text-blue-500">
                <ArrowUpTrayIcon className="h-6 w-6" />
                <span className="text-sm">15.2K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostComponent;
