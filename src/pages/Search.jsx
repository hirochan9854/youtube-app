import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchResult from "@/components/SearchResult";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-gray-100 flex-grow p-6">
        <h2 className="text-3xl font-normal mb-6 text-left">検索</h2>
        <div className="flex items-stretch overflow-x-auto mb-4">
          <form onSubmit={handleSearch} className="flex w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 border border-gray-300 rounded-l-md flex-grow"
              placeholder="検索"
            />
            <button
              type="submit"
              className="p-2 bg-gray-800 text-white rounded-r-md flex items-center justify-center"
            >
              <svg
                id="_レイヤー_2"
                data-name="レイヤー 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-6 w-6"
              >
                <defs>
                  <style>
                    {`.cls-1 {
                      fill: #ffffff;
                      stroke-width: 0px;
                    }`}
                  </style>
                </defs>
                <g id="_2" data-name="2">
                  <path
                    className="cls-1"
                    d="M495.27,423.56s-68.54-59.95-84.94-76.33c-24.06-23.94-33.69-35.47-25.2-54.93,37.15-75.78,24.3-169.85-38.72-232.86-79.24-79.25-207.74-79.25-286.98,0-79.25,79.26-79.25,207.73,0,287,62.99,62.99,157.09,75.84,232.84,38.69,19.47-8.48,31.02,1.14,54.95,25.21,16.38,16.39,76.31,84.94,76.31,84.94,31.09,31.07,55.01,11.95,69.37-2.39,14.33-14.35,33.46-38.26,2.37-69.34ZM286.01,286.01c-45.9,45.87-120.29,45.87-166.17,0-45.88-45.87-45.88-120.28,0-166.15,45.88-45.87,120.27-45.87,166.17,0,45.88,45.87,45.88,120.28,0,166.15Z"
                  />
                </g>
              </svg>
            </button>
          </form>
        </div>
        <SearchResult query={searchQuery} />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
