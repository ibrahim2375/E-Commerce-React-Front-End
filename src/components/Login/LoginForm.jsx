import React, { useState } from "react";
import { Link } from "react-router-dom";
//css
import "../../css/Login/LoginForm.css";
//components
import Input from "../Layouts/Input";
function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: 0,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Please Enter a Valid Email.",
    },
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password must contain  at least 6, 30 character, capital, number and special character",
      pattern:
        "(?=^.{6,30}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*",
    },
  ];
  //handle Input Change
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //handle submit form
  const onSubmit = (e) => {
    e.preventDefault();
    console.table(values);
  };
  return (
    <div className="form grid place-items-center my-20">
      <form
        onSubmit={onSubmit}
        className="py-14 px-10 shadow-none sm:shadow-lg rounded-md"
      >
        <h1 className="signIn text-4xl font-extrabold mb-10">Sign In</h1>
        {/* inputs */}
        <div className="inputs flex flex-col justify-center gap-10">
          {inputs.map((i) => (
            <Input
              key={i.id}
              {...i}
              value={values[i.name]}
              onChange={handleInputChange}
              pattern={i?.pattern}
            />
          ))}
          <button type="submit" className="w-32 rounded-full py-2 px-4 mb-4">
            Sign In
          </button>
        </div>
        {/* inputs */}
        <Link
          to="/forgot-passowrd"
          className="forgot_passowrd text-sm font-bold"
        >
          Forgot Password?
        </Link>
        <h1 className="text-sm">
          New To ShopCart?
          <Link to="/register" className="sign_up_link text-md font-semibold">
            SIGN UP
          </Link>
        </h1>
      </form>
    </div>
  );
}

export default LoginForm;
