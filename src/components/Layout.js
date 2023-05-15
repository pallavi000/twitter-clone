import React from "react";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";

function Layout({ children }) {
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
        <RightSidebar />
      </div>
    </div>
  );
}

export default Layout;
