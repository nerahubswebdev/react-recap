import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout-components/header";
import Footer from "../layout-components/footer";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
