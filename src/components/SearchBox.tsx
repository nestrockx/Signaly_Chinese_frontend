import React, { useState } from "react";
import "../styles/SearchBox.css";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const SearchBox = ({ searchQuery, setSearchQuery, handleSubmit }: Props) => {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="汉字 pinyin polski"
        className="search_box"
      />
      <button
        className="delete_btn"
        type="button"
        onClick={() => setSearchQuery("")}
      >
        <AiOutlineClose size={40} />
      </button>
      <button className="submit_btn" type="submit">
        <AiOutlineSearch size={40} />
      </button>
    </form>
  );
};

export default SearchBox;
