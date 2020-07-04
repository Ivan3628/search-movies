import React, { useContext, useEffect } from "react";
import MovieContext from "../context/movie/movieContext";
import AlternativeImage from "./images/AlternativeImage";

const MovieInfo = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { movieInfo, getMovieInfo } = movieContext;

  useEffect(() => {
    getMovieInfo(match.params.id);
    //eslint-disable-next-line
  }, []);

  const {
    poster_path,
    title,
    genres = [],
    release_date,
    revenue,
    budget,
    vote_average,
    credits,
  } = movieInfo;
  debugger;

  //Get genres
  const genresArr = [];

  genres.forEach((genre) => {
    if (genre.name) {
      genresArr.push(genre.name);
    }
  });

  const genre2 = genresArr.slice(0, 2);
  const genreStr = genre2.toString();
  const firstTwoGenres = genreStr.split("");

  //Get director

  const directorArr = [];
  /*
  credits.crew.forEach((entry) => {
    if (entry.job === "Director") {
      directorArr.push(entry.name);
    }
  });

  const getDirector = directorArr.slice(0, 1);
  const director = getDirector.toString();
  */

  return (
    <div className="w-full bg-black">
      <div className="container w-4/5 h-600px overflow-hidden bg-gray-900 mx-auto mt-4">
        <div className="w-1/4 h-auto float-left overflow-hidden">
          {poster_path ? (
            <img
              src={"https://image.tmdb.org/t/p/w400/" + poster_path}
              alt=""
              className="w-full block content-center p-4"
            />
          ) : (
            <AlternativeImage></AlternativeImage>
          )}
        </div>
        <div className="w-3/4 h-auto float-right overflow-hidden  p-2">
          <h3 className="text-2xl text-white font-mono mt-4 mb-3">{title}</h3>
          <p className=" text-white font-mono ">Genre:{firstTwoGenres}</p>
          <p className=" text-white font-mono ">Released:{release_date}</p>
          <p className=" text-white font-mono ">Budget:${budget}</p>
          <p className=" text-white font-mono ">Revenue:${revenue}</p>
          <p className=" text-white font-mono ">Rating:{vote_average}</p>
          <p className=" text-white font-mono ">Director:</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
