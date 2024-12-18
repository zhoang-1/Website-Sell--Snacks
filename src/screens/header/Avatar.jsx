import React, { useState, useEffect, useRef } from "react";
import Facebook_Logo from "../../assest/image/Facebook_Logo.png.webp";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Tham chiếu đến menu thả xuống
  const navigate = useNavigate(); // Hook để điều hướng
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAddAccount = () => {
    setIsMenuOpen(false); // Đóng menu
    navigate("/my-account"); // Chuyển hướng đến đường dẫn thêm tài khoản
  };
  const handleLogout = () => {
    setIsMenuOpen(false); // Đóng menu
    navigate("/logout");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Đóng menu nếu nhấp ra ngoài
    }
  };

  useEffect(() => {
    // Thêm trình lắng nghe sự kiện khi menu mở
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Xóa trình lắng nghe sự kiện khi menu đóng
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
          // backgroundImage: `url(${props.profile_picture})`,
        }}
      ></span>
      {/* Menu thả xuống */}
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
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Avatar;
