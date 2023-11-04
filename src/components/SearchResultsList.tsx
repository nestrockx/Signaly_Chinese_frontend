import React from "react";
import { Dictionary } from "../models/Dictionary";
import "../styles/SearchResults.css";
import SearchResult from "./SearchResult";

interface Props {
  searchResults: Dictionary[];
}

const SearchResultsList = ({ searchResults }: Props) => {
  return (
    <div className="search_results">
      {searchResults.map((result) => {
        return <SearchResult searchResult={result} />;
      })}
    </div>
  );
};

export default SearchResultsList;
