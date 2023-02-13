import React from "react";

//css
import "../../css/Home/Advertisement.css";
function Advertisement() {
  return (
    <div className="ad my-5 px-10  py-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 w-full">
      <div className="ad_info flex flex-col gap-4 justify-center">
        <h1 className="text-3xl font-extrabold">Get 5% Cash Back</h1>
        <p>on Shopcart.com</p>
        <button className="btn w-32 rounded-full py-2 px-4">learn More</button>
      </div>
      <img
        src="ad/cards.png"
        alt="cards img"
        className="h-40 object-contain transform rotate-0  md:-rotate-90"
      />
    </div>
  );
}

export default Advertisement;
