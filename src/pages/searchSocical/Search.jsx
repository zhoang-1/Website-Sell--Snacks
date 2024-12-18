import React, { useEffect, useState } from "react";
import "./Search.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [dataSearched, setdataSearched] = useState([]);
  const [dataSearchedPrev, setdataSearchedPrev] = useState([]);

  const { keySearch } = useParams();

  useEffect(() => {
    async function fecthData() {
      let res = await axios.get(
        `API Key`
      );

      if (JSON.stringify(res.data.items) !== dataSearchedPrev) {
        setdataSearched(res.data.items);
        setdataSearchedPrev(res.data.items);
      }
    }

    fecthData();
  }, []);

  return (
    <div className="search-screen">
      <h2 style={{ fontSize: "24px" }}>Kết quả tìm kiếm:</h2>
      {dataSearched.map((item, index) => {
        return
      })}
    </div>
  );
};

export default Search;