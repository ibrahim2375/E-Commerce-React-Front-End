import React from "react";

function ProductSkeleton({ count }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div className="product_box_skelton" key={i}>
            <div className="product_image relative  rounded-md mb-2 animate-pulse">
              {/* faviorite icon */}
              <div className="favorite_icon p-2 w-8 h-8 rounded-full bg-gray-300 animate-pulse absolute top-2 right-2 "></div>
              {/* img */}
              <div className="bg-gray-300 animate-pulse"></div>
            </div>
            {/* product info */}
            <div>
              <div className="head flex items-center justify-between mt-3">
                <h2 className="w-32 h-4 rounded-lg bg-gray-200 animate-pulse"></h2>
                <h2 className="w-6 h-4 rounded-lg bg-gray-200 animate-pulse"></h2>
              </div>
              <p className="w-full h-4 rounded-lg bg-gray-200 animate-pulse my-2"></p>
              <div className="w-1/2 h-4 rounded-lg bg-gray-200 animate-pulse"></div>
              <div className="w-32 h-10 mt-4  py-2  rounded-full bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductSkeleton;
