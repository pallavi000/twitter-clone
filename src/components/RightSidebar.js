import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import Authorize from "./rightSideBar/Authorize";
import UnAuthorize from "./rightSideBar/UnAuthorize";

function RightSidebar({ setIsVisible }) {
  const { data, status } = useSession();
  return status === "authenticated" ? (
    <Authorize />
  ) : (
    <UnAuthorize setIsVisible={setIsVisible} />
  );
}

export default RightSidebar;
