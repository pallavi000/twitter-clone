import React, { useEffect, useRef, useState } from "react";
import {
  PhotoIcon,
  GifIcon,
  FaceSmileIcon,
  MapPinIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import axios from "axios";

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
  const [image, setImage] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    if (input.length > 0) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
    }
  }, [input]);

  const addTweet = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("tweet", input);
      data.append("image", image);
      data.append("user_id", session?.user?.id);
      console.log(data);
      const res = await axios.post("/tweet", data);
      setInput("");
      setImage("");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
      <form
        className="col-span-7 flex flex-col mt-4"
        onSubmit={(e) => addTweet(e)}
      >
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
            <div className="flex items-center gap-1">
              <div>
                <label for="image">
                  <PhotoIcon
                    className="h-6 w-6 text-blue-500 cursor-pointer"
                    for="image"
                  />
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <GifIcon className="h-6 w-6 text-blue-500" />
              <FaceSmileIcon className="h-6 w-6 text-blue-500" />
              <MapPinIcon className="h-6 w-6 text-blue-500" />
            </div>
          </div>

          <button
            className={` ${
              isSubmitting ? "bg-blue-500" : "bg-blue-300"
            } text-white  font-medium px-6 py-2 rounded-3xl mr-4 `}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTweet;
