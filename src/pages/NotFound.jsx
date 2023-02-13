import React from "react";
//icons
import { TfiFaceSad } from "react-icons/tfi";
function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 text-4xl box-decoration-clone bg-gradient-to-r from-green-800 to-green-300 text-white px-2">
        <TfiFaceSad />
        <h1 className="">404 NotFound</h1>
      </div>
    </div>
  );
}

export default NotFound;
