import React from "react";
//router outlit
import { Outlet, useLocation } from "react-router-dom";
//components
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
  const Location = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {Location.pathname === "/login" ||
      Location.pathname === "/register" ? null : (
        <Footer />
      )}
    </>
  );
}

export default Layout;
