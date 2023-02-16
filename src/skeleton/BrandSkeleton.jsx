import React from "react";

function BrandSkeleton() {
  return (
    <div className="brand rounded-md flex gap-4 items-center justify-between  px-5 py-2 shadow-md animate-pulse bg-gray-100 ">
      <div className=" brand_image w-20 h-20  p-4  rounded-full bg-gray-200 animate-pulse"></div>
      <div className="info">
        <h1 className="name h-3 w-32 animate-pulse bg-gray-200 mb-2 rounded-lg"></h1>
        <p className="details h-3 w-44 animate-pulse bg-gray-200 rounded-lg"></p>
      </div>
    </div>
  );
}

export default BrandSkeleton;
