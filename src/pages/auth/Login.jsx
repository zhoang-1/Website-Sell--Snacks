import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Xử lý sự kiện khi người dùng submit form đăng nhập
  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngừng việc reload trang khi submit

    try {
      // Gửi yêu cầu đăng nhập đến API
      const response = await axiosClient.post('/api/auth/login', {
        username: email, // Sử dụng email như username nếu cần
        password: password,
      });
      // Lưu token vào localStorage
      console.log(response)
      if (response.data.data.token) {
        localStorage.setItem("authToken", response.data.data.token);
      } else {
        console.error('Token không hợp lệ:', response.data.data);
      }
      // Chuyển hướng đến trang chủ hoặc trang yêu cầu sau khi đăng nhập thành công
      navigate('/');
    } catch (err) {
      // Hiển thị lỗi nếu đăng nhập thất bại
      const errorMessage = err.response?.data?.message || 'Đăng nhập thất bại';
      setError(errorMessage);
      // setError('Đăng nhập không thành công. Vui lòng thử lại!');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-blue-600 text-4xl font-bold">MediaBook</h1>
        </div>

        {/* Form đăng nhập */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Đăng nhập
          </button>
        </form>

        {/* Hiển thị thông báo lỗi */}
        {error && (
          <div className="mt-4 text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        {/* Các link khác */}
        <div className="text-center mt-6">
          <Link to='/forgot-password' className="text-sm text-blue-600 hover:underline">
            Quên mật khẩu?
          </Link>
          <div className="mt-4">
            <Link
              to='/signup'
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Tạo Tài khoản mới
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
