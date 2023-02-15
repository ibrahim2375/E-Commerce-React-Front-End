import React from 'react'
//icons
import { BsTelephone } from "react-icons/bs";
function TopNav() {
  return (
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
  );
}

export default TopNav