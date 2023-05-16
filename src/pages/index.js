import CreateTweet from "@/components/CreateTweet";
import PostComponent from "@/components/PostComponent";
import SignUp from "@/components/auth/SignUp";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isActiveTab, setIsActiveTab] = useState("foryou");
  const posts = [1, 2, 3, 4, 5];

  return (
    <div className="relative">
      <div className=" flex justify-center p-4 pb-0 pt-14 bg-white border-b   border-gray-200 fixed w-1/2 border-r ">
        <div className="flex gap-12 justify-between items-center w-1/2">
          <div
            className={`font-medium pb-4 text-gray-500  ${
              isActiveTab === "foryou"
                ? "text-black border-b-4 border-blue-500"
                : "text-gray-500"
            } text-lg`}
            onClick={() => setIsActiveTab("foryou")}
          >
            For you
          </div>
          <div
            className={`font-medium pb-4 text-gray-500 ${
              isActiveTab === "following"
                ? "text-black border-b-4  border-blue-500"
                : "text-gray-500"
            } text-lg`}
            onClick={() => setIsActiveTab("following")}
          >
            Following
          </div>
        </div>
      </div>
      <div className="h-screen overflow-y-auto" id="style-4">
        <div className="border-b border-gray-200">
          <CreateTweet />
        </div>
        <div className=" text-blue-400 font-medium border-b border-gray-200 p-4 flex justify-center">
          Show 770 Tweets
        </div>
        <div className="">
          {posts.map((post, index) => {
            return <PostComponent post={post} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
