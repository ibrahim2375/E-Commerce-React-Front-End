import React from "react";
//animation
import { motion } from "framer-motion";
//banner img
import BannerImg from "../../assets/banner4.png";
//css
import "../../css/Home/Banner.css";
function Banner() {
  const banner_left_variant = {
    hidden: {
      x: "-100vw",
    },
    visiable: {
      x: 0,
      transition: {
        ease: "easeIn",
        duration: 0.6,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <div className="banner overflow-hidden">
      <div className="content container mx-auto px-4 flex flex-col justify-center py-5 lg:py-10 lg:flex-row lg:items-center">
        <motion.div
          // variants={banner_left_variant}
          // initial="hidden"
          // animate="visiable"
          className="left_side flex flex-col gap-10 "
        >
          <h1 className="title text-3xl font-extrabold max-w-md">
            Shopping And Department Store.
          </h1>
          <p className="description max-w-xl lg:max-w-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            blanditiis enim a, Nostrum ut deserunt amet sit excepturi eum!
            Adipisci amet fugit doloremque?
          </p>
          <button className="more_info_btn rounded-full py-3 w-40 shadow-sm shadow-green-800">
            Learn More
          </button>
        </motion.div>
        <div
          // initial={{ rotateZ: 0 }}
          // animate={{ rotateZ: "360deg" }}
          // transition={{
          //   ease: "easeIn",
          //   duration: 5,
          //   type: "spring",
          //   // stiffness: 50,
          // }}
          className="right_side origin-center  self-center"
        >
          <img src={BannerImg} alt="banner" className="banner_img" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
