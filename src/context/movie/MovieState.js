import React, { useReducer } from "react";
import axios from "axios";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import { SEARCH_MOVIES, GET_MOVIE_INFO } from "../types";

const MovieState = (props) => {
  const initialState = {
    movies: [],
    movieInfo: {},
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  //Search Users

  const searchMovies = async (text) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=29f1ef0ce04236b80ee6011277b3ebc7&query=${text}`
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: response.data.results,
    });
  };

  //Movie Info

  const getMovieInfo = async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=29f1ef0ce04236b80ee6011277b3ebc7&append_to_response=credits`
    );
    dispatch({
      type: GET_MOVIE_INFO,
      payload: response.data,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movieInfo: state.movieInfo,
        loading: state.loading,
        searchMovies,
        getMovieInfo,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
