import React, { useEffect, useState } from "react";
import "../screens/home/Home.css"
import axiosClient from "../api/axiosClient";

const Content = () => {
  const [viewPost, setViewPost] = useState([]);

  useEffect (() => {
    async function viewPostArticle() {
      let res = await axiosClient.post(
        `/v1/viewPost`,
      );
      setViewPost(res.data);
     }
     viewPostArticle()
      // console.log(post)
  },[]);
  
  return (
    <div>
        {
            viewPost?.map((item,index) => (
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
                  {item.title}
                  <img src={item.image}  alt="" />
                  {/* Đặt điều kiện cho image tùy user có đẩy ảnh lên không */}
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
            ))
        }
      
    </div>
  );
};

export default Content;
