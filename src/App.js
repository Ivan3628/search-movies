import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieInfo from "./components/MovieInfo";
import MovieState from "./context/movie/MovieState";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
    <MovieState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/movie/:id" component={MovieInfo}></Route>
            </Switch>
          </div>
        </Router>
      </AlertState>
    </MovieState>
  );
}

export default App;
