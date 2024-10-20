import React from "react";
import MiddelPanel from "./MiddelPanel";
import SidebarLeft from "./SidebarLeft";
import SideBarRight from "./SideBarRight";
import "./Home.css"
const HomeScreen = () => {
  return (
    <div className="container ">
      <div>
        <SidebarLeft />
      </div>
      <div>
        <MiddelPanel />
      </div>
      <div>
        <SideBarRight />
      </div>
    </div>
  );
};

export default HomeScreen;
