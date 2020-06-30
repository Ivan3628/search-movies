import React, { Fragment } from "react";
import Search from "./Search";
import Movies from "./Movies";

const Home = () => {
  return (
    <Fragment>
      <Search></Search>
      <Movies></Movies>
    </Fragment>
  );
};

export default Home;
