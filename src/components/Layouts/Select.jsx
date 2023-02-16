import React, { useState, useRef } from "react";
//icons
import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";
//css
import "../../css/Layouts/Select.css";
//animation
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Select({ list, title }) {
  // const [selectState, setselectState] = useState(false);
  //handle custom select
  // const handleSelectState = () => {
  //   setselectState(!selectState);
  // };
  return (
    <div className={`custom_select`}>
      <div className="select flex gap-1 items-center">
        <p>{title}</p>
        <IoMdArrowDropdown className="text-xl" />
      </div>
      <ul
        className={`options flex-col w-64 justify-center  py-5 rounded-lg shadow-md`}
      >
        {list?.map((l, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 100, stiffness: 100 }}
            className=""
          >
            <a
              href={`/products?${l?.category}`}
              className="option pl-2  flex  gap-2 px-3  py-2 rounded-md"
            >
              <div
                className={`image_bg w-10 h-10 relative rounded-xl`}
                style={{ backgroundColor: l?.bg_color }}
              >
                <img
                  src={`/${l?.img}`}
                  alt="img"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3> {l.category}</h3>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
