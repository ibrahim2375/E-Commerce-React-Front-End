import React from "react";

function Button({ value, active, fanc }) {
  return (
    <button
      onClick={() => fanc(value)}
      className={`add_to_cart mt-4 text-sm py-2 px-4 outline outline-1 rounded-full ${
        active ? "bg-green-900 text-white" : "bg-transparent text-green-800"
      } outline-green-900`}
    >
      {value}
    </button>
  );
}

export default Button;
