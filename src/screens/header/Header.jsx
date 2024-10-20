import { useState } from "react";
// import Searchbar from "../../component/Searchbar";
import Facebook_Logo from "../../assest/image/Facebook_Logo.png.webp";
import { Link } from "react-router-dom";
// import { Toolbar } from "../../utils/Toolbar";
// import { IoMdChatboxes } from "react-icons/io";
// import { FaRegUserCircle } from "react-icons/fa";
import "./header.css";

const Header = () => {
  // use tooltip

  return (
    <nav>
      <div className="nav-left">
        <img src={Facebook_Logo} alt="Logo" />
        <input type="text" placeholder="Search Mediabook.." />
      </div>

      <div class="nav-middle">
        <Link href="#" class="active">
          <i class="fa fa-home"></i>
        </Link>

        <Link href="#">
          <i class="fa fa-user-friends"></i>
        </Link>

        <Link href="#">
          <i class="fa fa-play-circle"></i>
        </Link>

        <Link href="#">
          <i class="fa fa-users"></i>
        </Link>
      </div>

      <div class="nav-right">
        <span class="profile"></span>

        <Link to="/dcbshk">
          <i class="fa fa-bell"></i>
        </Link>

        <Link to="#">
          <i class="fas fa-ellipsis-h"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
