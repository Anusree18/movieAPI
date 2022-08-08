import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeader from "./Components/MovieListHeader";
import SearchBox from "./Components/SearchBox";
import axios from "axios";
import MovieLists from "./Components/MovieLists";
import Nav from "./Components/Navbar";

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
    <div className="container-fluid movie-app">
      <Nav/>
      <div className="row d-flex mt-4 mb-4">
        <MovieListHeader heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      
      <div className="d-flex  gap-4 ">
        <MovieList movies={movies} />
      
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Search Results" />
      </div>
     
        <div className="d-flex gap-4  ">
          <MovieLists movies={updatedMovies} />
        
      </div>
    </div>
  );
};
export default App;
