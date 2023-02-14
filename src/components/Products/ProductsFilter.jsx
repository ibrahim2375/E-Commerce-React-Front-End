import React, { useState, useRef, useEffect } from "react";
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

function ProductsFilter() {
  // const [filters, setFilters] = useState(null);
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
      <FilterSelect title="Type" options={Filters.Type} />
      <FilterSelect title="Price" options={Filters.price} />
      <FilterSelect title="Color" options={Filters.colors} />
      <FilterSelect title="Size" options={Filters.sizes} />
      <FilterSelect title="Offer" options={Filters.offers} />
      <FilterSelect title="Sort By" options={Filters.SortBy} />
    </div>
  );
}

export default ProductsFilter;
