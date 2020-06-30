import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import MovieContext from "../context/movie/movieContext";

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { movies } = movieContext;

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie}></MovieItem>
      ))}
    </div>
  );
};

export default Movies;
