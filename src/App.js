import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo";
import MovieState from "./context/movie/MovieState";

function App() {
  return (
    <MovieState>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/movie/:id" component={MovieInfo}></Route>
          </Switch>
        </div>
      </Router>
    </MovieState>
  );
}

export default App;
