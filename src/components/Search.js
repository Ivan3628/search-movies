import React, { useState, useContext } from "react";
import MovieContext from "../context/movie/movieContext";
import AlertContext from "../context/alert/alertContext";

const Search = () => {
  const movieContext = useContext(MovieContext);
  const { searchMovies } = movieContext;
  const [text, setText] = useState("");

  const alertContext = useContext(AlertContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "red-800");
    } else {
      searchMovies(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="w-full bg-black py-6">
      <div className="container w-4/5 overflow-hidden bg-gray-900 mx-auto pt-8 pb-3">
        <h2 className="text-3xl text-center text-white font-mono mt-5">
          Search Movies
        </h2>

        <form onSubmit={onSubmit} className="mx-auto w-4/5 mb-4">
          <input
            type="text"
            name="text"
            placeholder="Search..."
            value={text}
            className="w-full px-4 py-2 rounded"
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white text-center font-mono px-4 py-2 mt-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Search;
