import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeader from "./Components/MovieListHeader";
import SearchBox from "./Components/SearchBox";
import axios from "axios";
import MovieLists from "./Components/MovieLists";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [updatedMovies, setUpdatedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //displaying movies
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://fake-movie-database-api.herokuapp.com/api?s=batman",
      headers: {},
    };

    axios(config).then(function (response) {
      setMovies(response.data);
    });
  });

  //Search
  const getSearchResults = async (searchValue) => {
    const urlMovie = `http://www.omdbapi.com/?s=${searchValue}&apikey=dffa82ec`;

    const response = await fetch(urlMovie);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.Search) {
      setUpdatedMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getSearchResults(searchValue);
  }, [searchValue]);

  return (
    <div className="container movie-app">
      <div className="navbar bg-secondary text-white d-flex justify-content-between sticky-top">
        <h1>Movie Page</h1>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="text-center ">
        <MovieListHeader heading="Movie Results" />
      </div>

      <div className="row ">
        <MovieList movies={movies} />
      </div>
      <div className="text-center">
        <MovieListHeader heading="Search Results" />
      </div>

      <div className="row  ">
        <MovieLists movies={updatedMovies} />
      </div>
    </div>
  );
};
export default App;
