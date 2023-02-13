import React from "react";

//icons
import { IoIosSearch } from "react-icons/io";
function Search() {
  return (
    <div>
      <form className="px-3 border border-1 border-slate-400 bg-slate-200 rounded-lg pl-4   w-40 h-8  flex items-center justify-between sm:w-64  lg:w-80  ">
        <input
          type="text"
          className=" w-full  h-full bg-transparent text-sm md:text-md"
          placeholder="Search Product"
        />
        <IoIosSearch className="text-2xl " />
      </form>
    </div>
  );
}

export default Search;
