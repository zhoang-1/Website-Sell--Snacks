import React, { useEffect, useState } from "react";
import "./Home.css";
import PostCreate from "../../component/article/PostCreate";
import axiosClient from "../../api/axiosClient";
const MiddelPanel = () => {
  const [dataPost, setDataPost] = useState([]);
  return (
    <div className="middle-panel">
      {/* post bài viết  */}
      <PostCreate />
      {/* view bài viết */}
      <div className="post">
        <div className="post-top">
          <div className="dp">
            <img src="./images/girl.jpg" alt="" />
          </div>
          <div className="post-info">
            <p className="name">Anuska Sharma</p>
            <span className="time">12 hrs ago</span>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>

        <div className="post-content">
          Roses are red <br></br>
          Violets are blue <br></br>
          I'm ugly & you are too😏
        </div>

        <div className="post-bottom">
          <div className="action">
            <i className="far fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div className="action">
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </div>
          <div className="action">
            <i className="fa fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="post-top">
          <div className="dp">
            <img src="./images/dp.jpg" alt="" />
          </div>
          <div className="post-info">
            <p className="name">Ramesh GC</p>
            <span className="time">2 days ago</span>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>

        <div className="post-content">
          Mountains are so cool
          <img src="images/mountains.jpg" />
        </div>

        <div className="post-bottom">
          <div className="action">
            <i className="far fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div className="action">
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </div>
          <div className="action">
            <i className="fa fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="post-top">
          <div className="dp">
            <img src="./images/boy.jpg" alt="" />
          </div>
          <div className="post-info">
            <p className="name">Priyank Saksena</p>
            <span className="time">1 week ago</span>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="post-content">
          Happy birthday dear
          <img src="./images/girl_with_light.jpg" alt="Mountains" />
        </div>
        <div className="post-bottom">
          <div className="action">
            <i className="far fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div className="action">
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </div>
          <div className="action">
            <i className="fa fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>

      <div className="post">
        <div className="post-top">
          <div className="dp">
            <img src="./images/model.jpg" alt="" />
          </div>
          <div className="post-info">
            <p className="name">Pragati Adhikari</p>
            <span className="time">5 mins ago</span>
          </div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="post-content">
          Hey, everybody! My new shoes are here
          <img src="./images/shoes.jpg" alt="Shoes" />
        </div>
        <div className="post-bottom">
          <div className="action">
            <i className="far fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div className="action">
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </div>
          <div className="action">
            <i className="fa fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddelPanel;
