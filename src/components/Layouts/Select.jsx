import React, { useState, useRef } from "react";
//icons
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
//css
import "../../css/Layouts/Select.css";
//animation
import { motion } from "framer-motion";
function Select({ list, title }) {
  const [selectState, setselectState] = useState(false);
  //handle custom select
  const handleSelectState = () => {
    setselectState(!selectState);
  };
  return (
    <div className="custom_select">
      <div
        className="select flex gap-1 items-center"
        onClick={handleSelectState}
      >
        <p>{title}</p>
        {selectState ? (
          <IoMdArrowDropup className="text-xl" />
        ) : (
          <IoMdArrowDropdown className="text-xl" />
        )}
      </div>
      <ul
        className={`options  ${
          selectState ? "flex" : "hidden"
        } flex-col gap-2  py-5 rounded-md shadow-md`}
      >
        {list.map((l, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 100, stiffness: 100 }}
            className="option pl-2 w-32"
          >
            {l.category}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Select;
