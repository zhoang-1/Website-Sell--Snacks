import React, { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null); // Store userId
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/api/auth/forgotPassword", { email }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.message);
      setError("");
      setUserId(response.data.data.userId); // Store the userId from response
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Có lỗi xảy ra!");
      setMessage("");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp!");
      return;
    }
    if (!userId) {
      setError("User ID not found!");
      return;
    }
    try {
      const response = await axiosClient.post("/api/auth/verify-forgotPassword", {
        userId,  // Send userId instead of email
        otp,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage(response.data.message);
      setError("");
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || "Có lỗi xảy ra!");
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-4">{step === 1 ? 'Quên Mật Khẩu' : 'Đặt Lại Mật Khẩu'}</h2>
        </div>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {step === 1 && (
          <form onSubmit={handleSendOtp}>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600 transition"
            >
              Gửi OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleResetPassword}>
            <input
              type="text"
              placeholder="Nhập mã OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu mới"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Xác nhận mật khẩu mới"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full p-2 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full mb-4 hover:bg-blue-600 transition"
            >
              Đổi Mật Khẩu
            </button>
          </form>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}
        <p className="mt-4 text-center">
          Quay lại phần {" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
