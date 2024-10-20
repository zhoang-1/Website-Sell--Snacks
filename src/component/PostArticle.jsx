import React, { useEffect, useState } from "react";
import { contentface } from "../utils/article";
import { AiOutlineLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaSquareShareNodes } from "react-icons/fa6";
import "../screens/home/Home.css"
import axiosClient from "../api/axiosClient";

const Content = () => {
  const [post, setpost] = useState([]);

  useEffect (() => {
    async function postArticle() {
      let res = await axiosClient.post(
        `/v1/post`,
      );
      setpost(res.data);
     }
     postArticle()
      // console.log(post)
  },[])
  return (
    <div>
      
      
    </div>
  );
};

export default Content;
