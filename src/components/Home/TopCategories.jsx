import React, { useEffect, useState, useRef } from "react";
//request api
import axios from "../../api/axios";
//functions
import { ScrollByMouse } from "../../functions/ScrollByMouse";
//css
import "../../css/Home/TopCategories.css";
//variables
let scrollLeft = 0;
let startX;
let isDown = false;

function TopCategories() {
  const [categories, setCategories] = useState([]);
  const top_categories_slide = useRef();
  //handle mouse over scroll

  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get("/categories")
        .then((response) => setCategories(response.data));
    };
    getCategories();
  }, []);
  //handle scrolling
  useEffect(() => {
    ScrollByMouse(top_categories_slide, startX, scrollLeft, isDown);
  }, [isDown]);
  return (
    <div className="top_categories z-10">
      <h1 className="my-4 font-bold text-2xl">Shop Our Top Categories</h1>
      <div
        ref={top_categories_slide}
        className="row categories overflow-x-auto   flex  items-center gap-6 py-5 cursor-pointer"
      >
        {categories.map((category) => (
          <div
            className={`category text-center rounded-lg shadow-md `}
            style={{ backgroundColor: category.bg_color }}
            key={category.id}
          >
            <div className={` relative content `}>
              <h2 className="title text-white font-bold py-2 ">
                {category.title}
              </h2>
              <img
                src={`${category.img}`}
                alt=""
                className="absolute top-0 bottom-0 left-0 right-0 "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCategories;
