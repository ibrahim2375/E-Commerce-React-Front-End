import React from "react";
//redux
import { useSelector } from "react-redux";
function SearchedList({ show }) {
  const searchList = useSelector((state) => state.searchList);
  return (
    <div
      style={{ display: show ? "block" : "none" }}
      className="p-5 bg-white shadow-lg absolute top-10 w-full rounded-xl z-20 "
    >
      {searchList
        ?.slice(searchList?.length - 5, searchList?.length)
        .map((item, i) => (
          <a
            key={i}
            href={`/search?${item}`}
            className="font-light hover:shadow-md w-full px-4 py-2 flex flex-col gap-4 rounded-lg"
          >
            {item}
          </a>
        ))
        .reverse()}
    </div>
  );
}

export default SearchedList;
