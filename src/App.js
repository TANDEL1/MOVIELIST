import React, { useState } from "react";
import GenreFilter from "./Components/GenreFilter";
import MoviesList from "./Components/MoviesList";
// import data from "./components/data";
import data from "./Components/data"

const App = () => {
  const [filteredGenre, setFilteredGenre] = useState(null);

  const handleGenreChange = (genre) => {
    setFilteredGenre(genre);
  };

  const filteredData = filteredGenre
    ? data.filter((movie) => movie.genre === filteredGenre)
    : data;

  return (
    <>
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter onGenreChange={handleGenreChange} />
      <MoviesList data={filteredData} />
    </>
  );
};

export default App;
