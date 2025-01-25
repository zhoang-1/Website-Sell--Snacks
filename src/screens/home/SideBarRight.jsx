import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AllFriend } from "../../utils/user";
const SideBarRight = () => {
  const filteredFriends = AllFriend.filter(
    (friend) => friend.friendStatus === "friends"
  );
  return (
    <div class="right-panel">
      <div class="pages-section">
        <h4>Your pages</h4>
        <Link className="page" to="#">
          <div className="dp">
            <img src="./images/logo.png" alt="" />
          </div>
          <p class="name">Cody</p>
        </Link>
      </div>

      <div class="friends-section">
        <h4>Friends</h4>
        <ul>
          {filteredFriends?.map((item, index) => (
            <li>
              <Link className="friend" to={item.link}>
                <div className="dp">
                  <img src={item.avatar} alt="" />
                </div>
                <p className="name">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarRight;
