import React, { useContext, useEffect } from "react";
import MovieContext from "../context/movie/movieContext";
import AlternativeImage from "./AlternativeImage";

import { Link } from "react-router-dom";

const MovieInfo = ({ match }) => {
  const movieContext = useContext(MovieContext);
  const { movieInfo, getMovieInfo } = movieContext;

  useEffect(() => {
    getMovieInfo(match.params.id);
    //eslint-disable-next-line,
  }, []);

  const {
    poster_path,
    title,
    genres = [],
    release_date,
    revenue,
    budget,
    vote_average,
    credits = { cast: [], crew: [] },
    overview,
    homepage,
  } = movieInfo;

  //Get genres
  const genresArr = [];

  genres.forEach((genre) => {
    if (genre.name) {
      genresArr.push(genre.name);
    }
  });

  const genre2 = genresArr.slice(0, 2);
  const genreStr = genre2.toString();
  const firstTwoGenres = genre2.join(", ");

  //Get director

  const directorArr = [];
  credits.crew.forEach((entry) => {
    if (entry.job === "Director") {
      directorArr.push(entry.name);
    }
  });

  const getDirector = directorArr.length ? directorArr.slice(0, 1) : "";
  const director = getDirector.toString();

  //Get writer
  const allWriters = credits.crew.filter(
    (credit) => credit.department === "Writing"
  );
  const writer = allWriters.length ? allWriters[0].name : "";

  //Get actors
  const actors = credits.cast.length
    ? credits.cast
        .slice(0, Math.min(credits.cast.length, 3))
        .map((c) => c.name)
        .join(", ")
    : "";

  return (
    <div className="w-full bg-black">
      <div className="container w-4/5 h-600px overflow-hidden bg-gray-900 mx-auto mt-4">
        <div className="w-full lg:w-1/4 h-auto float-left  overflow-hidden">
          {poster_path ? (
            <img
              src={"https://image.tmdb.org/t/p/w400/" + poster_path}
              alt=""
              className="w-full block content-center p-4 content-image"
            />
          ) : (
            <AlternativeImage></AlternativeImage>
          )}
        </div>
        <div className="w-full lg:w-3/4 h-auto float-right  overflow-hidden p-2">
          <h3 className="text-2xl text-white font-mono mt-4 mb-3">{title}</h3>
          <div className="w-full bg-gray-800 overflow-hidden p-2">
            <p className=" text-white font-mono leading-relaxed">
              Genre:{firstTwoGenres}
            </p>
            <p className=" text-white font-mono leading-relaxed">
              Released:{release_date}
            </p>
            <p className=" text-white font-mono leading-relaxed">
              Budget:${budget}
            </p>
            <p className=" text-white font-mono leading-relaxed">
              Revenue:${revenue}
            </p>
            <p className=" text-white font-mono leading-relaxed">
              Rating:{vote_average}
            </p>
            <p className=" text-white font-mono leading-relaxed">
              Director: {director}
            </p>
            <p className=" text-white font-mono leading-relaxed">
              Writer: {writer}
            </p>
            <p className=" text-white font-mono leading-relaxed">
              Actors: {actors}
            </p>
          </div>
        </div>
        <div className="container w-full h-600px  overflow-hidden bg-gray-900 mx-auto pt-0 px-2 pb-3">
          <div className="w-full border-black overflow-hidden p-2">
            <h4 className="text-2xl text-white font-mono mt-4 mb-1">Plot</h4>
            <p className=" text-white font-mono mb-6">{overview}</p>
            <a
              href={homepage}
              class=" block md:inline lg:inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 mb-3 md:mb-0 lg:mb-0 text-center sm:text-center rounded"
            >
              Website
            </a>
            <Link
              to={"/"}
              className="block md:inline lg:inline  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center sm:text-center rounded "
            >
              Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
