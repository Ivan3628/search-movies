import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = ({ movie: { id, title, poster_path } }) => {
  return (
    <div className="bg-gray-900 px-4 pt-4 pb-5 overflow-hidden rounded">
      <img
        src={"https://image.tmdb.org/t/p/w400/" + poster_path}
        alt=""
        className="w-full block content-center"
      />
      <h6 className="text-base text-center text-white my-3 font-mono">
        {title}
      </h6>
      <div>
        <Link
          to={`/movie/${id}`}
          className=" mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Movie Details
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;