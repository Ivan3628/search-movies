import { SEARCH_MOVIES, GET_MOVIE_INFO, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIE_INFO:
      return {
        ...state,
        movieInfo: action.payload,
      };

    default:
      return state;
  }
};
