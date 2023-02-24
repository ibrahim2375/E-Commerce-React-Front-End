import React, { useState } from "react";
//redux
import * as Actions from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
//router
import { useNavigate } from "react-router-dom";
//icons
import { IoIosSearch } from "react-icons/io";
//components
import SearchedList from "./SearchedList";
function Search() {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchList = useSelector((state) => state.searchList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //handle show list serched  items
  const display = () => {
    setShow(!show);
  };
  //   add serchQuery to serch list to save search keyword
  const saveSearchQuery = async () => {
    await dispatch(Actions.SearchList({ searchQuery }));
    setShow(false);
  };

  //handle Search
  const onSubmit = (e) => {
    e.preventDefault();
    saveSearchQuery();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="relative">
        {/* search input */}
        <div className="px-3 border border-1 border-slate-400 bg-slate-200 rounded-lg pl-4   w-40 h-8  flex items-center justify-between sm:w-64  lg:w-80  ">
          <input
            type="text"
            className=" w-full  h-full bg-transparent text-sm md:text-md"
            placeholder="Search Product"
            value={searchQuery}
            onFocus={() => display()}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoIosSearch className="text-2xl " />
        </div>
        {/* search list */}
        {searchList?.length !== 0 && <SearchedList show={show} />}
      </form>
      {/* cover hidden */}
      {show && (
        <div
          onClick={() => display()}
          className="hidden_cover absolute top-0 left-0 right-0 bottom-0 z-10"
        ></div>
      )}
    </div>
  );
}

export default Search;
