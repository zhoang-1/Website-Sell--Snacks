import React from "react";
import "./Home.css";

const MiddelPanel = () => {
  return (
      <div class="middle-panel">
{/* post bài viết  */}
        <div class="post create">
          <div class="post-top">
            <div class="dp">
              <img src="./images/girl.jpg" alt="" />
            </div>
            <input type="text" placeholder="What's on your mind, Aashish ?" />
          </div>

          <div class="post-bottom">
            <div class="action">
              <i class="fa fa-video"></i>
              <span>Live video</span>
            </div>
            <div class="action">
              <i class="fa fa-image"></i>
              <span>Photo/Video</span>
            </div>
            <div class="action">
              <i class="fa fa-smile"></i>
              <span>Feeling/Activity</span>
            </div>
          </div>
        </div>
{/* view bài viết */}
        <div class="post">
          <div class="post-top">
            <div class="dp">
              <img src="./images/girl.jpg" alt="" />
            </div>
            <div class="post-info">
              <p class="name">Anuska Sharma</p>
              <span class="time">12 hrs ago</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div class="post-content">
            Roses are red <br></br>
            Violets are blue <br></br>
            I'm ugly & you are too😏
          </div>

          <div class="post-bottom">
            <div class="action">
              <i class="far fa-thumbs-up"></i>
              <span>Like</span>
            </div>
            <div class="action">
              <i class="far fa-comment"></i>
              <span>Comment</span>
            </div>
            <div class="action">
              <i class="fa fa-share"></i>
              <span>Share</span>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="post-top">
            <div class="dp">
              <img src="./images/dp.jpg" alt="" />
            </div>
            <div class="post-info">
              <p class="name">Ramesh GC</p>
              <span class="time">2 days ago</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
          </div>

          <div class="post-content">
            Mountains are so cool
            <img src="images/mountains.jpg" />
          </div>

          <div class="post-bottom">
            <div class="action">
              <i class="far fa-thumbs-up"></i>
              <span>Like</span>
            </div>
            <div class="action">
              <i class="far fa-comment"></i>
              <span>Comment</span>
            </div>
            <div class="action">
              <i class="fa fa-share"></i>
              <span>Share</span>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="post-top">
            <div class="dp">
              <img src="./images/boy.jpg" alt="" />
            </div>
            <div class="post-info">
              <p class="name">Priyank Saksena</p>
              <span class="time">1 week ago</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <div class="post-content">
            Happy birthday dear
            <img src="./images/girl_with_light.jpg" alt="Mountains" />
          </div>
          <div class="post-bottom">
            <div class="action">
              <i class="far fa-thumbs-up"></i>
              <span>Like</span>
            </div>
            <div class="action">
              <i class="far fa-comment"></i>
              <span>Comment</span>
            </div>
            <div class="action">
              <i class="fa fa-share"></i>
              <span>Share</span>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="post-top">
            <div class="dp">
              <img src="./images/model.jpg" alt="" />
            </div>
            <div class="post-info">
              <p class="name">Pragati Adhikari</p>
              <span class="time">5 mins ago</span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <div class="post-content">
            Hey, everybody! My new shoes are here
            <img src="./images/shoes.jpg" alt="Shoes" />
          </div>
          <div class="post-bottom">
            <div class="action">
              <i class="far fa-thumbs-up"></i>
              <span>Like</span>
            </div>
            <div class="action">
              <i class="far fa-comment"></i>
              <span>Comment</span>
            </div>
            <div class="action">
              <i class="fa fa-share"></i>
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MiddelPanel;
