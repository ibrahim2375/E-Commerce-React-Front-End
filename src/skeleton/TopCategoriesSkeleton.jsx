import React from "react";

function TopCategoriesSkeleton() {
  return (
    <div className={`category rounded-lg shadow-md bg-gray-200 animate-pulse `}>
      <div className={` relative content `}>
        <div className="w-20 h-4 rounded-lg bg-gray-200 animate-pulse py-2"></div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}

export default TopCategoriesSkeleton;
