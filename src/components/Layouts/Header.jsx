import React, { useState } from "react";
//icons
import { BsTelephone } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { FcShop } from "react-icons/fc";
//animation
// import { motion } from "framer-motion";
//components
import Search from "./Search";
import MobileNav from "./MobileNav";
import Select from "./Select";
//redux fetch data from store
import { useSelector } from "react-redux";
//css
import "../../css/Layouts/Header.css";
import { Link } from "react-router-dom";
function Header() {
  //get cart length to disply in budget
  const cartLenght = useSelector((state) => state.cart?.length);
  const [mobileNavState, setMobileNavState] = useState(false);
  const [categories, setCategories] = useState([
    { id: 0, category: "Travel" },
    { id: 1, category: "Art" },
    { id: 2, category: "Shoes" },
    { id: 3, category: "Books" },
  ]);
  const [pages, setPages] = useState([
    { id: 0, page: "Home", path: "/" },
    { id: 1, page: "Products", path: "/products" },
    { id: 2, page: "Contact", path: "/contact" },
  ]);
  // handle mobile nav status
  const handleMobileNav = () => {
    setMobileNavState(!mobileNavState);
  };
  return (
    <header className="w-full shadow-md ">
      {/* first nav contain site info*/}
      <nav className="info_nav">
        <div className="content container mx-auto px-4 flex justify-between py-2 w-full  text-white">
          <div className="phone_number flex gap-2 justify-center items-center">
            <BsTelephone />
            <p>+873980983</p>
          </div>
          <p className="ads hidden md:block">
            Get 50% off on Selected Items | <a href="#">Shop Now</a>
          </p>
          <div className="site_info flex gap-4">
            <select
              className="language block w-full   py-1   rounded leading-tight"
              id="grid-state"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="Arabic">French</option>
            </select>

            <select
              className="location block w-full   py-1 px-1  rounded leading-tight"
              id="grid-state"
            >
              <option value="eg">EG</option>
              <option value="usa">USA</option>
              <option value="usa">UAE</option>
            </select>
          </div>
        </div>
      </nav>
      {/* second nav */}
      <nav className="second_nav  links_nav container mx-auto px-4 flex justify-between items-center py-4 bg-white  ">
        {/* menu btn  */}
        <HiMenuAlt1
          className="text-2xl hover:cursor-pointer lg:hidden hover:scale-75"
          onClick={handleMobileNav}
        />
        {/* logo */}
        <a
          href="#"
          className="logo flex items-center gap-1 text-2xl font-extrabold"
        >
          <FcShop />
          <h1 className="logo_text hidden sm:flex">ShopCart</h1>
          {/* <img src="logo.png" alt="" className="h-16" /> */}
        </a>
        <ul className="hidden links lg:flex justify-center items-center gap-4 z-10">
          <li>
            <Select list={categories} title={"Categories"} />
          </li>
          {pages.map((page) => (
            <li className="links" key={page.id}>
              <Link to={page.path}>{page.page}</Link>
            </li>
          ))}
        </ul>
        {/* search input */}
        <Search />
        {/* login and sugup pages */}
        <div className="account_data flex justify-center items-center gap-4">
          <Link
            to="/login"
            className="hidden lg:flex justify-center items-center gap-2"
          >
            <AiOutlineUser className="text-2xl" />
            Account
          </Link>
          {/* cart icon */}
          <Link to="/cart" className="flex justify-center items-center gap-2">
            <div className="cart_icon relative">
              <p className="budget">{cartLenght}</p>
              <AiOutlineShoppingCart className="text-2xl" />
            </div>
            Cart
          </Link>
        </div>
      </nav>
      {/* mobile nav side */}
      <MobileNav
        mobileNavState={mobileNavState}
        handleMobileNav={handleMobileNav}
      />
    </header>
  );
}

export default Header;
