// src/pages/notfound/NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/"); // Điều hướng về trang chính

  return (
    <div className="not-found">
      <h1>404 - Trang không tồn tại</h1>
      <p>Đường dẫn bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <button onClick={goHome} className="btn">
        Quay về Trang Chủ
      </button>
    </div>
  );
};

export default NotFound;
