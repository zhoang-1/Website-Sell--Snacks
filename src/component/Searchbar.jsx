import { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const history = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const searchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim() === "") return;

    const updatedHistory = [keyword, ...searchHistory]
      .filter((value, index, self) => self.indexOf(value) === index)
      .slice(0, 5);
    setSearchHistory(updatedHistory);

    history(`/search/${keyword}`);
    setKeyword(""); // Làm trống input
    setShowHistory(false); // Ẩn lịch sử
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setKeyword(newValue);
  
    // Hiển thị lịch sử khi input có nội dung hoặc khi ô tìm kiếm được focus
    setShowHistory(newValue.trim() !== "" || searchHistory.length > 0);
  };

  const handleHistoryClick = (value) => {
    setKeyword(value);
    setShowHistory(false); // Ẩn lịch sử khi click vào gợi ý
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowHistory(false); // Ẩn lịch sử nếu click ra ngoài
    }
  };
  const handleDeleteHistoryItem = (index) => {
    const newHistory = searchHistory.filter((_, i) => i !== index);
    setSearchHistory(newHistory);
  };
  // Xử lý click bên ngoài để ẩn lịch sử
  useEffect(() => {
    if (showHistory) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHistory]);
  return (
    <div
      ref={searchRef}
      className="box justify-center h-[40px]  rounded-[50px]"
    >
      {/* <div className="  text-center pl-[20px] "> */}
      <form
        className="flex items-center text-center h-10 px-4 py-1 border-none rounded-full outline-none bg-gray-200 ml-2 "
        action="/search"
        method="get"
        onSubmit={handleSubmit}
      >
        <button type="submit" className=" text-[24px] pr-[6px]">
          <CiSearch className=" text-[#001EFF]" />
        </button>
        <input
          type="search"
          value={keyword}
          onChange={handleInputChange}
          onFocus={() => setShowHistory(searchHistory.length > 0)} // Hiển thị lịch sử khi input được focus
          autoComplete="off"
          id="search"
          placeholder="Search Mediabook..."
          className="bg-transparent text-[16px] bg-gray-200 outline-none placeholder:text-sm placeholder:bg-transparent placeholder:font-light placeholder:text-gray-500"
        />
      </form>
      {/* Hiển thị lịch sử tìm kiếm */}
      {showHistory && searchHistory.length > 0 && (
  <div className="absolute w-[20%] mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10   ">
    {searchHistory.map((item, index) => (
      <div
        key={index}
        onClick={() => handleHistoryClick(item)}
        className="w-full cursor-pointer items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition duration-200 rounded-md overflow-hidden whitespace-nowrap text-ellipsis"
      >
        <span className="truncate w-[90%]">{item}</span>
        {/* Nút xóa */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Ngăn không kích hoạt sự kiện click chính.
            handleDeleteHistoryItem(index);
          }}
          className="float-right w-[5%] items-center text-[12px] mr-2 text-gray-500 hover:text-red-500"
        >
          ✖
        </button>
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default Searchbar;
