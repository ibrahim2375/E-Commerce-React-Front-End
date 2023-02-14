import React from "react";

function FilterSelect({ options, title }) {
  return (
    <div className="filter_select bg-gray-200 px-3 py-1 rounded-full ">
      <select className={`bg-gray-200`}>
        <option value={title} className="text-gray-400">
          {title}
        </option>
        {options?.map((op) => (
          <option key={op.id} value={op.data}>
            {op.data}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSelect;
