import React, { useEffect, useRef } from "react";
//hook
import UseFetch from "../../Hooks/UseFetch";
//functions
import { ScrollByMouse } from "../../functions/ScrollByMouse";
//skeleton
import OfferRowSkeleton from "../../skeleton/OfferRowSkeleton";
//css
import "../../css/Home/OffersRow.css";
//variables
let scrollLeft = 0;
let startX;
let isDown = false;

function OffersRow() {
  const offers_row = useRef();
  const { data, loading, error } = UseFetch("/offers");
  //handle scrolling
  useEffect(() => {
    ScrollByMouse(offers_row, startX, scrollLeft, isDown);
  }, [isDown]);
  return (
    <div className="offers">
      <h1 className="text-2xl font-extrabold my-4">Get Up 70% Off</h1>
      <div
        ref={offers_row}
        className="row content flex items-center gap-5 overflow-x-auto py-4 px-10"
      >
        {/* offer box */}
        {/* when there is no data  on loading*/}
        {loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <OfferRowSkeleton key={i} />
          ))}
        {data?.map((offer) => (
          <div
            key={offer?.id}
            className="offer  grid grid-rows-2  gap-4 rounded-lg cursor-pointer shadow-md"
            style={{ backgroundColor: offer?.bg_color }}
          >
            <div className="offer_info mt-4 p-4 row-span-1">
              <span>Save</span>
              <h1
                className="text-2xl font-bold"
                style={{ color: offer?.offer_color }}
              >
                ${offer?.offer}
              </h1>
              <p className="text-sm mt-4">{offer?.offer_details}</p>
            </div>
            <div className="offer_image relative  rounded-b-lg  row-span-2 overflow-hidden">
              <img
                src={`${offer?.offer_img}`}
                alt="offer img"
                className="w-full h-full transition duration-150 delay-75 transform hover:scale-125"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OffersRow;
