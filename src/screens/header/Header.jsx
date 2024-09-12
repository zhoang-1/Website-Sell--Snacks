import React from "react";
import Searchbar from "../../component/Searchbar";
import imFace from "../../assest/image/Facebook_Logo.png.webp";
const Header = () => {
  return (
    <div className="w-full m-0 p-0">
      <div className="">
        <div>
          <div className="logo w-[10%]">
            <img src={imFace} alt="" />
          </div>
          <div className="search">
            <Searchbar />
          </div>
        </div>

        <div className="components pages"></div>
        <div className="user-message"></div>
      </div>
    </div>
  );
};

export default Header;
