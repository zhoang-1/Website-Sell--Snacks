import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Searchbar = () => {
  const history = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history(`search/${keyword}`);
  };
  return (
    <div className="box flex justify-center h-[40px]  rounded-[50px]">
      {/* <div className="  text-center pl-[20px] "> */}
      <form
        className="flex items-center border-[1px] border-solid border-green-300/40 rounded-[30px] pr-2 "
        action="/search"
        method="get"
      >
        <Link
          to="/search"
          className="text-center text-[24px] p-3 "
          type="submit"
        >
          <button type="submit" onClick={handleSubmit}>
            <CiSearch className="text-[#001EFF]" />
          </button>
        </Link>
        <input
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          type="search"
          id="search"
          placeholder="Search..."
          className="bg-transparent text-[18px] border-l-2 border-l-indigo-400/30 border-solid pl-[8px] outline-none"
        />
      </form>
    </div>
  );
};

export default Searchbar;
