import React from "react";

function OfferRowSkeleton() {
  return (
    <div className="offer  grid grid-rows-2  gap-4 rounded-lg cursor-pointer shadow-md bg-gray-100 animate-pulse">
      <div className="offer_info mt-4 p-4 row-span-1 flex flex-col gap-2 px-2">
        <span className="bg-gray-200 h-4 w-20 animate-pulse rounded-lg"></span>
        <h1 className="bg-gray-200 h-5 w-12 animate-pulse rounded-lg"></h1>
        <p className="bg-gray-200 h-4 w-full animate-pulse rounded-lg"></p>
        <p className="bg-gray-200 h-4 w-3/4 animate-pulse rounded-lg"></p>
      </div>
      <div className="offer_image relative  rounded-b-lg  row-span-2 overflow-hidden bg-gray-200 "></div>
    </div>
  );
}

export default OfferRowSkeleton;
