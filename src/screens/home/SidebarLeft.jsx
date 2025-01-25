import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { sideBarLefts } from "../../utils/Toolbar";
const SidebarLeft = () => {
  return (
    <div class="left-panel">
      <ul>
        {sideBarLefts?.map((item, index) => (
          <li>
            <Link to={item.link}>
              <i className={`${item.icon}`}></i>
              <p>{item.nameBar}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div class="footer-links">
        <Link to="#">Privacy</Link>
        <Link to="#">Terms</Link>
        <Link to="#">Advance</Link>
        <Link to="#">More</Link>
      </div>
    </div>
  );
};

export default SidebarLeft;
