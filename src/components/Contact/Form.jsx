import React from "react";
//icons
import { HiOutlineMail } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { BsTelephone } from "react-icons/bs";
import { FcShop } from "react-icons/fc";
function Form() {
  return (
    <div className="contact flex flex-col lg:flex-row gap-20 py-10  px-2 w-full">
      {/* contact information */}
      <div className="flex flex-col gap-10 flex-1">
        <h1 className="text-2xl font-bold">Keep Touch With Us.</h1>
        <div className="site flex gap-5 items-center">
          <CgWebsite className="text-xl" />
          <h1 className="text-2xl font-light ">shoCart.com</h1>
        </div>
        <div className="email flex gap-5 items-center">
          <HiOutlineMail className="text-xl" />
          <h1 className="text-2xl font-light ">shoCart@gmail.com</h1>
        </div>
        <div className="phone flex gap-5 items-center">
          <BsTelephone className="text-xl" />
          <h1 className="text-2xl font-light ">+01017580144</h1>
        </div>
      </div>
      {/* contact form */}
      <form className="px-4  w-full flex-1">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <div className="flex flex-col gap-4 justify-center">
          {/* name */}
          <input
            type="text"
            placeholder="Name"
            className="input_bg rounded-lg py-2 px-2 "
          />
          {/* email */}
          <input
            type="email"
            placeholder="Email Address"
            className="input_bg rounded-lg py-2 px-2 "
          />
          {/* mobile */}
          <input
            type="text"
            placeholder="Number"
            className="input_bg rounded-lg py-2 px-2 "
          />
          {/* comment */}
          <textarea
            className="input_bg rounded-lg py-2 px-2  resize-y"
            placeholder="Comment"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="py-2 my-4 px-4 rounded-full">
          Contact
        </button>
      </form>
    </div>
  );
}

export default Form;
