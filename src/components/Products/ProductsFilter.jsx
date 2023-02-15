import React, { useState, useRef, useEffect } from "react";
//redux
import { useSelector } from "react-redux";
import * as Actions from "../../redux/reducers";
//hook
import UseFetch from "../../Hooks/UseFetch";
//json data
import Filters from "../../json/filters.json";
//components
import FilterSelect from "./FilterSelect";
//functions
import { ScrollByMouse } from "../../functions/ScrollByMouse";
//variables
let scrollLeft = 0;
let startX;
let isDown = false;

function ProductsFilter({ onChange }) {
  const categories = useSelector((state) => state.categories);
  const filters_row = useRef();

  //handle scrolling
  useEffect(() => {
    ScrollByMouse(filters_row, startX, scrollLeft, isDown);
  }, [isDown]);
  return (
    <div
      ref={filters_row}
      className="filters flex gap-4 items-center row overflow-x-auto py-2 px-2 cursor-pointer"
    >
      {/* color */}
      <FilterSelect title="Type" options={categories} onChange={onChange} />
      <FilterSelect title="Price" options={Filters.price} onChange={onChange} />
      <FilterSelect
        title="Color"
        options={Filters.colors}
        onChange={onChange}
      />
      <FilterSelect title="Size" options={Filters.sizes} onChange={onChange} />
      <FilterSelect
        title="Offer"
        options={Filters.offers}
        onChange={onChange}
      />
      <FilterSelect
        title="Sort By"
        options={Filters.SortBy}
        onChange={onChange}
      />
    </div>
  );
}

export default ProductsFilter;