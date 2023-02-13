import React, { useState } from "react";

//css
import "../../css/Layouts/Input.css";
function Input(props) {
  const [isFoucs, setIsFoucs] = useState(false);
  const { name, type, placeholder, value, pattern, onChange, errorMessage } =
    props;
  const handleFoucs = () => {
    setIsFoucs(true);
  };
  return (
    <div className="flex flex-col justify-center gap-1 w-64 sm:w-80">
      <input
        className="custom_input  h-9 pl-2 rounded-md"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        pattern={pattern}
        required
        onBlur={handleFoucs}
        onFocus={() => name === "confirmPassword" && handleFoucs}
        focus={isFoucs.toString()}
      />
      <div className="error_message text-xs w-fullvar(--error-color);">
        {errorMessage}
      </div>
    </div>
  );
}

export default Input;
