import React from "react";
import "./Home.css";

const SideBarRight = () => {
  return (
      <div class="right-panel">
        <div class="pages-section">
          <h4>Your pages</h4>
          <a class="page" href="#">
            <div class="dp">
              <img src="./images/logo.png" alt="" />
            </div>
            <p class="name">Cody</p>
          </a>

          <a class="page" href="#">
            <div class="dp">
              <img src="./images/dp.jpg" alt="" />
            </div>
            <p class="name">Cody Tutorials</p>
          </a>
        </div>

        <div class="friends-section">
          <h4>Friends</h4>
          <a class="friend" href="#">
            <div class="dp">
              <img src="./images/dp.jpg" alt="" />
            </div>
            <p class="name">Henry Mosely</p>
          </a>

          <a class="friend" href="#">
            <div class="dp">
              <img src="./images/shoes.jpg" alt="" />
            </div>
            <p class="name">George</p>
          </a>

          <a class="friend" href="#">
            <div class="dp">
              <img src="./images/boy.jpg" alt="" />
            </div>
            <p class="name">Aakash Malhotra</p>
          </a>

          <a class="friend" href="#">
            <div class="dp">
              <img src="./images/model.jpg" alt="" />
            </div>
            <p class="name">Ragini Khanna</p>
          </a>

          <a class="friend" href="#">
            <div class="dp">
              <img src="./images/boy.jpg" alt="" />
            </div>
            <p class="name">Justin Bieber</p>
          </a>

          <a class="friend" href="#">
            <div class="dp">
              <img src="./images/dp.jpg" alt="" />
            </div>
            <p class="name">Ramesh GC</p>
          </a>

          <a class="friend" href="#">
            <div class="dp">
              <img src="./images/model.jpg" alt="" />
            </div>
            <p class="name">Sajita Gurung</p>
          </a>
        </div>
      </div>
  );
};

export default SideBarRight;
