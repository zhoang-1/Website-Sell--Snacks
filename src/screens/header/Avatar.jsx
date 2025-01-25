import React, { useState, useEffect, useRef } from "react";
import Facebook_Logo from "../../assest/image/Facebook_Logo.png.webp";
import Modal from "../../component/Modal"; // Import Modal Component
import { useNavigate } from "react-router-dom";

const Avatar = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Quản lý trạng thái modal
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddAccount = () => {
    setIsMenuOpen(false);
    navigate("/my-account");
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true); // Hiển thị modal khi nhấn Đăng xuất
    setIsMenuOpen(false); // Đóng menu
  };

  const confirmLogout = () => {
    setIsModalOpen(false); // Đóng modal
    onLogout(); // Gọi hàm đăng xuất từ props
    navigate("/login");
  };

  const cancelLogout = () => {
    setIsModalOpen(false); // Đóng modal
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="avatar">
      <span
        className="block h-[40px] w-[40px] ml-4  bg-cover rounded-full cursor-pointer"
        onClick={toggleMenu}
        style={{
          backgroundImage: `url(${Facebook_Logo})`,
        }}
      ></span>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border"
        >
          <button
            onClick={handleAddAccount}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Trang cá nhân
          </button>
          <button
            onClick={handleLogoutClick} // Gọi hàm để mở modal
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Đăng xuất
          </button>
        </div>
      )}
      {isModalOpen && (
        <Modal
          title="Xác nhận đăng xuất"
          message="Bạn có chắc chắn muốn đăng xuất không?"
          onConfirm={confirmLogout} // Xác nhận đăng xuất
          onCancel={cancelLogout} // Hủy đăng xuất
        />
      )}
    </div>
  );
};

export default Avatar;
