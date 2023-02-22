import React, { useState } from "react";
//api request
import axios from "../../api/axios";
//redux
import { useDispatch } from "react-redux";
import * as Actions from "../../redux/reducers";

import { Link } from "react-router-dom";
//css
import "../../css/Login/LoginForm.css";
//components
import Input from "../Layouts/Input";
//toast message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginForm() {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
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
  //successfully message
  //toast message
  const successMessage = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  //handle submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/user/login", { ...values })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(Actions.Login(res?.data));
        }
      })
      .catch((err) => {
        console.log(err?.response?.data?.error);
        setError(err?.response?.data?.error);
      });
  };
  return (
    <div className="form grid place-items-center my-20">
      <form
        onSubmit={onSubmit}
        className="py-14 px-10 shadow-none sm:shadow-lg rounded-md"
      >
        <h1 className="signIn text-4xl font-extrabold mb-10">Sign In</h1>
        {/* error message from server */}
        {error && <p className="text-md  mb-4 text-red-800">{error}</p>}
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
      {/* //toast container setting */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default LoginForm;
