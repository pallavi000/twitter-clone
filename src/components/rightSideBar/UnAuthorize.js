import React, { useState } from "react";

function UnAuthorize({ setIsVisible }) {
  return (
    <div className="border border-gray-300 rounded-3xl p-4 flex flex-col gap-2 m-4">
      <div className=" font-bold text-2xl ">New to Twitter?</div>
      <div className="text-sm text-gray-700">
        Sign up now to get your own personalized timeline!
      </div>
      <div className="flex items-center justify-between px-4 mb-2 mt-4 py-1 border rounded-3xl border-gray-300">
        <div className="flex items-center gap-2">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              className="h-6 w-6 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-medium text-sm">Sign in as pallavi</div>
            <div className=" text-gray-500 text-xs">
              bhattaraipallavi4@gmail.com
            </div>
          </div>
        </div>
        <div className="font-bold text-orange-500 flex justify-center items-center h-8 w-8 border border-orange-500 rounded-full">
          G
        </div>
      </div>
      <div className="flex items-center  justify-center px-4 mb-4 py-2 border rounded-3xl border-gray-300">
        <div className="flex items-center gap-2 justify-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              className="h-6 w-6 rounded-full"
            />
          </div>

          <div className="font-bold text-gray-700 ">Sign up with Apple</div>
        </div>
      </div>
      <div className="flex items-center  justify-center px-4 mb-4 py-2 border rounded-3xl border-gray-300">
        <div className="flex items-center gap-2 justify-center">
          <div
            className="font-bold text-gray-700 "
            onClick={() => setIsVisible(true)}
          >
            Create account
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-sm">
        By signing up, you agree to the{" "}
        <span className="text-blue-400">Terms of Service</span> and{" "}
        <span className="text-blue-400">Privacy Policy</span>, including Cookie
        Use.
      </div>
    </div>
  );
}

export default UnAuthorize;
