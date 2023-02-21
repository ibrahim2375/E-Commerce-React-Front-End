import React from "react";

function FilterSelect({ options, title, onChange }) {
  return (
    <div className="filter_select bg-gray-200 px-3 py-1 rounded-full ">
      <select className={`bg-gray-200`} name={title} onChange={onChange}>
        <option value={title} className="text-gray-400">
          {title}
        </option>
        {options?.map((op,i) => (
          <option key={i} value={op.data}>
            {op.data || op.category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSelect;
