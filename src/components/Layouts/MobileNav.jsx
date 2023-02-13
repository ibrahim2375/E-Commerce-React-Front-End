//icons
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import React from "react";
//components
import Select from "./Select";
//css
import "../../css/Layouts/MobileNav.css";
//icons
import { CgClose } from "react-icons/cg";
function MobileNav({ mobileNavState, handleMobileNav }) {
  return (
    <nav
      className={`mobile_nav_side ${
        mobileNavState ? "fixed" : "hidden"
      } lg:hidden w-full top-0 left-0 bottom-0 z-50 bg-white transition ease-in-out delay-150 duration-300 `}
    >
      <div className="content divide-x-1 divide-solid divide-slate-400/25 ">
        {/* user */}
        <div className="user_data py-4 px-2 flex justify-center items-center gap-2 text-white">
          <FaUserCircle />
          <h1>Hello , User</h1>
          {/* close icon */}
          <CgClose
            className="text-2xl text-white absolute top-4 left-3 hover:cursor-pointer"
            onClick={handleMobileNav}
          />
        </div>
        {/* Pages */}
        <div className="pages px-3 pb-4">
          <h1 className="text-md font-bold my-4">All Pages</h1>
          <ul className="links flex flex-col justify-center items-start gap-4">
            <li className="hover:cursor-pointer">Categories</li>
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Products</li>
            <li className="hover:cursor-pointer">Blog</li>
            <li className="hover:cursor-pointer">Contact</li>
          </ul>
        </div>
        {/* Help & Settings */}
        <div className="help px-3 pb-4">
          <h1 className="text-md font-bold my-4">Help & Settings</h1>
          <button className="flex justify-center items-center gap-2">
            <AiOutlineUser className="text-xl" />
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
