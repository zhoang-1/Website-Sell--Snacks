import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Kiểm tra nếu có token trong localStorage (hoặc sessionStorage)
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Nếu không có token, chuyển hướng người dùng đến trang đăng nhập
    return <Navigate to="/login" />;
  }

  // Nếu có token, cho phép truy cập vào trang
  return children;
};

export default ProtectedRoute;
