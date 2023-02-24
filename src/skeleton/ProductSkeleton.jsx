import React from "react";

function ProductSkeleton({ count, searchPage }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div
            className={` relative product_box_skelton   ${
              searchPage &&
              "block md:flex gap-10 md:shadow-md pr-5 md:w-full rounded-lg "
            }`}
            key={i}
          >
            <div className="product_image relative  rounded-md mb-2 animate-pulse">
              {/* faviorite icon */}
              <div className="favorite_icon p-2 w-8 h-8 rounded-full bg-gray-300 animate-pulse absolute top-2 right-2 "></div>
              {/* img */}
              <div
                className={`g-gray-300 animate-pulse ${
                  searchPage && "md:w-96"
                }`}
              ></div>
            </div>
            {/* product info */}
            <div
              className={`product_info relative ${
                searchPage && "lg:flex lg:flex-col  gap-2  md:w-full"
              }`}
            >
              <div className="head flex items-center justify-between mt-3">
                <h2 className="w-32 h-4 rounded-lg bg-gray-200 animate-pulse"></h2>
                <h2 className="w-6 h-4 rounded-lg bg-gray-200 animate-pulse"></h2>
              </div>
              <p className="w-full h-4 rounded-lg bg-gray-200 animate-pulse my-2"></p>
              <div className="w-1/2 h-4 rounded-lg bg-gray-200 animate-pulse"></div>
              <div
                className={`w-32 h-10 mt-4  py-2  rounded-full bg-gray-200 animate-pulse
                ${searchPage && "md:absolute md:bottom-4 md:right-2"}`}
              ></div>
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductSkeleton;
