import React, { useState } from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import SignUp from "./auth/SignUp";
import Popup from "./Popup";

function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        <LeftSidebar />
      </div>
      <div className="col-span-3 border-r border-gray-300 relative">
        {children}
      </div>
      <div className="col-span-2">
        {" "}
        <RightSidebar setIsVisible={setIsVisible} />
      </div>
      {isVisible && <Popup isOpen={isVisible} setIsOpen={setIsVisible} />}
    </div>
  );
}

export default Layout;
