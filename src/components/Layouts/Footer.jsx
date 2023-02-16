import React from "react";
//icons
import { FcShop } from "react-icons/fc";
import { FiHelpCircle } from "react-icons/fi";
//functions
import { truncate } from "../../functions/Truncate";
function Footer() {
  return (
    <footer className="px-16 bg-white ">
      <div className="w-full h-1 bg-slate-300"></div>
      <div className="top_part flex   gap-10 flex-wrap lg:justify-between lg:flex-nowrap py-10 mb-20">
        <div className="site_info flex flex-col gap-5">
          {/* logo */}
          <a
            href="/"
            className="logo flex items-center gap-1 text-xl font-extrabold"
          >
            <FcShop />
            <h1 className="logo_text ">ShopCart</h1>
            {/* <img src="logo.png" alt="" className="h-16" /> */}
          </a>
          {/* description site */}
          <p className="text-sm w-40 sm:w-64 md:w-96 text-slate-400">
            {truncate(
              ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            dolorum voluptatum. Cupiditate possimus magni ea consequatur?
            Ratione neque omnis molestiae tempora.`,
              99
            )}
          </p>
          <h1>Accepted Payments</h1>
          <img src="/paymentMethod.png" alt="payment method img" className="w-40 object-contain" />
        </div>
        {/* footer links data */}
        <div className="about_us">
          <h1 className="font-bold text-lg">About Us</h1>
          <ul className="text-sm  flex flex-col justify-center gap-2">
            <li>About ShopCart</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Help</li>
            <li>Shop by Location</li>
            <li>ideas & Guides</li>
          </ul>
        </div>
        <div className="services">
          <h1 className="font-bold text-lg">Services</h1>
          <ul className="text-sm  flex flex-col justify-center gap-2">
            <li>Gift Card</li>
            <li>Mobile App</li>
            <li>Account SignUp</li>
            <li>Delivery</li>
            <li>Order Pickup</li>
          </ul>
        </div>
        <div className="help">
          <h1 className="font-bold text-lg">Help</h1>
          <ul className="text-sm  flex flex-col justify-center gap-2">
            <li>Returns</li>
            <li>Track order</li>
            <li>feedback</li>
            <li>security</li>
            <li>contact us</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-1 bg-slate-300"></div>

      {/* bottom part */}
      <div className="bottom_part flex justify-between items-center py-10 gap-10 flex-wrap">
        <div className="help_center">
          <p className="flex items-center gap-2">
            <FiHelpCircle className="text-pink-500" />
            <span className="text-sm"> Help Center</span>
          </p>
        </div>
        <a href="#" className="text-sm">
          Privacy Policy
        </a>
        <p className="text-sm">&copy; All Rights Reserved by Ibrahim | 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
