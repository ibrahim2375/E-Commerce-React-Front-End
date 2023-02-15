import React, { useState } from "react";
//redux
import { useSelector } from "react-redux";

//icons
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
//components
import Select from "./Select";
//css
import "../../css/Layouts/MobileNav.css";
//icons
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
function MobileNav({ mobileNavState, handleMobileNav }) {
  const categories = useSelector((state) => state.categories);
  const [pages, setPages] = useState([
    { id: 0, page: "Home", path: "/" },
    { id: 1, page: "Products", path: "/products" },
    { id: 2, page: "Contact", path: "/contact" },
  ]);

  return (
    <nav
      className={`mobile_nav_side ${
        mobileNavState ? "fixed" : "hidden"
      } lg:hidden w-full top-0 left-0 bottom-0  z-50 bg-white transition ease-in-out delay-150 duration-300 shadow-md`}
    >
      {/* content */}
      <div className="content divide-x-1 divide-solid divide-slate-400/25 ">
        {/* user */}
        <div className="user_data py-4 px-2 flex justify-center items-center gap-2 text-white">
          <FaUserCircle />
          <h1>Hello , User</h1>
          {/* close icon */}
          <CgClose
            className="text-2xl text-white absolute top-4 left-3 hover:cursor-pointer hover:scale-75"
            onClick={handleMobileNav}
          />
        </div>
        {/* Pages */}
        <div className="pages px-3 pb-4">
          <h1 className="text-md font-bold my-4">All Pages</h1>
          <ul className="links flex flex-col justify-center items-start gap-4">
            {/* custom select  */}
            <li>
              <Select list={categories} title="Categories" />
            </li>
            {pages.map((page) => (
              <li className="links" key={page.id} onClick={handleMobileNav}>
                <Link to={page.path}>{page.page}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Help & Settings */}
        <div className="help px-3 pb-4">
          <h1 className="text-md font-bold my-4">Help & Settings</h1>
          <Link
            to="/login"
            className="flex justify-start items-center gap-2"
            onClick={handleMobileNav}
          >
            <AiOutlineUser className="text-xl" />
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
