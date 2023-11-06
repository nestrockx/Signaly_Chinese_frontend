import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import axios, { AxiosError } from "axios";
import { Dictionary } from "./models/Dictionary";
import SearchResultsList from "./components/SearchResultsList";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Dictionary[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search(searchQuery);
  };

  const search = (searchQuery: string) => {
    if (searchQuery) {
      axios
        .get<Dictionary[]>("http://localhost:8080/search/" + searchQuery, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((ex: Error | AxiosError) => {
          if (axios.isAxiosError(ex)) {
            console.log(
              ex.response?.status === 404
                ? "Resource Not Found"
                : "An unexpected error has occurred"
            );
          } else {
            console.log(ex.message);
          }
        });
    } else {
    }
  };

  return (
    <div className="App">
      <span className="heading">Signaly Chiński</span>
      <SearchBox
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <SearchResultsList searchResults={searchResults} />
    </div>
  );
};

export default App;
