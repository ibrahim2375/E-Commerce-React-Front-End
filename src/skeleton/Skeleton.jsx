import React from "react";

function Skeleton({ width, height }) {
  return (
    <div
      className="skeleton bg-gray-200 rounded-full animate-pulse"
      style={{ width: width, height }}
    ></div>
  );
}

export default Skeleton;
