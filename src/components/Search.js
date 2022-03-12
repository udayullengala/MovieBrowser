import React from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";

const Search = ({ keyword, searchResults }) => {
  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  return (
    <>
      <Hero text={`You are searching for ${keyword}`} />
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center">
          {resultsHtml}
        </div>
      </div>
    </>
  );
};

export default Search;
