import React from "react";
import { Dictionary } from "../models/Dictionary";
import "../styles/SearchResults.css";

interface Props {
  searchResult: Dictionary;
}

const SearchResult = ({ searchResult }: Props) => {
  return (
    <div className="search_result">
      <span className="traditional">{searchResult.traditionalSign}</span>
      <span className="simplified">
        {"(" + searchResult.simplifiedSign + ")"}
      </span>
      <span className="pronunciation">{searchResult.pronunciation}</span>
      <br />
      <ol type="1" className="translation">
        {searchResult.translation.split("/").map((translated) => {
          return <li>{translated}</li>;
        })}
      </ol>
    </div>
  );
};

export default SearchResult;
