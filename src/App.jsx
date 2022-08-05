import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeader from "./Components/MovieListHeader";
import SearchBox from "./Components/SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [updatedMovies, setUpdatedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const displayMovies = async () => {
    const urlMovie = `https://fake-movie-database-api.herokuapp.com/api?s=batman`;
    const response = await fetch(urlMovie);
    const responseJson = await response.json();

    setMovies(responseJson);
    
  };

  const getMovieRequest = async (searchValue) => {
    const url = `https://fake-movie-database-api.herokuapp.com/api?s=${searchValue}`;
    const responses = await fetch(url);
    console.log(responses);
    const responsesJson = await responses.json();
    const Movies=responsesJson.map((movie)=>{
      console.log(movie.Title)})

    console.log(Movies);

    if (responsesJson.Poster) {
      setUpdatedMovies(responsesJson.Poster);
    }
  };

  useEffect(() => {
    displayMovies();
  }, []);

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="d-flex gap-4  ">
        <MovieList movies={movies} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Search Results" />
      </div>
      <div className=" d-flex ">
        <MovieList movies={updatedMovies} />
      </div>
    </div>
  );
};
export default App;
