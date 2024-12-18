import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Toolbar } from "../../utils/Toolbar";

import Searchbar from "../../component/Searchbar";
import Facebook_Logo from "../../assest/image/Facebook_Logo.png.webp";
import "./header.css";
import Avatar from "./Avatar";

const Header = () => {
  // use tooltip
  const LinkActive = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "royalblue" : "black",
    };
  };

  return (
    <nav>
      <div className="nav-left">
        <Link to="/">
          <img src={Facebook_Logo} alt="Logo" />
        </Link>
        <Searchbar />
      </div>

      <ul className="nav-middle">
        {Toolbar.map((item, index) => (
          <li key={index} className="group flex justify-center items-center ">
            <span className="hidden  group-hover:inline-block absolute top-full   text-gray-200 bg-black/65 px-2 py-1 rounded-xl transition-all duration-300 -translate-x-0.5">
              {item.name}
            </span>
            <NavLink style={LinkActive} to={item.link} className="active">
              <i className={`${item.icon}`}></i>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <Link to="/notification" className="notificare">
          <i className="fa fa-bell text-lg"></i>
        </Link>

        <Link to="/message" className="message">
          <i className="fas fa-ellipsis-h text-lg"></i>
        </Link>
        <Avatar />
      </div>
    </nav>
  );
};

export default Header;
