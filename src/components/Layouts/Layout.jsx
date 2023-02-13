import React from "react";
//router outlit
import { Outlet } from "react-router-dom";
//components
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
