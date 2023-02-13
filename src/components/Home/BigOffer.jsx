import React from "react";

//css
import "../../css/Home/BigOffer.css";
function BigOffer() {
  return (
    <div className="big_offer relative my-10 overflow-hidden h-screen w-full">
      <div
        className="content h-full w-full bg-no-repeat  bg-center flex justify-center lg:justify-end items-center px-0 lg:px-40 "
        style={{
          backgroundImage: `url('bigOffer/bigImg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="big_offer_info flex flex-col justify-center gap-8 p-4 md:p-8 lg:p-16">
          <h1 className="text-4xl font-bold w-64 lg:w-80">
            Get 5% Cash Back On $200
          </h1>
          <p className="text-sm w-80 lg:w-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium nemo, tempore perspiciatis.
          </p>
          <button className="learn_more outline outline-1 outline-white bg-transparent py-2 px-4 rounded-full w-32">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BigOffer;
