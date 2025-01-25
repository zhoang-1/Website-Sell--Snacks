import React, { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Link, useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    gender: "",
    birthDate: "",
    verificationCode: "",
  });
  const [userId, setUserId] = useState(null); // Thêm trạng thái userId
  const [step, setStep] = useState(1); // 1: Nhập thông tin, 2: Nhập mã xác thực
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    setStep(2); // Chuyển sang bước xác thực ngay lập tức
    setSuccessMessage('Mã xác thực đã được gửi!');
    try {
      // Gửi thông tin người dùng và nhận mã xác thực
      const response = await axiosClient.post("/api/auth/signup", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.userName,
        email: formData.email,
        password: formData.password,
        sex: formData.gender,
        date_of_birth: formData.birthDate,
      });
      console.log(response);
      setUserId(response.data.data.userId);
    } catch (err) {
      // Lấy thông báo lỗi từ backend
      const errorMessage = err.response?.data?.message;
      setError(errorMessage);
      setSuccessMessage("");
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
   
    console.log(userId);
    try {
      // Gửi mã xác thực và hoàn tất đăng ký
      await axiosClient.post("/api/auth/verify-otp", {
        userId: userId,
        otp: formData.verificationCode,
      });
      navigate('/login')
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ;
      setError(errorMessage);
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
      <form
        className="bg-white p-6 rounded shadow-md w-96"
        onSubmit={step === 1 ? handleSendCode : handleVerifyCode}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Đăng Ký</h2>

        

        {/* Bước 1: Nhập thông tin người dùng */}
        {step === 1 && (
          <>
            <div className="flex mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Họ đệm"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="firstName"
                placeholder="Tên"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <input
                type="text"
                name="userName"
                placeholder="Username"
                value={formData.userName}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded mt-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded mt-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex mb-4">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded mr-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                <option value="">Giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>

              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded w-full mb-4"
            >
              Đăng ký
            </button>
          </>
        )}
        
        {/* Bước 2: Nhập mã xác thực */}
        {step === 2 && (
          <>
            <input
              type="text"
              name="verificationCode"
              placeholder="Mã xác thực"
              value={formData.verificationCode}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded mb-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600 transition"
            >
              Gửi mã
            </button>
          </>
        )}
          {error && <div className="text-red-500 text-center">{error}</div>}
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}
        <p className="mt-4 text-center">
          Bạn đã có tài khoản?{" "}
          <Link to="/login" className="text-blue-500  hover:underline">
            Đăng nhập
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
