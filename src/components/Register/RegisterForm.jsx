import React, { useState } from "react";
import { Link } from "react-router-dom";
//css
import "../../css/Register/RegisterForm.css";
//components
import Input from "../Layouts/Input";
function RegisterForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    address: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 0,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username is Required.",
    },
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Please Enter a Valid Email.",
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Address ex: street-city-state",
      errorMessage: "Address Is Required",
      // pattern: "",
    },
    {
      id: 4,
      name: "number",
      type: "text",
      placeholder: "Number",
      errorMessage: "Enter Correct Number",
      // pattern: "",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password must contain  at least 6, 30 character, capital, number and special character",
      pattern:
        "(?=^.{6,30}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*",
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "It Dosen't Match",
      pattern: values.password,
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
    <div className="form grid place-items-center my-10">
      <form
        onSubmit={onSubmit}
        className="py-14 px-10 shadow-none sm:shadow-lg rounded-md"
      >
        <h1 className="signUp text-4xl font-extrabold mb-10">Sign Up</h1>
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
            Sign Up
          </button>
        </div>
        {/* inputs */}
        <h1 className="text-sm">
          Do You Already have an account?
          <Link to="/login" className="sign_up_link text-md font-semibold">
            SIGN IN
          </Link>
        </h1>
      </form>
    </div>
  );
}

export default RegisterForm;
