import React, { useState } from "react";
//router
import { useNavigate } from "react-router-dom";
//icons
import { IoIosSearch } from "react-icons/io";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  //handle Search
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="px-3 border border-1 border-slate-400 bg-slate-200 rounded-lg pl-4   w-40 h-8  flex items-center justify-between sm:w-64  lg:w-80  "
      >
        <input
          type="text"
          className=" w-full  h-full bg-transparent text-sm md:text-md"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IoIosSearch className="text-2xl " />
      </form>
    </div>
  );
}

export default Search;
